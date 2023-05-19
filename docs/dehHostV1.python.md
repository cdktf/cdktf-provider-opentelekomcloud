# `opentelekomcloud_deh_host_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_deh_host_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1).

# `dehHostV1` Submodule <a name="`dehHostV1` Submodule" id="@cdktf/provider-opentelekomcloud.dehHostV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DehHostV1 <a name="DehHostV1" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1 opentelekomcloud_deh_host_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str,
  host_type: str,
  name: str,
  auto_placement: str = None,
  available_instance_capacities: typing.Union[IResolvable, typing.List[DehHostV1AvailableInstanceCapacities]] = None,
  available_memory: typing.Union[int, float] = None,
  available_vcpus: typing.Union[int, float] = None,
  cores: typing.Union[int, float] = None,
  host_type_name: str = None,
  id: str = None,
  instance_total: typing.Union[int, float] = None,
  instance_uuids: typing.List[str] = None,
  memory: typing.Union[int, float] = None,
  region: str = None,
  sockets: typing.Union[int, float] = None,
  status: str = None,
  timeouts: DehHostV1Timeouts = None,
  vcpus: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostType">host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type DehHostV1#host_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#name DehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.autoPlacement">auto_placement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableInstanceCapacities">available_instance_capacities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]</code> | available_instance_capacities block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableMemory">available_memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableVcpus">available_vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#cores DehHostV1#cores}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostTypeName">host_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#id DehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceTotal">instance_total</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceUuids">instance_uuids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#memory DehHostV1#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#region DehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.sockets">sockets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#sockets DehHostV1#sockets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#status DehHostV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}.

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type DehHostV1#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#name DehHostV1#name}.

---

##### `auto_placement`<sup>Optional</sup> <a name="auto_placement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.autoPlacement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}.

---

##### `available_instance_capacities`<sup>Optional</sup> <a name="available_instance_capacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableInstanceCapacities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]

available_instance_capacities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_instance_capacities DehHostV1#available_instance_capacities}

---

##### `available_memory`<sup>Optional</sup> <a name="available_memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableMemory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}.

---

##### `available_vcpus`<sup>Optional</sup> <a name="available_vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableVcpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.cores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#cores DehHostV1#cores}.

---

##### `host_type_name`<sup>Optional</sup> <a name="host_type_name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostTypeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#id DehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_total`<sup>Optional</sup> <a name="instance_total" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceTotal"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}.

---

##### `instance_uuids`<sup>Optional</sup> <a name="instance_uuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceUuids"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.memory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#memory DehHostV1#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#region DehHostV1#region}.

---

##### `sockets`<sup>Optional</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.sockets"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#sockets DehHostV1#sockets}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#status DehHostV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#timeouts DehHostV1#timeouts}

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.vcpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities">put_available_instance_capacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAutoPlacement">reset_auto_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableInstanceCapacities">reset_available_instance_capacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableMemory">reset_available_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableVcpus">reset_available_vcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetCores">reset_cores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetHostTypeName">reset_host_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceTotal">reset_instance_total</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceUuids">reset_instance_uuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetSockets">reset_sockets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetVcpus">reset_vcpus</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_available_instance_capacities` <a name="put_available_instance_capacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities"></a>

```python
def put_available_instance_capacities(
  value: typing.Union[IResolvable, typing.List[DehHostV1AvailableInstanceCapacities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#create DehHostV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#delete DehHostV1#delete}.

---

##### `reset_auto_placement` <a name="reset_auto_placement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAutoPlacement"></a>

```python
def reset_auto_placement() -> None
```

##### `reset_available_instance_capacities` <a name="reset_available_instance_capacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableInstanceCapacities"></a>

```python
def reset_available_instance_capacities() -> None
```

##### `reset_available_memory` <a name="reset_available_memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableMemory"></a>

```python
def reset_available_memory() -> None
```

##### `reset_available_vcpus` <a name="reset_available_vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableVcpus"></a>

```python
def reset_available_vcpus() -> None
```

##### `reset_cores` <a name="reset_cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetCores"></a>

```python
def reset_cores() -> None
```

##### `reset_host_type_name` <a name="reset_host_type_name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetHostTypeName"></a>

```python
def reset_host_type_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_total` <a name="reset_instance_total" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceTotal"></a>

```python
def reset_instance_total() -> None
```

##### `reset_instance_uuids` <a name="reset_instance_uuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceUuids"></a>

```python
def reset_instance_uuids() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sockets` <a name="reset_sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetSockets"></a>

```python
def reset_sockets() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vcpus` <a name="reset_vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetVcpus"></a>

```python
def reset_vcpus() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacities">available_instance_capacities</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList">DehHostV1AvailableInstanceCapacitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference">DehHostV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacementInput">auto_placement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacitiesInput">available_instance_capacities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemoryInput">available_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpusInput">available_vcpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeInput">host_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeNameInput">host_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotalInput">instance_total_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuidsInput">instance_uuids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.socketsInput">sockets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpusInput">vcpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacement">auto_placement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemory">available_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpus">available_vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeName">host_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotal">instance_total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuids">instance_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.sockets">sockets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_instance_capacities`<sup>Required</sup> <a name="available_instance_capacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacities"></a>

```python
available_instance_capacities: DehHostV1AvailableInstanceCapacitiesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList">DehHostV1AvailableInstanceCapacitiesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeouts"></a>

```python
timeouts: DehHostV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference">DehHostV1TimeoutsOutputReference</a>

---

##### `auto_placement_input`<sup>Optional</sup> <a name="auto_placement_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacementInput"></a>

```python
auto_placement_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `available_instance_capacities_input`<sup>Optional</sup> <a name="available_instance_capacities_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacitiesInput"></a>

