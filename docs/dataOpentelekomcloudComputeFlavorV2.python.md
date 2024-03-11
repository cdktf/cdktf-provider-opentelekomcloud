# `dataOpentelekomcloudComputeFlavorV2` Submodule <a name="`dataOpentelekomcloudComputeFlavorV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeFlavorV2 <a name="DataOpentelekomcloudComputeFlavorV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2 opentelekomcloud_compute_flavor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_flavor_v2

dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2(
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
  disk: typing.Union[int, float] = None,
  flavor_id: str = None,
  id: str = None,
  min_disk: typing.Union[int, float] = None,
  min_ram: typing.Union[int, float] = None,
  name: str = None,
  ram: typing.Union[int, float] = None,
  region: str = None,
  resource_type: str = None,
  rx_tx_factor: typing.Union[int, float] = None,
  swap: typing.Union[int, float] = None,
  vcpus: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#availability_zone DataOpentelekomcloudComputeFlavorV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#disk DataOpentelekomcloudComputeFlavorV2#disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#flavor_id DataOpentelekomcloudComputeFlavorV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#id DataOpentelekomcloudComputeFlavorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.minDisk">min_disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_disk DataOpentelekomcloudComputeFlavorV2#min_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.minRam">min_ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_ram DataOpentelekomcloudComputeFlavorV2#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#name DataOpentelekomcloudComputeFlavorV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#ram DataOpentelekomcloudComputeFlavorV2#ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#region DataOpentelekomcloudComputeFlavorV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#resource_type DataOpentelekomcloudComputeFlavorV2#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.rxTxFactor">rx_tx_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#rx_tx_factor DataOpentelekomcloudComputeFlavorV2#rx_tx_factor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.swap">swap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#swap DataOpentelekomcloudComputeFlavorV2#swap}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#vcpus DataOpentelekomcloudComputeFlavorV2#vcpus}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#availability_zone DataOpentelekomcloudComputeFlavorV2#availability_zone}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.disk"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#disk DataOpentelekomcloudComputeFlavorV2#disk}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#flavor_id DataOpentelekomcloudComputeFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#id DataOpentelekomcloudComputeFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_disk`<sup>Optional</sup> <a name="min_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.minDisk"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_disk DataOpentelekomcloudComputeFlavorV2#min_disk}.

---

##### `min_ram`<sup>Optional</sup> <a name="min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.minRam"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_ram DataOpentelekomcloudComputeFlavorV2#min_ram}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#name DataOpentelekomcloudComputeFlavorV2#name}.

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#ram DataOpentelekomcloudComputeFlavorV2#ram}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#region DataOpentelekomcloudComputeFlavorV2#region}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#resource_type DataOpentelekomcloudComputeFlavorV2#resource_type}.

---

##### `rx_tx_factor`<sup>Optional</sup> <a name="rx_tx_factor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.rxTxFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#rx_tx_factor DataOpentelekomcloudComputeFlavorV2#rx_tx_factor}.

---

##### `swap`<sup>Optional</sup> <a name="swap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.swap"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#swap DataOpentelekomcloudComputeFlavorV2#swap}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.vcpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#vcpus DataOpentelekomcloudComputeFlavorV2#vcpus}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinDisk">reset_min_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinRam">reset_min_ram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRam">reset_ram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRxTxFactor">reset_rx_tx_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetSwap">reset_swap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetVcpus">reset_vcpus</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_min_disk` <a name="reset_min_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinDisk"></a>

```python
def reset_min_disk() -> None
```

##### `reset_min_ram` <a name="reset_min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinRam"></a>

```python
def reset_min_ram() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ram` <a name="reset_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRam"></a>

```python
def reset_ram() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_rx_tx_factor` <a name="reset_rx_tx_factor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRxTxFactor"></a>

```python
def reset_rx_tx_factor() -> None
```

##### `reset_swap` <a name="reset_swap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetSwap"></a>

```python
def reset_swap() -> None
```

##### `reset_vcpus` <a name="reset_vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetVcpus"></a>

```python
def reset_vcpus() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeFlavorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_flavor_v2

dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_flavor_v2

dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_flavor_v2

dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_flavor_v2

dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeFlavorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudComputeFlavorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudComputeFlavorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeFlavorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.extraSpecs">extra_specs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.diskInput">disk_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDiskInput">min_disk_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRamInput">min_ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactorInput">rx_tx_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swapInput">swap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpusInput">vcpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.disk">disk</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDisk">min_disk</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRam">min_ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactor">rx_tx_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swap">swap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `extra_specs`<sup>Required</sup> <a name="extra_specs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.extraSpecs"></a>

```python
extra_specs: StringMap
```

- *Type:* cdktf.StringMap

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.diskInput"></a>

```python
disk_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `min_disk_input`<sup>Optional</sup> <a name="min_disk_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDiskInput"></a>

```python
min_disk_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram_input`<sup>Optional</sup> <a name="min_ram_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRamInput"></a>

```python
min_ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `rx_tx_factor_input`<sup>Optional</sup> <a name="rx_tx_factor_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactorInput"></a>

```python
rx_tx_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `swap_input`<sup>Optional</sup> <a name="swap_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swapInput"></a>

```python
swap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus_input`<sup>Optional</sup> <a name="vcpus_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpusInput"></a>

```python
vcpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.disk"></a>

```python
disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_disk`<sup>Required</sup> <a name="min_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDisk"></a>

```python
min_disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram`<sup>Required</sup> <a name="min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRam"></a>

```python
min_ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `rx_tx_factor`<sup>Required</sup> <a name="rx_tx_factor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactor"></a>

```python
rx_tx_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `swap`<sup>Required</sup> <a name="swap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swap"></a>

```python
swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeFlavorV2Config <a name="DataOpentelekomcloudComputeFlavorV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_flavor_v2

dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  disk: typing.Union[int, float] = None,
  flavor_id: str = None,
  id: str = None,
  min_disk: typing.Union[int, float] = None,
  min_ram: typing.Union[int, float] = None,
  name: str = None,
  ram: typing.Union[int, float] = None,
  region: str = None,
  resource_type: str = None,
  rx_tx_factor: typing.Union[int, float] = None,
  swap: typing.Union[int, float] = None,
  vcpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#availability_zone DataOpentelekomcloudComputeFlavorV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.disk">disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#disk DataOpentelekomcloudComputeFlavorV2#disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#flavor_id DataOpentelekomcloudComputeFlavorV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#id DataOpentelekomcloudComputeFlavorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minDisk">min_disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_disk DataOpentelekomcloudComputeFlavorV2#min_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minRam">min_ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_ram DataOpentelekomcloudComputeFlavorV2#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#name DataOpentelekomcloudComputeFlavorV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#ram DataOpentelekomcloudComputeFlavorV2#ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#region DataOpentelekomcloudComputeFlavorV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#resource_type DataOpentelekomcloudComputeFlavorV2#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.rxTxFactor">rx_tx_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#rx_tx_factor DataOpentelekomcloudComputeFlavorV2#rx_tx_factor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.swap">swap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#swap DataOpentelekomcloudComputeFlavorV2#swap}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#vcpus DataOpentelekomcloudComputeFlavorV2#vcpus}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#availability_zone DataOpentelekomcloudComputeFlavorV2#availability_zone}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.disk"></a>

```python
disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#disk DataOpentelekomcloudComputeFlavorV2#disk}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#flavor_id DataOpentelekomcloudComputeFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#id DataOpentelekomcloudComputeFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_disk`<sup>Optional</sup> <a name="min_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minDisk"></a>

```python
min_disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_disk DataOpentelekomcloudComputeFlavorV2#min_disk}.

---

##### `min_ram`<sup>Optional</sup> <a name="min_ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minRam"></a>

```python
min_ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#min_ram DataOpentelekomcloudComputeFlavorV2#min_ram}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#name DataOpentelekomcloudComputeFlavorV2#name}.

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#ram DataOpentelekomcloudComputeFlavorV2#ram}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#region DataOpentelekomcloudComputeFlavorV2#region}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#resource_type DataOpentelekomcloudComputeFlavorV2#resource_type}.

---

##### `rx_tx_factor`<sup>Optional</sup> <a name="rx_tx_factor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.rxTxFactor"></a>

```python
rx_tx_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#rx_tx_factor DataOpentelekomcloudComputeFlavorV2#rx_tx_factor}.

---

##### `swap`<sup>Optional</sup> <a name="swap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.swap"></a>

```python
swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#swap DataOpentelekomcloudComputeFlavorV2#swap}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/compute_flavor_v2#vcpus DataOpentelekomcloudComputeFlavorV2#vcpus}.

---



