# `cfwDomainNameGroupV1` Submodule <a name="`cfwDomainNameGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwDomainNameGroupV1 <a name="CfwDomainNameGroupV1" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1 opentelekomcloud_cfw_domain_name_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_names: typing.Union[IResolvable, typing.List[CfwDomainNameGroupV1DomainNames]],
  firewall_id: str,
  name: str,
  object_id: str,
  description: str = None,
  domain_set_type: typing.Union[int, float] = None,
  timeouts: CfwDomainNameGroupV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.domainNames">domain_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]</code> | domain_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.firewallId">firewall_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.domainSetType">domain_set_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.domainNames"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]

domain_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_names CfwDomainNameGroupV1#domain_names}

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.firewallId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

##### `domain_set_type`<sup>Optional</sup> <a name="domain_set_type" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.domainSetType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#timeouts CfwDomainNameGroupV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames">put_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDomainSetType">reset_domain_set_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domain_names` <a name="put_domain_names" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames"></a>

```python
def put_domain_names(
  value: typing.Union[IResolvable, typing.List[CfwDomainNameGroupV1DomainNames]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_set_type` <a name="reset_domain_set_type" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDomainSetType"></a>

```python
def reset_domain_set_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CfwDomainNameGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CfwDomainNameGroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CfwDomainNameGroupV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CfwDomainNameGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwDomainNameGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.configStatus">config_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNames">domain_names</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList">CfwDomainNameGroupV1DomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.refCount">ref_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList">CfwDomainNameGroupV1RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference">CfwDomainNameGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNamesInput">domain_names_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetTypeInput">domain_set_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallIdInput">firewall_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetType">domain_set_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallId">firewall_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_status`<sup>Required</sup> <a name="config_status" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.configStatus"></a>

```python
config_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNames"></a>

```python
domain_names: CfwDomainNameGroupV1DomainNamesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList">CfwDomainNameGroupV1DomainNamesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ref_count`<sup>Required</sup> <a name="ref_count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.refCount"></a>

```python
ref_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.rules"></a>

```python
rules: CfwDomainNameGroupV1RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList">CfwDomainNameGroupV1RulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeouts"></a>

```python
timeouts: CfwDomainNameGroupV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference">CfwDomainNameGroupV1TimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_names_input`<sup>Optional</sup> <a name="domain_names_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNamesInput"></a>

```python
domain_names_input: typing.Union[IResolvable, typing.List[CfwDomainNameGroupV1DomainNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]

---

##### `domain_set_type_input`<sup>Optional</sup> <a name="domain_set_type_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetTypeInput"></a>

```python
domain_set_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall_id_input`<sup>Optional</sup> <a name="firewall_id_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallIdInput"></a>

```python
firewall_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CfwDomainNameGroupV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_set_type`<sup>Required</sup> <a name="domain_set_type" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetType"></a>

```python
domain_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallId"></a>

```python
firewall_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CfwDomainNameGroupV1Config <a name="CfwDomainNameGroupV1Config" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_names: typing.Union[IResolvable, typing.List[CfwDomainNameGroupV1DomainNames]],
  firewall_id: str,
  name: str,
  object_id: str,
  description: str = None,
  domain_set_type: typing.Union[int, float] = None,
  timeouts: CfwDomainNameGroupV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainNames">domain_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]</code> | domain_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.firewallId">firewall_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainSetType">domain_set_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainNames"></a>

```python
domain_names: typing.Union[IResolvable, typing.List[CfwDomainNameGroupV1DomainNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]

domain_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_names CfwDomainNameGroupV1#domain_names}

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.firewallId"></a>

```python
firewall_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

##### `domain_set_type`<sup>Optional</sup> <a name="domain_set_type" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainSetType"></a>

```python
domain_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.timeouts"></a>

```python
timeouts: CfwDomainNameGroupV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#timeouts CfwDomainNameGroupV1#timeouts}

---

### CfwDomainNameGroupV1DomainNames <a name="CfwDomainNameGroupV1DomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames(
  domain_name: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_name CfwDomainNameGroupV1#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#domain_name CfwDomainNameGroupV1#domain_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

### CfwDomainNameGroupV1Rules <a name="CfwDomainNameGroupV1Rules" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules()
```


### CfwDomainNameGroupV1Timeouts <a name="CfwDomainNameGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwDomainNameGroupV1DomainNamesList <a name="CfwDomainNameGroupV1DomainNamesList" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CfwDomainNameGroupV1DomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CfwDomainNameGroupV1DomainNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]]

---


### CfwDomainNameGroupV1DomainNamesOutputReference <a name="CfwDomainNameGroupV1DomainNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainAddressId">domain_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_address_id`<sup>Required</sup> <a name="domain_address_id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainAddressId"></a>

```python
domain_address_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CfwDomainNameGroupV1DomainNames]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>]

---


### CfwDomainNameGroupV1RulesList <a name="CfwDomainNameGroupV1RulesList" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CfwDomainNameGroupV1RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CfwDomainNameGroupV1RulesOutputReference <a name="CfwDomainNameGroupV1RulesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules">CfwDomainNameGroupV1Rules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.internalValue"></a>

```python
internal_value: CfwDomainNameGroupV1Rules
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules">CfwDomainNameGroupV1Rules</a>

---


### CfwDomainNameGroupV1TimeoutsOutputReference <a name="CfwDomainNameGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_domain_name_group_v1

cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CfwDomainNameGroupV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>]

---



