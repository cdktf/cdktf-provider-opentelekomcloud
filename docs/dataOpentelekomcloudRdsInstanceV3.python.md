# `dataOpentelekomcloudRdsInstanceV3` Submodule <a name="`dataOpentelekomcloudRdsInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRdsInstanceV3 <a name="DataOpentelekomcloudRdsInstanceV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3 opentelekomcloud_rds_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore_type: str = None,
  id: str = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  region: str = None,
  subnet_id: str = None,
  type: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.datastoreType">datastore_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#datastore_type DataOpentelekomcloudRdsInstanceV3#datastore_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#id DataOpentelekomcloudRdsInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#name DataOpentelekomcloudRdsInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#port DataOpentelekomcloudRdsInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#region DataOpentelekomcloudRdsInstanceV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#subnet_id DataOpentelekomcloudRdsInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#type DataOpentelekomcloudRdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#vpc_id DataOpentelekomcloudRdsInstanceV3#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore_type`<sup>Optional</sup> <a name="datastore_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.datastoreType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#datastore_type DataOpentelekomcloudRdsInstanceV3#datastore_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#id DataOpentelekomcloudRdsInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#name DataOpentelekomcloudRdsInstanceV3#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#port DataOpentelekomcloudRdsInstanceV3#port}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#region DataOpentelekomcloudRdsInstanceV3#region}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#subnet_id DataOpentelekomcloudRdsInstanceV3#subnet_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#type DataOpentelekomcloudRdsInstanceV3#type}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#vpc_id DataOpentelekomcloudRdsInstanceV3#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetDatastoreType">reset_datastore_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_datastore_type` <a name="reset_datastore_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetDatastoreType"></a>

```python
def reset_datastore_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRdsInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudRdsInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudRdsInstanceV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudRdsInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRdsInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.availabilityZone">availability_zone</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.backupStrategy">backup_strategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList">DataOpentelekomcloudRdsInstanceV3BackupStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.datastoreVersion">datastore_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.dbUsername">db_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.diskEncryptionId">disk_encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.fixedIp">fixed_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.ha">ha</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList">DataOpentelekomcloudRdsInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.privateIps">private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.datastoreTypeInput">datastore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.datastoreType">datastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.availabilityZone"></a>

```python
availability_zone: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_strategy`<sup>Required</sup> <a name="backup_strategy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.backupStrategy"></a>

```python
backup_strategy: DataOpentelekomcloudRdsInstanceV3BackupStrategyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList">DataOpentelekomcloudRdsInstanceV3BackupStrategyList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `datastore_version`<sup>Required</sup> <a name="datastore_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.datastoreVersion"></a>

```python
datastore_version: str
```

- *Type:* str

---

##### `db_username`<sup>Required</sup> <a name="db_username" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.dbUsername"></a>

```python
db_username: str
```

- *Type:* str

---

##### `disk_encryption_id`<sup>Required</sup> <a name="disk_encryption_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.diskEncryptionId"></a>

```python
disk_encryption_id: str
```

- *Type:* str

---

##### `fixed_ip`<sup>Required</sup> <a name="fixed_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.fixedIp"></a>

```python
fixed_ip: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `ha`<sup>Required</sup> <a name="ha" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.ha"></a>

```python
ha: StringMap
```

- *Type:* cdktf.StringMap

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.nodes"></a>

```python
nodes: DataOpentelekomcloudRdsInstanceV3NodesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList">DataOpentelekomcloudRdsInstanceV3NodesList</a>

---

##### `private_ips`<sup>Required</sup> <a name="private_ips" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.privateIps"></a>

```python
private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `datastore_type_input`<sup>Optional</sup> <a name="datastore_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.datastoreTypeInput"></a>

```python
datastore_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `datastore_type`<sup>Required</sup> <a name="datastore_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRdsInstanceV3BackupStrategy <a name="DataOpentelekomcloudRdsInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategy()
```


### DataOpentelekomcloudRdsInstanceV3Config <a name="DataOpentelekomcloudRdsInstanceV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore_type: str = None,
  id: str = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  region: str = None,
  subnet_id: str = None,
  type: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.datastoreType">datastore_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#datastore_type DataOpentelekomcloudRdsInstanceV3#datastore_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#id DataOpentelekomcloudRdsInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#name DataOpentelekomcloudRdsInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#port DataOpentelekomcloudRdsInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#region DataOpentelekomcloudRdsInstanceV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#subnet_id DataOpentelekomcloudRdsInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#type DataOpentelekomcloudRdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#vpc_id DataOpentelekomcloudRdsInstanceV3#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore_type`<sup>Optional</sup> <a name="datastore_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#datastore_type DataOpentelekomcloudRdsInstanceV3#datastore_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#id DataOpentelekomcloudRdsInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#name DataOpentelekomcloudRdsInstanceV3#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#port DataOpentelekomcloudRdsInstanceV3#port}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#region DataOpentelekomcloudRdsInstanceV3#region}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#subnet_id DataOpentelekomcloudRdsInstanceV3#subnet_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#type DataOpentelekomcloudRdsInstanceV3#type}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/rds_instance_v3#vpc_id DataOpentelekomcloudRdsInstanceV3#vpc_id}.

---

### DataOpentelekomcloudRdsInstanceV3Nodes <a name="DataOpentelekomcloudRdsInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Nodes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Nodes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRdsInstanceV3BackupStrategyList <a name="DataOpentelekomcloudRdsInstanceV3BackupStrategyList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference <a name="DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.keepDays">keep_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategy">DataOpentelekomcloudRdsInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keep_days`<sup>Required</sup> <a name="keep_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```python
keep_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudRdsInstanceV3BackupStrategy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3BackupStrategy">DataOpentelekomcloudRdsInstanceV3BackupStrategy</a>

---


### DataOpentelekomcloudRdsInstanceV3NodesList <a name="DataOpentelekomcloudRdsInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudRdsInstanceV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudRdsInstanceV3NodesOutputReference <a name="DataOpentelekomcloudRdsInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rds_instance_v3

dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Nodes">DataOpentelekomcloudRdsInstanceV3Nodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3NodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudRdsInstanceV3Nodes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsInstanceV3.DataOpentelekomcloudRdsInstanceV3Nodes">DataOpentelekomcloudRdsInstanceV3Nodes</a>

---



