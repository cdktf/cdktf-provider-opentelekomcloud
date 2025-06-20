# `cbrPolicyV3` Submodule <a name="`cbrPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrPolicyV3 <a name="CbrPolicyV3" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3 opentelekomcloud_cbr_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  operation_type: str,
  trigger_pattern: typing.List[str],
  destination_project_id: str = None,
  destination_region: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  operation_definition: CbrPolicyV3OperationDefinition = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationType">operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.triggerPattern">trigger_pattern</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.destinationProjectId">destination_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_project_id CbrPolicyV3#destination_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.destinationRegion">destination_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_region CbrPolicyV3#destination_region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationDefinition">operation_definition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | operation_definition block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}.

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}.

---

##### `trigger_pattern`<sup>Required</sup> <a name="trigger_pattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.triggerPattern"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}.

---

##### `destination_project_id`<sup>Optional</sup> <a name="destination_project_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.destinationProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_project_id CbrPolicyV3#destination_project_id}.

---

##### `destination_region`<sup>Optional</sup> <a name="destination_region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.destinationRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_region CbrPolicyV3#destination_region}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_definition`<sup>Optional</sup> <a name="operation_definition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationDefinition"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

operation_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#operation_definition CbrPolicyV3#operation_definition}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition">put_operation_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationProjectId">reset_destination_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationRegion">reset_destination_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOperationDefinition">reset_operation_definition</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_operation_definition` <a name="put_operation_definition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition"></a>

```python
def put_operation_definition(
  timezone: str,
  day_backups: typing.Union[int, float] = None,
  max_backups: typing.Union[int, float] = None,
  month_backups: typing.Union[int, float] = None,
  retention_duration_days: typing.Union[int, float] = None,
  week_backups: typing.Union[int, float] = None,
  year_backups: typing.Union[int, float] = None
) -> None
```

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}.

---

###### `day_backups`<sup>Optional</sup> <a name="day_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.dayBackups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}.

---

###### `max_backups`<sup>Optional</sup> <a name="max_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.maxBackups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}.

---

###### `month_backups`<sup>Optional</sup> <a name="month_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.monthBackups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}.

---

###### `retention_duration_days`<sup>Optional</sup> <a name="retention_duration_days" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.retentionDurationDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}.

---

###### `week_backups`<sup>Optional</sup> <a name="week_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.weekBackups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}.

---

###### `year_backups`<sup>Optional</sup> <a name="year_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.yearBackups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}.

---

##### `reset_destination_project_id` <a name="reset_destination_project_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationProjectId"></a>

```python
def reset_destination_project_id() -> None
```

##### `reset_destination_region` <a name="reset_destination_region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetDestinationRegion"></a>

```python
def reset_destination_region() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operation_definition` <a name="reset_operation_definition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOperationDefinition"></a>

```python
def reset_operation_definition() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CbrPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CbrPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CbrPolicyV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CbrPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CbrPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinition">operation_definition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference">CbrPolicyV3OperationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectIdInput">destination_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegionInput">destination_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinitionInput">operation_definition_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationTypeInput">operation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPatternInput">trigger_pattern_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectId">destination_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegion">destination_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPattern">trigger_pattern</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operation_definition`<sup>Required</sup> <a name="operation_definition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinition"></a>

```python
operation_definition: CbrPolicyV3OperationDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference">CbrPolicyV3OperationDefinitionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `destination_project_id_input`<sup>Optional</sup> <a name="destination_project_id_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectIdInput"></a>

```python
destination_project_id_input: str
```

- *Type:* str

---

##### `destination_region_input`<sup>Optional</sup> <a name="destination_region_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegionInput"></a>

```python
destination_region_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_definition_input`<sup>Optional</sup> <a name="operation_definition_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinitionInput"></a>

```python
operation_definition_input: CbrPolicyV3OperationDefinition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---

##### `operation_type_input`<sup>Optional</sup> <a name="operation_type_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationTypeInput"></a>

```python
operation_type_input: str
```

- *Type:* str

---

##### `trigger_pattern_input`<sup>Optional</sup> <a name="trigger_pattern_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPatternInput"></a>

```python
trigger_pattern_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_project_id`<sup>Required</sup> <a name="destination_project_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationProjectId"></a>

```python
destination_project_id: str
```

- *Type:* str

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `trigger_pattern`<sup>Required</sup> <a name="trigger_pattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPattern"></a>

```python
trigger_pattern: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CbrPolicyV3Config <a name="CbrPolicyV3Config" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  operation_type: str,
  trigger_pattern: typing.List[str],
  destination_project_id: str = None,
  destination_region: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  operation_definition: CbrPolicyV3OperationDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationType">operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.triggerPattern">trigger_pattern</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationProjectId">destination_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_project_id CbrPolicyV3#destination_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationRegion">destination_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_region CbrPolicyV3#destination_region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationDefinition">operation_definition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | operation_definition block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}.

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}.

---

##### `trigger_pattern`<sup>Required</sup> <a name="trigger_pattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.triggerPattern"></a>

```python
trigger_pattern: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}.

