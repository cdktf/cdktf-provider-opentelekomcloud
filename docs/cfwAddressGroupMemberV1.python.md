# `cfwAddressGroupMemberV1` Submodule <a name="`cfwAddressGroupMemberV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwAddressGroupMemberV1 <a name="CfwAddressGroupMemberV1" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1 opentelekomcloud_cfw_address_group_member_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  set_id: str,
  address_type: typing.Union[int, float] = None,
  description: str = None,
  timeouts: CfwAddressGroupMemberV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address CfwAddressGroupMemberV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.setId">set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#set_id CfwAddressGroupMemberV1#set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address_type CfwAddressGroupMemberV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#description CfwAddressGroupMemberV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address CfwAddressGroupMemberV1#address}.

---

##### `set_id`<sup>Required</sup> <a name="set_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.setId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#set_id CfwAddressGroupMemberV1#set_id}.

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.addressType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address_type CfwAddressGroupMemberV1#address_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#description CfwAddressGroupMemberV1#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#timeouts CfwAddressGroupMemberV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetAddressType">reset_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#create CfwAddressGroupMemberV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#delete CfwAddressGroupMemberV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#update CfwAddressGroupMemberV1#update}.

---

##### `reset_address_type` <a name="reset_address_type" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetAddressType"></a>

```python
def reset_address_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CfwAddressGroupMemberV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CfwAddressGroupMemberV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CfwAddressGroupMemberV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CfwAddressGroupMemberV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwAddressGroupMemberV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference">CfwAddressGroupMemberV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.addressTypeInput">address_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.setIdInput">set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.setId">set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.timeouts"></a>

```python
timeouts: CfwAddressGroupMemberV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference">CfwAddressGroupMemberV1TimeoutsOutputReference</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.addressTypeInput"></a>

```python
address_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `set_id_input`<sup>Optional</sup> <a name="set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.setIdInput"></a>

```python
set_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CfwAddressGroupMemberV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a>]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `set_id`<sup>Required</sup> <a name="set_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.setId"></a>

```python
set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CfwAddressGroupMemberV1Config <a name="CfwAddressGroupMemberV1Config" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  set_id: str,
  address_type: typing.Union[int, float] = None,
  description: str = None,
  timeouts: CfwAddressGroupMemberV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address CfwAddressGroupMemberV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.setId">set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#set_id CfwAddressGroupMemberV1#set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address_type CfwAddressGroupMemberV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#description CfwAddressGroupMemberV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address CfwAddressGroupMemberV1#address}.

---

##### `set_id`<sup>Required</sup> <a name="set_id" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.setId"></a>

```python
set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#set_id CfwAddressGroupMemberV1#set_id}.

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#address_type CfwAddressGroupMemberV1#address_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#description CfwAddressGroupMemberV1#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Config.property.timeouts"></a>

```python
timeouts: CfwAddressGroupMemberV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#timeouts CfwAddressGroupMemberV1#timeouts}

---

### CfwAddressGroupMemberV1Timeouts <a name="CfwAddressGroupMemberV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#create CfwAddressGroupMemberV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#delete CfwAddressGroupMemberV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#update CfwAddressGroupMemberV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#create CfwAddressGroupMemberV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#delete CfwAddressGroupMemberV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_address_group_member_v1#update CfwAddressGroupMemberV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwAddressGroupMemberV1TimeoutsOutputReference <a name="CfwAddressGroupMemberV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_address_group_member_v1

cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CfwAddressGroupMemberV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwAddressGroupMemberV1.CfwAddressGroupMemberV1Timeouts">CfwAddressGroupMemberV1Timeouts</a>]

---



