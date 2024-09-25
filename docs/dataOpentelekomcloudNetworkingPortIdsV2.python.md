# `dataOpentelekomcloudNetworkingPortIdsV2` Submodule <a name="`dataOpentelekomcloudNetworkingPortIdsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNetworkingPortIdsV2 <a name="DataOpentelekomcloudNetworkingPortIdsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2 opentelekomcloud_networking_port_ids_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_networking_port_ids_v2

dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device_id: str = None,
  device_owner: str = None,
  fixed_ip: str = None,
  id: str = None,
  mac_address: str = None,
  name: str = None,
  network_id: str = None,
  project_id: str = None,
  region: str = None,
  security_group_ids: typing.List[str] = None,
  sort_direction: str = None,
  sort_key: str = None,
  status: str = None,
  tenant_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_id DataOpentelekomcloudNetworkingPortIdsV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.deviceOwner">device_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_owner DataOpentelekomcloudNetworkingPortIdsV2#device_owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.fixedIp">fixed_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpentelekomcloudNetworkingPortIdsV2#fixed_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#id DataOpentelekomcloudNetworkingPortIdsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.macAddress">mac_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#mac_address DataOpentelekomcloudNetworkingPortIdsV2#mac_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#name DataOpentelekomcloudNetworkingPortIdsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#network_id DataOpentelekomcloudNetworkingPortIdsV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#project_id DataOpentelekomcloudNetworkingPortIdsV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#region DataOpentelekomcloudNetworkingPortIdsV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpentelekomcloudNetworkingPortIdsV2#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_direction DataOpentelekomcloudNetworkingPortIdsV2#sort_direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_key DataOpentelekomcloudNetworkingPortIdsV2#sort_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#status DataOpentelekomcloudNetworkingPortIdsV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#tenant_id DataOpentelekomcloudNetworkingPortIdsV2#tenant_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_id DataOpentelekomcloudNetworkingPortIdsV2#device_id}.

---

##### `device_owner`<sup>Optional</sup> <a name="device_owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.deviceOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_owner DataOpentelekomcloudNetworkingPortIdsV2#device_owner}.

---

##### `fixed_ip`<sup>Optional</sup> <a name="fixed_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.fixedIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpentelekomcloudNetworkingPortIdsV2#fixed_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#id DataOpentelekomcloudNetworkingPortIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.macAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#mac_address DataOpentelekomcloudNetworkingPortIdsV2#mac_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#name DataOpentelekomcloudNetworkingPortIdsV2#name}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#network_id DataOpentelekomcloudNetworkingPortIdsV2#network_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#project_id DataOpentelekomcloudNetworkingPortIdsV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#region DataOpentelekomcloudNetworkingPortIdsV2#region}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpentelekomcloudNetworkingPortIdsV2#security_group_ids}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.sortDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_direction DataOpentelekomcloudNetworkingPortIdsV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.sortKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_key DataOpentelekomcloudNetworkingPortIdsV2#sort_key}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#status DataOpentelekomcloudNetworkingPortIdsV2#status}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#tenant_id DataOpentelekomcloudNetworkingPortIdsV2#tenant_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceOwner">reset_device_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetFixedIp">reset_fixed_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetMacAddress">reset_mac_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortDirection">reset_sort_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortKey">reset_sort_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_device_id` <a name="reset_device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_device_owner` <a name="reset_device_owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceOwner"></a>

```python
def reset_device_owner() -> None
```

##### `reset_fixed_ip` <a name="reset_fixed_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetFixedIp"></a>

```python
def reset_fixed_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mac_address` <a name="reset_mac_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetMacAddress"></a>

```python
def reset_mac_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_sort_direction` <a name="reset_sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortDirection"></a>

```python
def reset_sort_direction() -> None
```

##### `reset_sort_key` <a name="reset_sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortKey"></a>

