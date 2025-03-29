# `dataOpentelekomcloudDmsFlavorV2` Submodule <a name="`dataOpentelekomcloudDmsFlavorV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDmsFlavorV2 <a name="DataOpentelekomcloudDmsFlavorV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2 opentelekomcloud_dms_flavor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: str = None,
  availability_zones: typing.List[str] = None,
  charging_mode: str = None,
  flavor_id: str = None,
  id: str = None,
  storage_spec_code: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.chargingMode">charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.archType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}.

---

##### `charging_mode`<sup>Optional</sup> <a name="charging_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.chargingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_spec_code`<sup>Optional</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.storageSpecCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetArchType">reset_arch_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetChargingMode">reset_charging_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetStorageSpecCode">reset_storage_spec_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arch_type` <a name="reset_arch_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetArchType"></a>

```python
def reset_arch_type() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_charging_mode` <a name="reset_charging_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetChargingMode"></a>

```python
def reset_charging_mode() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_spec_code` <a name="reset_storage_spec_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetStorageSpecCode"></a>

```python
def reset_storage_spec_code() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDmsFlavorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudDmsFlavorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudDmsFlavorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudDmsFlavorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDmsFlavorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavors">flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList">DataOpentelekomcloudDmsFlavorV2FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.versions">versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archTypeInput">arch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingModeInput">charging_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCodeInput">storage_spec_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingMode">charging_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `flavors`<sup>Required</sup> <a name="flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavors"></a>

```python
flavors: DataOpentelekomcloudDmsFlavorV2FlavorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList">DataOpentelekomcloudDmsFlavorV2FlavorsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.versions"></a>

```python
versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archTypeInput"></a>

```python
arch_type_input: str
```

- *Type:* str

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `charging_mode_input`<sup>Optional</sup> <a name="charging_mode_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingModeInput"></a>

```python
charging_mode_input: str
```

- *Type:* str

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `storage_spec_code_input`<sup>Optional</sup> <a name="storage_spec_code_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCodeInput"></a>

```python
storage_spec_code_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `charging_mode`<sup>Required</sup> <a name="charging_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingMode"></a>

```python
charging_mode: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDmsFlavorV2Config <a name="DataOpentelekomcloudDmsFlavorV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: str = None,
  availability_zones: typing.List[str] = None,
  charging_mode: str = None,
  flavor_id: str = None,
  id: str = None,
  storage_spec_code: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.chargingMode">charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}.

---

##### `charging_mode`<sup>Optional</sup> <a name="charging_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.chargingMode"></a>

```python
charging_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_spec_code`<sup>Optional</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}.

---

### DataOpentelekomcloudDmsFlavorV2Flavors <a name="DataOpentelekomcloudDmsFlavorV2Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors()
```


### DataOpentelekomcloudDmsFlavorV2FlavorsIos <a name="DataOpentelekomcloudDmsFlavorV2FlavorsIos" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos()
```


### DataOpentelekomcloudDmsFlavorV2FlavorsProperties <a name="DataOpentelekomcloudDmsFlavorV2FlavorsProperties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties()
```


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures()
```


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDmsFlavorV2FlavorsIosList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsIosList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.unavailabilityZones">unavailability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos">DataOpentelekomcloudDmsFlavorV2FlavorsIos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unavailability_zones`<sup>Required</sup> <a name="unavailability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.unavailabilityZones"></a>

```python
unavailability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDmsFlavorV2FlavorsIos
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos">DataOpentelekomcloudDmsFlavorV2FlavorsIos</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.archTypes">arch_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.chargingModes">charging_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList">DataOpentelekomcloudDmsFlavorV2FlavorsIosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.supportFeatures">support_features</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.vmSpecification">vm_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors">DataOpentelekomcloudDmsFlavorV2Flavors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_types`<sup>Required</sup> <a name="arch_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.archTypes"></a>

```python
arch_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `charging_modes`<sup>Required</sup> <a name="charging_modes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.chargingModes"></a>

```python
charging_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.ios"></a>

```python
ios: DataOpentelekomcloudDmsFlavorV2FlavorsIosList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList">DataOpentelekomcloudDmsFlavorV2FlavorsIosList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.properties"></a>

```python
properties: DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList</a>

---

##### `support_features`<sup>Required</sup> <a name="support_features" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.supportFeatures"></a>

```python
support_features: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vm_specification`<sup>Required</sup> <a name="vm_specification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.vmSpecification"></a>

```python
vm_specification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDmsFlavorV2Flavors
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors">DataOpentelekomcloudDmsFlavorV2Flavors</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.flavorAlias">flavor_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBandwidthPerBroker">max_bandwidth_per_broker</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBroker">max_broker</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxConsumerPerBroker">max_consumer_per_broker</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxPartitionPerBroker">max_partition_per_broker</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxStoragePerNode">max_storage_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxTpsPerBroker">max_tps_per_broker</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minBroker">min_broker</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minStoragePerNode">min_storage_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties">DataOpentelekomcloudDmsFlavorV2FlavorsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flavor_alias`<sup>Required</sup> <a name="flavor_alias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.flavorAlias"></a>

```python
flavor_alias: str
```

- *Type:* str

---

##### `max_bandwidth_per_broker`<sup>Required</sup> <a name="max_bandwidth_per_broker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBandwidthPerBroker"></a>

```python
max_bandwidth_per_broker: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_broker`<sup>Required</sup> <a name="max_broker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBroker"></a>

```python
max_broker: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_consumer_per_broker`<sup>Required</sup> <a name="max_consumer_per_broker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxConsumerPerBroker"></a>

```python
max_consumer_per_broker: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_partition_per_broker`<sup>Required</sup> <a name="max_partition_per_broker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxPartitionPerBroker"></a>

```python
max_partition_per_broker: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_storage_per_node`<sup>Required</sup> <a name="max_storage_per_node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxStoragePerNode"></a>

```python
max_storage_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_tps_per_broker`<sup>Required</sup> <a name="max_tps_per_broker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxTpsPerBroker"></a>

```python
max_tps_per_broker: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_broker`<sup>Required</sup> <a name="min_broker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minBroker"></a>

```python
min_broker: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_storage_per_node`<sup>Required</sup> <a name="min_storage_per_node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minStoragePerNode"></a>

```python
min_storage_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDmsFlavorV2FlavorsProperties
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties">DataOpentelekomcloudDmsFlavorV2FlavorsProperties</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.properties"></a>

```python
properties: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dms_flavor_v2

dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxNode">max_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxTask">max_task</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minNode">min_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minTask">min_task</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node`<sup>Required</sup> <a name="max_node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxNode"></a>

```python
max_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_task`<sup>Required</sup> <a name="max_task" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxTask"></a>

```python
max_task: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node`<sup>Required</sup> <a name="min_node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minNode"></a>

```python
min_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_task`<sup>Required</sup> <a name="min_task" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minTask"></a>

```python
min_task: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties</a>

---



