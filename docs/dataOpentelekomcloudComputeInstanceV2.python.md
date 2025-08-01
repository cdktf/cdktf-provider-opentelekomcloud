# `dataOpentelekomcloudComputeInstanceV2` Submodule <a name="`dataOpentelekomcloudComputeInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeInstanceV2 <a name="DataOpentelekomcloudComputeInstanceV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2 opentelekomcloud_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  network: typing.Union[IResolvable, typing.List[DataOpentelekomcloudComputeInstanceV2Network]] = None,
  region: str = None,
  ssh_private_key_path: str = None,
  tags: typing.Mapping[str] = None,
  user_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#id DataOpentelekomcloudComputeInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#name DataOpentelekomcloudComputeInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]</code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#region DataOpentelekomcloudComputeInstanceV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.sshPrivateKeyPath">ssh_private_key_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#ssh_private_key_path DataOpentelekomcloudComputeInstanceV2#ssh_private_key_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#tags DataOpentelekomcloudComputeInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#user_data DataOpentelekomcloudComputeInstanceV2#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#id DataOpentelekomcloudComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#name DataOpentelekomcloudComputeInstanceV2#name}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.network"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#network DataOpentelekomcloudComputeInstanceV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#region DataOpentelekomcloudComputeInstanceV2#region}.

---

##### `ssh_private_key_path`<sup>Optional</sup> <a name="ssh_private_key_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.sshPrivateKeyPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#ssh_private_key_path DataOpentelekomcloudComputeInstanceV2#ssh_private_key_path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#tags DataOpentelekomcloudComputeInstanceV2#tags}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#user_data DataOpentelekomcloudComputeInstanceV2#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetSshPrivateKeyPath">reset_ssh_private_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_network` <a name="put_network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.putNetwork"></a>

```python
def put_network(
  value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudComputeInstanceV2Network]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_ssh_private_key_path` <a name="reset_ssh_private_key_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetSshPrivateKeyPath"></a>

```python
def reset_ssh_private_key_path() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetUserData"></a>

```python
def reset_user_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudComputeInstanceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudComputeInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV4">access_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV6">access_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.adminPass">admin_pass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.encryptedPassword">encrypted_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorName">flavor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList">DataOpentelekomcloudComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.networkInput">network_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPathInput">ssh_private_key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPath">ssh_private_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_ip_v4`<sup>Required</sup> <a name="access_ip_v4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV4"></a>

```python
access_ip_v4: str
```

- *Type:* str

---

##### `access_ip_v6`<sup>Required</sup> <a name="access_ip_v6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV6"></a>

```python
access_ip_v6: str
```

- *Type:* str

---

##### `admin_pass`<sup>Required</sup> <a name="admin_pass" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.adminPass"></a>

```python
admin_pass: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encrypted_password`<sup>Required</sup> <a name="encrypted_password" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.encryptedPassword"></a>

```python
encrypted_password: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `flavor_name`<sup>Required</sup> <a name="flavor_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorName"></a>

```python
flavor_name: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.network"></a>

```python
network: DataOpentelekomcloudComputeInstanceV2NetworkList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList">DataOpentelekomcloudComputeInstanceV2NetworkList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.networkInput"></a>

```python
network_input: typing.Union[IResolvable, typing.List[DataOpentelekomcloudComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ssh_private_key_path_input`<sup>Optional</sup> <a name="ssh_private_key_path_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPathInput"></a>

```python
ssh_private_key_path_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `ssh_private_key_path`<sup>Required</sup> <a name="ssh_private_key_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPath"></a>

```python
ssh_private_key_path: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeInstanceV2Config <a name="DataOpentelekomcloudComputeInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  network: typing.Union[IResolvable, typing.List[DataOpentelekomcloudComputeInstanceV2Network]] = None,
  region: str = None,
  ssh_private_key_path: str = None,
  tags: typing.Mapping[str] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#id DataOpentelekomcloudComputeInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#name DataOpentelekomcloudComputeInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]</code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#region DataOpentelekomcloudComputeInstanceV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.sshPrivateKeyPath">ssh_private_key_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#ssh_private_key_path DataOpentelekomcloudComputeInstanceV2#ssh_private_key_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#tags DataOpentelekomcloudComputeInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#user_data DataOpentelekomcloudComputeInstanceV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#id DataOpentelekomcloudComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#name DataOpentelekomcloudComputeInstanceV2#name}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.network"></a>

```python
network: typing.Union[IResolvable, typing.List[DataOpentelekomcloudComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#network DataOpentelekomcloudComputeInstanceV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#region DataOpentelekomcloudComputeInstanceV2#region}.

---

##### `ssh_private_key_path`<sup>Optional</sup> <a name="ssh_private_key_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.sshPrivateKeyPath"></a>

```python
ssh_private_key_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#ssh_private_key_path DataOpentelekomcloudComputeInstanceV2#ssh_private_key_path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#tags DataOpentelekomcloudComputeInstanceV2#tags}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/compute_instance_v2#user_data DataOpentelekomcloudComputeInstanceV2#user_data}.

---

### DataOpentelekomcloudComputeInstanceV2Network <a name="DataOpentelekomcloudComputeInstanceV2Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeInstanceV2NetworkList <a name="DataOpentelekomcloudComputeInstanceV2NetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]]

---


### DataOpentelekomcloudComputeInstanceV2NetworkOutputReference <a name="DataOpentelekomcloudComputeInstanceV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_compute_instance_v2

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_ip_v4`<sup>Required</sup> <a name="fixed_ip_v4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

---

##### `fixed_ip_v6`<sup>Required</sup> <a name="fixed_ip_v6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOpentelekomcloudComputeInstanceV2Network]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>]

---