```python
def reset_sort_key() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_networking_port_ids_v2

dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_networking_port_ids_v2

dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_networking_port_ids_v2

dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_networking_port_ids_v2

dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudNetworkingPortIdsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudNetworkingPortIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNetworkingPortIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwnerInput">device_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIpInput">fixed_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddressInput">mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirectionInput">sort_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKeyInput">sort_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwner">device_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIp">fixed_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirection">sort_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKey">sort_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `device_owner_input`<sup>Optional</sup> <a name="device_owner_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwnerInput"></a>

```python
device_owner_input: str
```

- *Type:* str

---

##### `fixed_ip_input`<sup>Optional</sup> <a name="fixed_ip_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIpInput"></a>

```python
fixed_ip_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mac_address_input`<sup>Optional</sup> <a name="mac_address_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddressInput"></a>

```python
mac_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sort_direction_input`<sup>Optional</sup> <a name="sort_direction_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirectionInput"></a>

```python
sort_direction_input: str
```

- *Type:* str

---

##### `sort_key_input`<sup>Optional</sup> <a name="sort_key_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKeyInput"></a>

```python
sort_key_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `device_owner`<sup>Required</sup> <a name="device_owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwner"></a>

```python
device_owner: str
```

- *Type:* str

---

##### `fixed_ip`<sup>Required</sup> <a name="fixed_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIp"></a>

```python
fixed_ip: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sort_direction`<sup>Required</sup> <a name="sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

---

##### `sort_key`<sup>Required</sup> <a name="sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNetworkingPortIdsV2Config <a name="DataOpentelekomcloudNetworkingPortIdsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_networking_port_ids_v2

dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device_id: str = None,
  device_owner: str = None,
  fixed_ip: str = None,
  id: str = None,
  mac_address: str = None,
  name: str = None,
  network_id: str = None,
  project_id: str = None,
  region: str = None,
  security_group_ids: typing.List[str] = None,
  sort_direction: str = None,
  sort_key: str = None,
  status: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_id DataOpentelekomcloudNetworkingPortIdsV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceOwner">device_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_owner DataOpentelekomcloudNetworkingPortIdsV2#device_owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.fixedIp">fixed_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpentelekomcloudNetworkingPortIdsV2#fixed_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#id DataOpentelekomcloudNetworkingPortIdsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.macAddress">mac_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#mac_address DataOpentelekomcloudNetworkingPortIdsV2#mac_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#name DataOpentelekomcloudNetworkingPortIdsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#network_id DataOpentelekomcloudNetworkingPortIdsV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#project_id DataOpentelekomcloudNetworkingPortIdsV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#region DataOpentelekomcloudNetworkingPortIdsV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpentelekomcloudNetworkingPortIdsV2#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_direction DataOpentelekomcloudNetworkingPortIdsV2#sort_direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_key DataOpentelekomcloudNetworkingPortIdsV2#sort_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#status DataOpentelekomcloudNetworkingPortIdsV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#tenant_id DataOpentelekomcloudNetworkingPortIdsV2#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_id DataOpentelekomcloudNetworkingPortIdsV2#device_id}.

---

##### `device_owner`<sup>Optional</sup> <a name="device_owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceOwner"></a>

```python
device_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#device_owner DataOpentelekomcloudNetworkingPortIdsV2#device_owner}.

---

##### `fixed_ip`<sup>Optional</sup> <a name="fixed_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.fixedIp"></a>

```python
fixed_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpentelekomcloudNetworkingPortIdsV2#fixed_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#id DataOpentelekomcloudNetworkingPortIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#mac_address DataOpentelekomcloudNetworkingPortIdsV2#mac_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#name DataOpentelekomcloudNetworkingPortIdsV2#name}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#network_id DataOpentelekomcloudNetworkingPortIdsV2#network_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#project_id DataOpentelekomcloudNetworkingPortIdsV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#region DataOpentelekomcloudNetworkingPortIdsV2#region}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpentelekomcloudNetworkingPortIdsV2#security_group_ids}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_direction DataOpentelekomcloudNetworkingPortIdsV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#sort_key DataOpentelekomcloudNetworkingPortIdsV2#sort_key}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#status DataOpentelekomcloudNetworkingPortIdsV2#status}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/networking_port_ids_v2#tenant_id DataOpentelekomcloudNetworkingPortIdsV2#tenant_id}.

---



