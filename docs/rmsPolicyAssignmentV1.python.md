# `rmsPolicyAssignmentV1` Submodule <a name="`rmsPolicyAssignmentV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsPolicyAssignmentV1 <a name="RmsPolicyAssignmentV1" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1 opentelekomcloud_rms_policy_assignment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1(
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
  custom_policy: RmsPolicyAssignmentV1CustomPolicy = None,
  description: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  period: str = None,
  policy_definition_id: str = None,
  policy_filter: RmsPolicyAssignmentV1PolicyFilter = None,
  status: str = None,
  timeouts: RmsPolicyAssignmentV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.customPolicy">custom_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.policyFilter">policy_filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | policy_filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}.

---

##### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.customPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#custom_policy RmsPolicyAssignmentV1#custom_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.period"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}.

---

##### `policy_definition_id`<sup>Optional</sup> <a name="policy_definition_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.policyDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}.

---

##### `policy_filter`<sup>Optional</sup> <a name="policy_filter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.policyFilter"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

policy_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#policy_filter RmsPolicyAssignmentV1#policy_filter}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#timeouts RmsPolicyAssignmentV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy">put_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter">put_policy_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetCustomPolicy">reset_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyDefinitionId">reset_policy_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyFilter">reset_policy_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_policy` <a name="put_custom_policy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy"></a>

```python
def put_custom_policy(
  auth_type: str,
  function_urn: str,
  auth_value: typing.Mapping[str] = None
) -> None
```

###### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}.

---

###### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy.parameter.functionUrn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}.

---

###### `auth_value`<sup>Optional</sup> <a name="auth_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy.parameter.authValue"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}.

---

##### `put_policy_filter` <a name="put_policy_filter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter"></a>

```python
def put_policy_filter(
  region: str = None,
  resource_id: str = None,
  resource_provider: str = None,
  resource_type: str = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}.

---

###### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}.

---

###### `resource_provider`<sup>Optional</sup> <a name="resource_provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.resourceProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}.

---

###### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}.

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}.

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.tagValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}.

---

##### `reset_custom_policy` <a name="reset_custom_policy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetCustomPolicy"></a>

```python
def reset_custom_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_policy_definition_id` <a name="reset_policy_definition_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyDefinitionId"></a>

```python
def reset_policy_definition_id() -> None
```

##### `reset_policy_filter` <a name="reset_policy_filter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyFilter"></a>

```python
def reset_policy_filter() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RmsPolicyAssignmentV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RmsPolicyAssignmentV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RmsPolicyAssignmentV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RmsPolicyAssignmentV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RmsPolicyAssignmentV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference">RmsPolicyAssignmentV1CustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilter">policy_filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference">RmsPolicyAssignmentV1PolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference">RmsPolicyAssignmentV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicyInput">custom_policy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionIdInput">policy_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilterInput">policy_filter_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_policy`<sup>Required</sup> <a name="custom_policy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicy"></a>

```python
custom_policy: RmsPolicyAssignmentV1CustomPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference">RmsPolicyAssignmentV1CustomPolicyOutputReference</a>

---

##### `policy_filter`<sup>Required</sup> <a name="policy_filter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilter"></a>

```python
policy_filter: RmsPolicyAssignmentV1PolicyFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference">RmsPolicyAssignmentV1PolicyFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeouts"></a>

```python
timeouts: RmsPolicyAssignmentV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference">RmsPolicyAssignmentV1TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `custom_policy_input`<sup>Optional</sup> <a name="custom_policy_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicyInput"></a>

```python
custom_policy_input: RmsPolicyAssignmentV1CustomPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `policy_definition_id_input`<sup>Optional</sup> <a name="policy_definition_id_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionIdInput"></a>

```python
policy_definition_id_input: str
```

- *Type:* str

---

##### `policy_filter_input`<sup>Optional</sup> <a name="policy_filter_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilterInput"></a>

```python
policy_filter_input: RmsPolicyAssignmentV1PolicyFilter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RmsPolicyAssignmentV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RmsPolicyAssignmentV1Config <a name="RmsPolicyAssignmentV1Config" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  custom_policy: RmsPolicyAssignmentV1CustomPolicy = None,
  description: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  period: str = None,
  policy_definition_id: str = None,
  policy_filter: RmsPolicyAssignmentV1PolicyFilter = None,
  status: str = None,
  timeouts: RmsPolicyAssignmentV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyFilter">policy_filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | policy_filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}.

---

##### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.customPolicy"></a>

```python
custom_policy: RmsPolicyAssignmentV1CustomPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#custom_policy RmsPolicyAssignmentV1#custom_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.period"></a>

```python
period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}.

---

##### `policy_definition_id`<sup>Optional</sup> <a name="policy_definition_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}.

---

##### `policy_filter`<sup>Optional</sup> <a name="policy_filter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyFilter"></a>

```python
policy_filter: RmsPolicyAssignmentV1PolicyFilter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

policy_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#policy_filter RmsPolicyAssignmentV1#policy_filter}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.timeouts"></a>

```python
timeouts: RmsPolicyAssignmentV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#timeouts RmsPolicyAssignmentV1#timeouts}

---

### RmsPolicyAssignmentV1CustomPolicy <a name="RmsPolicyAssignmentV1CustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy(
  auth_type: str,
  function_urn: str,
  auth_value: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.functionUrn">function_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authValue">auth_value</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}.

---

##### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.functionUrn"></a>

```python
function_urn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}.

---

##### `auth_value`<sup>Optional</sup> <a name="auth_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authValue"></a>

```python
auth_value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}.

---

### RmsPolicyAssignmentV1PolicyFilter <a name="RmsPolicyAssignmentV1PolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter(
  region: str = None,
  resource_id: str = None,
  resource_provider: str = None,
  resource_type: str = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceProvider">resource_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}.

---

##### `resource_provider`<sup>Optional</sup> <a name="resource_provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceProvider"></a>

```python
resource_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}.

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}.

---

### RmsPolicyAssignmentV1Timeouts <a name="RmsPolicyAssignmentV1Timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsPolicyAssignmentV1CustomPolicyOutputReference <a name="RmsPolicyAssignmentV1CustomPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resetAuthValue">reset_auth_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_value` <a name="reset_auth_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resetAuthValue"></a>

```python
def reset_auth_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValueInput">auth_value_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrnInput">function_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValue">auth_value</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrn">function_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_value_input`<sup>Optional</sup> <a name="auth_value_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValueInput"></a>

```python
auth_value_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `function_urn_input`<sup>Optional</sup> <a name="function_urn_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrnInput"></a>

```python
function_urn_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `auth_value`<sup>Required</sup> <a name="auth_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValue"></a>

```python
auth_value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrn"></a>

```python
function_urn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.internalValue"></a>

```python
internal_value: RmsPolicyAssignmentV1CustomPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---


### RmsPolicyAssignmentV1PolicyFilterOutputReference <a name="RmsPolicyAssignmentV1PolicyFilterOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceProvider">reset_resource_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_provider` <a name="reset_resource_provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceProvider"></a>

```python
def reset_resource_provider() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProviderInput">resource_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProvider">resource_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_provider_input`<sup>Optional</sup> <a name="resource_provider_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProviderInput"></a>

```python
resource_provider_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_provider`<sup>Required</sup> <a name="resource_provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProvider"></a>

```python
resource_provider: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.internalValue"></a>

```python
internal_value: RmsPolicyAssignmentV1PolicyFilter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---


### RmsPolicyAssignmentV1TimeoutsOutputReference <a name="RmsPolicyAssignmentV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import rms_policy_assignment_v1

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RmsPolicyAssignmentV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>]

---



