# `dataOpentelekomcloudEvsVolumesV2` Submodule <a name="`dataOpentelekomcloudEvsVolumesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudEvsVolumesV2 <a name="DataOpentelekomcloudEvsVolumesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2 opentelekomcloud_evs_volumes_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2(
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
  id: str = None,
  name: str = None,
  server_id: str = None,
  shareable: typing.Union[bool, IResolvable] = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  volume_id: str = None,
  volume_type_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.shareable">shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.volumeTypeId">volume_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}.

---

##### `server_id`<sup>Optional</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}.

---

##### `shareable`<sup>Optional</sup> <a name="shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.shareable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}.

---

##### `volume_type_id`<sup>Optional</sup> <a name="volume_type_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.volumeTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetServerId">reset_server_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetShareable">reset_shareable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeId">reset_volume_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeTypeId">reset_volume_type_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_server_id` <a name="reset_server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetServerId"></a>

```python
def reset_server_id() -> None
```

##### `reset_shareable` <a name="reset_shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetShareable"></a>

```python
def reset_shareable() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```

##### `reset_volume_type_id` <a name="reset_volume_type_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeTypeId"></a>

```python
def reset_volume_type_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudEvsVolumesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudEvsVolumesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudEvsVolumesV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudEvsVolumesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudEvsVolumesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList">DataOpentelekomcloudEvsVolumesV2VolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareableInput">shareable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeIdInput">volume_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareable">shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeId">volume_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumes"></a>

```python
volumes: DataOpentelekomcloudEvsVolumesV2VolumesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList">DataOpentelekomcloudEvsVolumesV2VolumesList</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `shareable_input`<sup>Optional</sup> <a name="shareable_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareableInput"></a>

```python
shareable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `volume_type_id_input`<sup>Optional</sup> <a name="volume_type_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeIdInput"></a>

```python
volume_type_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `shareable`<sup>Required</sup> <a name="shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareable"></a>

```python
shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_type_id`<sup>Required</sup> <a name="volume_type_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeId"></a>

```python
volume_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudEvsVolumesV2Config <a name="DataOpentelekomcloudEvsVolumesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  id: str = None,
  name: str = None,
  server_id: str = None,
  shareable: typing.Union[bool, IResolvable] = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  volume_id: str = None,
  volume_type_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.shareable">shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeTypeId">volume_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}.

---

##### `server_id`<sup>Optional</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}.

---

##### `shareable`<sup>Optional</sup> <a name="shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.shareable"></a>

```python
shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}.

---

##### `volume_type_id`<sup>Optional</sup> <a name="volume_type_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeTypeId"></a>

```python
volume_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}.

---

### DataOpentelekomcloudEvsVolumesV2Volumes <a name="DataOpentelekomcloudEvsVolumesV2Volumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes()
```


### DataOpentelekomcloudEvsVolumesV2VolumesAttachments <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedAt">attached_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedMode">attached_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments">DataOpentelekomcloudEvsVolumesV2VolumesAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_at`<sup>Required</sup> <a name="attached_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedAt"></a>

```python
attached_at: str
```

- *Type:* str

---

##### `attached_mode`<sup>Required</sup> <a name="attached_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedMode"></a>

```python
attached_mode: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudEvsVolumesV2VolumesAttachments
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments">DataOpentelekomcloudEvsVolumesV2VolumesAttachments</a>

---


### DataOpentelekomcloudEvsVolumesV2VolumesList <a name="DataOpentelekomcloudEvsVolumesV2VolumesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudEvsVolumesV2VolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudEvsVolumesV2VolumesOutputReference <a name="DataOpentelekomcloudEvsVolumesV2VolumesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_evs_volumes_v2

dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.attachments">attachments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList">DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.bootable">bootable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.createAt">create_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.shareable">shareable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.updateAt">update_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.wwn">wwn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes">DataOpentelekomcloudEvsVolumesV2Volumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.attachments"></a>

```python
attachments: DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList">DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList</a>

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.bootable"></a>

```python
bootable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `create_at`<sup>Required</sup> <a name="create_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.createAt"></a>

```python
create_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `shareable`<sup>Required</sup> <a name="shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.shareable"></a>

```python
shareable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `update_at`<sup>Required</sup> <a name="update_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.updateAt"></a>

```python
update_at: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `wwn`<sup>Required</sup> <a name="wwn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.wwn"></a>

```python
wwn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudEvsVolumesV2Volumes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes">DataOpentelekomcloudEvsVolumesV2Volumes</a>

---