---

##### `destination_project_id`<sup>Optional</sup> <a name="destination_project_id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationProjectId"></a>

```python
destination_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_project_id CbrPolicyV3#destination_project_id}.

---

##### `destination_region`<sup>Optional</sup> <a name="destination_region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#destination_region CbrPolicyV3#destination_region}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_definition`<sup>Optional</sup> <a name="operation_definition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationDefinition"></a>

```python
operation_definition: CbrPolicyV3OperationDefinition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

operation_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#operation_definition CbrPolicyV3#operation_definition}

---

### CbrPolicyV3OperationDefinition <a name="CbrPolicyV3OperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3OperationDefinition(
  timezone: str,
  day_backups: typing.Union[int, float] = None,
  max_backups: typing.Union[int, float] = None,
  month_backups: typing.Union[int, float] = None,
  retention_duration_days: typing.Union[int, float] = None,
  week_backups: typing.Union[int, float] = None,
  year_backups: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.dayBackups">day_backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.maxBackups">max_backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.monthBackups">month_backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.weekBackups">week_backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.yearBackups">year_backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}. |

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}.

---

##### `day_backups`<sup>Optional</sup> <a name="day_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.dayBackups"></a>

```python
day_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}.

---

##### `max_backups`<sup>Optional</sup> <a name="max_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.maxBackups"></a>

```python
max_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}.

---

##### `month_backups`<sup>Optional</sup> <a name="month_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.monthBackups"></a>

```python
month_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}.

---

##### `retention_duration_days`<sup>Optional</sup> <a name="retention_duration_days" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}.

---

##### `week_backups`<sup>Optional</sup> <a name="week_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.weekBackups"></a>

```python
week_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}.

---

##### `year_backups`<sup>Optional</sup> <a name="year_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.yearBackups"></a>

```python
year_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrPolicyV3OperationDefinitionOutputReference <a name="CbrPolicyV3OperationDefinitionOutputReference" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_policy_v3

cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetDayBackups">reset_day_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMaxBackups">reset_max_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMonthBackups">reset_month_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetRetentionDurationDays">reset_retention_duration_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetWeekBackups">reset_week_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetYearBackups">reset_year_backups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_backups` <a name="reset_day_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetDayBackups"></a>

```python
def reset_day_backups() -> None
```

##### `reset_max_backups` <a name="reset_max_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMaxBackups"></a>

```python
def reset_max_backups() -> None
```

##### `reset_month_backups` <a name="reset_month_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMonthBackups"></a>

```python
def reset_month_backups() -> None
```

##### `reset_retention_duration_days` <a name="reset_retention_duration_days" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetRetentionDurationDays"></a>

```python
def reset_retention_duration_days() -> None
```

##### `reset_week_backups` <a name="reset_week_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetWeekBackups"></a>

```python
def reset_week_backups() -> None
```

##### `reset_year_backups` <a name="reset_year_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetYearBackups"></a>

```python
def reset_year_backups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackupsInput">day_backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackupsInput">max_backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackupsInput">month_backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDaysInput">retention_duration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackupsInput">week_backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackupsInput">year_backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackups">day_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackups">max_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackups">month_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackups">week_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackups">year_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_backups_input`<sup>Optional</sup> <a name="day_backups_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackupsInput"></a>

```python
day_backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_backups_input`<sup>Optional</sup> <a name="max_backups_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackupsInput"></a>

```python
max_backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_backups_input`<sup>Optional</sup> <a name="month_backups_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackupsInput"></a>

```python
month_backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration_days_input`<sup>Optional</sup> <a name="retention_duration_days_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDaysInput"></a>

```python
retention_duration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `week_backups_input`<sup>Optional</sup> <a name="week_backups_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackupsInput"></a>

```python
week_backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_backups_input`<sup>Optional</sup> <a name="year_backups_input" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackupsInput"></a>

```python
year_backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_backups`<sup>Required</sup> <a name="day_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackups"></a>

```python
day_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_backups`<sup>Required</sup> <a name="max_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackups"></a>

```python
max_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_backups`<sup>Required</sup> <a name="month_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackups"></a>

```python
month_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration_days`<sup>Required</sup> <a name="retention_duration_days" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `week_backups`<sup>Required</sup> <a name="week_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackups"></a>

```python
week_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_backups`<sup>Required</sup> <a name="year_backups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackups"></a>

```python
year_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: CbrPolicyV3OperationDefinition
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---