```python
available_instance_capacities_input: typing.Union[IResolvable, typing.List[DehHostV1AvailableInstanceCapacities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]

---

##### `available_memory_input`<sup>Optional</sup> <a name="available_memory_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemoryInput"></a>

```python
available_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_vcpus_input`<sup>Optional</sup> <a name="available_vcpus_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpusInput"></a>

```python
available_vcpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_type_input`<sup>Optional</sup> <a name="host_type_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeInput"></a>

```python
host_type_input: str
```

- *Type:* str

---

##### `host_type_name_input`<sup>Optional</sup> <a name="host_type_name_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeNameInput"></a>

```python
host_type_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_total_input`<sup>Optional</sup> <a name="instance_total_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotalInput"></a>

```python
instance_total_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_uuids_input`<sup>Optional</sup> <a name="instance_uuids_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuidsInput"></a>

```python
instance_uuids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sockets_input`<sup>Optional</sup> <a name="sockets_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.socketsInput"></a>

```python
sockets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DehHostV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>, cdktf.IResolvable]

---

##### `vcpus_input`<sup>Optional</sup> <a name="vcpus_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpusInput"></a>

```python
vcpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_placement`<sup>Required</sup> <a name="auto_placement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacement"></a>

```python
auto_placement: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `available_memory`<sup>Required</sup> <a name="available_memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemory"></a>

```python
available_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_vcpus`<sup>Required</sup> <a name="available_vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpus"></a>

```python
available_vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `host_type_name`<sup>Required</sup> <a name="host_type_name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeName"></a>

```python
host_type_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_total`<sup>Required</sup> <a name="instance_total" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotal"></a>

```python
instance_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_uuids`<sup>Required</sup> <a name="instance_uuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuids"></a>

```python
instance_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sockets`<sup>Required</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.sockets"></a>

```python
sockets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DehHostV1AvailableInstanceCapacities <a name="DehHostV1AvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1AvailableInstanceCapacities()
```


### DehHostV1Config <a name="DehHostV1Config" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str,
  host_type: str,
  name: str,
  auto_placement: str = None,
  available_instance_capacities: typing.Union[IResolvable, typing.List[DehHostV1AvailableInstanceCapacities]] = None,
  available_memory: typing.Union[int, float] = None,
  available_vcpus: typing.Union[int, float] = None,
  cores: typing.Union[int, float] = None,
  host_type_name: str = None,
  id: str = None,
  instance_total: typing.Union[int, float] = None,
  instance_uuids: typing.List[str] = None,
  memory: typing.Union[int, float] = None,
  region: str = None,
  sockets: typing.Union[int, float] = None,
  status: str = None,
  timeouts: DehHostV1Timeouts = None,
  vcpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostType">host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type DehHostV1#host_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#name DehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.autoPlacement">auto_placement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableInstanceCapacities">available_instance_capacities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]</code> | available_instance_capacities block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableMemory">available_memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableVcpus">available_vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#cores DehHostV1#cores}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostTypeName">host_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#id DehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceTotal">instance_total</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceUuids">instance_uuids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#memory DehHostV1#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#region DehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.sockets">sockets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#sockets DehHostV1#sockets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#status DehHostV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}.

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type DehHostV1#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#name DehHostV1#name}.

---

##### `auto_placement`<sup>Optional</sup> <a name="auto_placement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.autoPlacement"></a>

```python
auto_placement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}.

---

##### `available_instance_capacities`<sup>Optional</sup> <a name="available_instance_capacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableInstanceCapacities"></a>

```python
available_instance_capacities: typing.Union[IResolvable, typing.List[DehHostV1AvailableInstanceCapacities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]

available_instance_capacities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_instance_capacities DehHostV1#available_instance_capacities}

---

##### `available_memory`<sup>Optional</sup> <a name="available_memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableMemory"></a>

```python
available_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}.

---

##### `available_vcpus`<sup>Optional</sup> <a name="available_vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableVcpus"></a>

```python
available_vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#cores DehHostV1#cores}.

---

##### `host_type_name`<sup>Optional</sup> <a name="host_type_name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostTypeName"></a>

```python
host_type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#id DehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_total`<sup>Optional</sup> <a name="instance_total" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceTotal"></a>

```python
instance_total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}.

---

##### `instance_uuids`<sup>Optional</sup> <a name="instance_uuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceUuids"></a>

```python
instance_uuids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#memory DehHostV1#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#region DehHostV1#region}.

---

##### `sockets`<sup>Optional</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.sockets"></a>

```python
sockets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#sockets DehHostV1#sockets}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#status DehHostV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.timeouts"></a>

```python
timeouts: DehHostV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#timeouts DehHostV1#timeouts}

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}.

---

### DehHostV1Timeouts <a name="DehHostV1Timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#create DehHostV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#delete DehHostV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#create DehHostV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/resources/deh_host_v1#delete DehHostV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DehHostV1AvailableInstanceCapacitiesList <a name="DehHostV1AvailableInstanceCapacitiesList" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1AvailableInstanceCapacitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DehHostV1AvailableInstanceCapacitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DehHostV1AvailableInstanceCapacities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>]]

---


### DehHostV1AvailableInstanceCapacitiesOutputReference <a name="DehHostV1AvailableInstanceCapacitiesOutputReference" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DehHostV1AvailableInstanceCapacities, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>, cdktf.IResolvable]

---


### DehHostV1TimeoutsOutputReference <a name="DehHostV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import deh_host_v1

dehHostV1.DehHostV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DehHostV1Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>, cdktf.IResolvable]

---



