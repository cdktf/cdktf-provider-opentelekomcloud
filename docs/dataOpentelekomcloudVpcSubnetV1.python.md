# `dataOpentelekomcloudVpcSubnetV1` Submodule <a name="`dataOpentelekomcloudVpcSubnetV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcSubnetV1 <a name="DataOpentelekomcloudVpcSubnetV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1 opentelekomcloud_vpc_subnet_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_subnet_v1

dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1(
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
  cidr: str = None,
  gateway_ip: str = None,
  id: str = None,
  name: str = None,
  primary_dns: str = None,
  region: str = None,
  secondary_dns: str = None,
  status: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.primaryDns">primary_dns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.secondaryDns">secondary_dns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}.

---

##### `gateway_ip`<sup>Optional</sup> <a name="gateway_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.gatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}.

---

##### `primary_dns`<sup>Optional</sup> <a name="primary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.primaryDns"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}.

---

##### `secondary_dns`<sup>Optional</sup> <a name="secondary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.secondaryDns"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetGatewayIp">reset_gateway_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetPrimaryDns">reset_primary_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetSecondaryDns">reset_secondary_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_cidr` <a name="reset_cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_gateway_ip` <a name="reset_gateway_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetGatewayIp"></a>

```python
def reset_gateway_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_primary_dns` <a name="reset_primary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetPrimaryDns"></a>

```python
def reset_primary_dns() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secondary_dns` <a name="reset_secondary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetSecondaryDns"></a>

```python
def reset_secondary_dns() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcSubnetV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_subnet_v1

dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_subnet_v1

dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_subnet_v1

dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_subnet_v1

dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcSubnetV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudVpcSubnetV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudVpcSubnetV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcSubnetV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dhcpEnable">dhcp_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dnsList">dns_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIpv6">gateway_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.ipv6Enable">ipv6_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIpInput">gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDnsInput">primary_dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDnsInput">secondary_dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDns">primary_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDns">secondary_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `dhcp_enable`<sup>Required</sup> <a name="dhcp_enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dhcpEnable"></a>

```python
dhcp_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dns_list`<sup>Required</sup> <a name="dns_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dnsList"></a>

```python
dns_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway_ipv6`<sup>Required</sup> <a name="gateway_ipv6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIpv6"></a>

```python
gateway_ipv6: str
```

- *Type:* str

---

##### `ipv6_enable`<sup>Required</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.ipv6Enable"></a>

```python
ipv6_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `gateway_ip_input`<sup>Optional</sup> <a name="gateway_ip_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIpInput"></a>

```python
gateway_ip_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_dns_input`<sup>Optional</sup> <a name="primary_dns_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDnsInput"></a>

```python
primary_dns_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secondary_dns_input`<sup>Optional</sup> <a name="secondary_dns_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDnsInput"></a>

```python
secondary_dns_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_dns`<sup>Required</sup> <a name="primary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDns"></a>

```python
primary_dns: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secondary_dns`<sup>Required</sup> <a name="secondary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDns"></a>

```python
secondary_dns: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcSubnetV1Config <a name="DataOpentelekomcloudVpcSubnetV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_vpc_subnet_v1

dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str = None,
  cidr: str = None,
  gateway_ip: str = None,
  id: str = None,
  name: str = None,
  primary_dns: str = None,
  region: str = None,
  secondary_dns: str = None,
  status: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.primaryDns">primary_dns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.secondaryDns">secondary_dns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}.

---

##### `gateway_ip`<sup>Optional</sup> <a name="gateway_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}.

---

##### `primary_dns`<sup>Optional</sup> <a name="primary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.primaryDns"></a>

```python
primary_dns: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}.

---

##### `secondary_dns`<sup>Optional</sup> <a name="secondary_dns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.secondaryDns"></a>

```python
secondary_dns: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}.

---



