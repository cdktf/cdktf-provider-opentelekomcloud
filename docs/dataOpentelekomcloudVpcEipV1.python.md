# `dataOpentelekomcloudVpcEipV1` Submodule <a name="`dataOpentelekomcloudVpcEipV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcEipV1 <a name="DataOpentelekomcloudVpcEipV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1 opentelekomcloud_vpc_eip_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_eip_v1

dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth_id: str = None,
  id: str = None,
  name_regex: str = None,
  port_id: str = None,
  private_ip_address: str = None,
  public_ip_address: str = None,
  region: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.bandwidthId">bandwidth_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#bandwidth_id DataOpentelekomcloudVpcEipV1#bandwidth_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#id DataOpentelekomcloudVpcEipV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#name_regex DataOpentelekomcloudVpcEipV1#name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.portId">port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#port_id DataOpentelekomcloudVpcEipV1#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#private_ip_address DataOpentelekomcloudVpcEipV1#private_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.publicIpAddress">public_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#public_ip_address DataOpentelekomcloudVpcEipV1#public_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#region DataOpentelekomcloudVpcEipV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#status DataOpentelekomcloudVpcEipV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#tags DataOpentelekomcloudVpcEipV1#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth_id`<sup>Optional</sup> <a name="bandwidth_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.bandwidthId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#bandwidth_id DataOpentelekomcloudVpcEipV1#bandwidth_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#id DataOpentelekomcloudVpcEipV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.nameRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#name_regex DataOpentelekomcloudVpcEipV1#name_regex}.

---

##### `port_id`<sup>Optional</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.portId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#port_id DataOpentelekomcloudVpcEipV1#port_id}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.privateIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#private_ip_address DataOpentelekomcloudVpcEipV1#private_ip_address}.

---

##### `public_ip_address`<sup>Optional</sup> <a name="public_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.publicIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#public_ip_address DataOpentelekomcloudVpcEipV1#public_ip_address}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#region DataOpentelekomcloudVpcEipV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#status DataOpentelekomcloudVpcEipV1#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#tags DataOpentelekomcloudVpcEipV1#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetBandwidthId">reset_bandwidth_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetPortId">reset_port_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetPublicIpAddress">reset_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bandwidth_id` <a name="reset_bandwidth_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetBandwidthId"></a>

```python
def reset_bandwidth_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_port_id` <a name="reset_port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetPortId"></a>

```python
def reset_port_id() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_public_ip_address` <a name="reset_public_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetPublicIpAddress"></a>

```python
def reset_public_ip_address() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcEipV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_eip_v1

dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_eip_v1

dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_eip_v1

dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_eip_v1

dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcEipV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudVpcEipV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudVpcEipV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcEipV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthShareType">bandwidth_share_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthIdInput">bandwidth_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.portIdInput">port_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.publicIpAddressInput">public_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthId">bandwidth_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.portId">port_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bandwidth_share_type`<sup>Required</sup> <a name="bandwidth_share_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthShareType"></a>

```python
bandwidth_share_type: str
```

- *Type:* str

---

##### `bandwidth_size`<sup>Required</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `bandwidth_id_input`<sup>Optional</sup> <a name="bandwidth_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthIdInput"></a>

```python
bandwidth_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `port_id_input`<sup>Optional</sup> <a name="port_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.portIdInput"></a>

```python
port_id_input: str
```

- *Type:* str

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `public_ip_address_input`<sup>Optional</sup> <a name="public_ip_address_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.publicIpAddressInput"></a>

```python
public_ip_address_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bandwidth_id`<sup>Required</sup> <a name="bandwidth_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.bandwidthId"></a>

```python
bandwidth_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `port_id`<sup>Required</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.portId"></a>

```python
port_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcEipV1Config <a name="DataOpentelekomcloudVpcEipV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_eip_v1

dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bandwidth_id: str = None,
  id: str = None,
  name_regex: str = None,
  port_id: str = None,
  private_ip_address: str = None,
  public_ip_address: str = None,
  region: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.bandwidthId">bandwidth_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#bandwidth_id DataOpentelekomcloudVpcEipV1#bandwidth_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#id DataOpentelekomcloudVpcEipV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#name_regex DataOpentelekomcloudVpcEipV1#name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.portId">port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#port_id DataOpentelekomcloudVpcEipV1#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#private_ip_address DataOpentelekomcloudVpcEipV1#private_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#public_ip_address DataOpentelekomcloudVpcEipV1#public_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#region DataOpentelekomcloudVpcEipV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#status DataOpentelekomcloudVpcEipV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#tags DataOpentelekomcloudVpcEipV1#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth_id`<sup>Optional</sup> <a name="bandwidth_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.bandwidthId"></a>

```python
bandwidth_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#bandwidth_id DataOpentelekomcloudVpcEipV1#bandwidth_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#id DataOpentelekomcloudVpcEipV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#name_regex DataOpentelekomcloudVpcEipV1#name_regex}.

---

##### `port_id`<sup>Optional</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.portId"></a>

```python
port_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#port_id DataOpentelekomcloudVpcEipV1#port_id}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#private_ip_address DataOpentelekomcloudVpcEipV1#private_ip_address}.

---

##### `public_ip_address`<sup>Optional</sup> <a name="public_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#public_ip_address DataOpentelekomcloudVpcEipV1#public_ip_address}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#region DataOpentelekomcloudVpcEipV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#status DataOpentelekomcloudVpcEipV1#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcEipV1.DataOpentelekomcloudVpcEipV1Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/data-sources/vpc_eip_v1#tags DataOpentelekomcloudVpcEipV1#tags}.

---



