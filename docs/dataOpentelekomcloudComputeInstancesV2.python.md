# `data_opentelekomcloud_compute_instances_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_compute_instances_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2).

# `dataOpentelekomcloudComputeInstancesV2` Submodule <a name="`dataOpentelekomcloudComputeInstancesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeInstancesV2 <a name="DataOpentelekomcloudComputeInstancesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2 opentelekomcloud_compute_instances_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  flavor_id: str = None,
  flavor_name: str = None,
  id: str = None,
  image_id: str = None,
  instance_id: str = None,
  key_pair: str = None,
  limit: typing.Union[int, float] = None,
  name: str = None,
  project_id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorName">flavor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}.

---

##### `flavor_name`<sup>Optional</sup> <a name="flavor_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorName">reset_flavor_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_flavor_name` <a name="reset_flavor_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorName"></a>

```python
def reset_flavor_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeInstancesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeInstancesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudComputeInstancesV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudComputeInstancesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeInstancesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList">DataOpentelekomcloudComputeInstancesV2InstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorNameInput">flavor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorName">flavor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instances"></a>

```python
instances: DataOpentelekomcloudComputeInstancesV2InstancesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList">DataOpentelekomcloudComputeInstancesV2InstancesList</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `flavor_name_input`<sup>Optional</sup> <a name="flavor_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorNameInput"></a>

```python
flavor_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `flavor_name`<sup>Required</sup> <a name="flavor_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorName"></a>

```python
flavor_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeInstancesV2Config <a name="DataOpentelekomcloudComputeInstancesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  flavor_id: str = None,
  flavor_name: str = None,
  id: str = None,
  image_id: str = None,
  instance_id: str = None,
  key_pair: str = None,
  limit: typing.Union[int, float] = None,
  name: str = None,
  project_id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorName">flavor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}.

---

##### `flavor_name`<sup>Optional</sup> <a name="flavor_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorName"></a>

```python
flavor_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}.

---

### DataOpentelekomcloudComputeInstancesV2Instances <a name="DataOpentelekomcloudComputeInstancesV2Instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances()
```


### DataOpentelekomcloudComputeInstancesV2InstancesNetwork <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetwork" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeInstancesV2InstancesList <a name="DataOpentelekomcloudComputeInstancesV2InstancesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudComputeInstancesV2InstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudComputeInstancesV2InstancesNetworkList <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork">DataOpentelekomcloudComputeInstancesV2InstancesNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_ip_v4`<sup>Required</sup> <a name="fixed_ip_v4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

---

##### `fixed_ip_v6`<sup>Required</sup> <a name="fixed_ip_v6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudComputeInstancesV2InstancesNetwork
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork">DataOpentelekomcloudComputeInstancesV2InstancesNetwork</a>

---


### DataOpentelekomcloudComputeInstancesV2InstancesOutputReference <a name="DataOpentelekomcloudComputeInstancesV2InstancesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instances_v2

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList">DataOpentelekomcloudComputeInstancesV2InstancesNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.systemDiskId">system_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances">DataOpentelekomcloudComputeInstancesV2Instances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.network"></a>

```python
network: DataOpentelekomcloudComputeInstancesV2InstancesNetworkList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList">DataOpentelekomcloudComputeInstancesV2InstancesNetworkList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `security_groups_ids`<sup>Required</sup> <a name="security_groups_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_disk_id`<sup>Required</sup> <a name="system_disk_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.systemDiskId"></a>

```python
system_disk_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudComputeInstancesV2Instances
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances">DataOpentelekomcloudComputeInstancesV2Instances</a>

---



