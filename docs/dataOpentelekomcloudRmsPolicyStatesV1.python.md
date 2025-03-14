# `dataOpentelekomcloudRmsPolicyStatesV1` Submodule <a name="`dataOpentelekomcloudRmsPolicyStatesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRmsPolicyStatesV1 <a name="DataOpentelekomcloudRmsPolicyStatesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1 opentelekomcloud_rms_policy_states_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_state: str = None,
  id: str = None,
  policy_assignment_id: str = None,
  resource_id: str = None,
  resource_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.complianceState">compliance_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_state`<sup>Optional</sup> <a name="compliance_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.complianceState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_assignment_id`<sup>Optional</sup> <a name="policy_assignment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.policyAssignmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetComplianceState">reset_compliance_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetPolicyAssignmentId">reset_policy_assignment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceName">reset_resource_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compliance_state` <a name="reset_compliance_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetComplianceState"></a>

```python
def reset_compliance_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_assignment_id` <a name="reset_policy_assignment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetPolicyAssignmentId"></a>

```python
def reset_policy_assignment_id() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyStatesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyStatesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudRmsPolicyStatesV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudRmsPolicyStatesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRmsPolicyStatesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.states">states</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList">DataOpentelekomcloudRmsPolicyStatesV1StatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceStateInput">compliance_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentIdInput">policy_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.states"></a>

```python
states: DataOpentelekomcloudRmsPolicyStatesV1StatesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList">DataOpentelekomcloudRmsPolicyStatesV1StatesList</a>

---

##### `compliance_state_input`<sup>Optional</sup> <a name="compliance_state_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceStateInput"></a>

```python
compliance_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_assignment_id_input`<sup>Optional</sup> <a name="policy_assignment_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentIdInput"></a>

```python
policy_assignment_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRmsPolicyStatesV1Config <a name="DataOpentelekomcloudRmsPolicyStatesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compliance_state: str = None,
  id: str = None,
  policy_assignment_id: str = None,
  resource_id: str = None,
  resource_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.complianceState">compliance_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compliance_state`<sup>Optional</sup> <a name="compliance_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_assignment_id`<sup>Optional</sup> <a name="policy_assignment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}.

---

### DataOpentelekomcloudRmsPolicyStatesV1States <a name="DataOpentelekomcloudRmsPolicyStatesV1States" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRmsPolicyStatesV1StatesList <a name="DataOpentelekomcloudRmsPolicyStatesV1StatesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference <a name="DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_rms_policy_states_v1

dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.evaluationTime">evaluation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentName">policy_assignment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.regionId">region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceProvider">resource_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States">DataOpentelekomcloudRmsPolicyStatesV1States</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `evaluation_time`<sup>Required</sup> <a name="evaluation_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.evaluationTime"></a>

```python
evaluation_time: str
```

- *Type:* str

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `policy_assignment_name`<sup>Required</sup> <a name="policy_assignment_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentName"></a>

```python
policy_assignment_name: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

##### `region_id`<sup>Required</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_provider`<sup>Required</sup> <a name="resource_provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceProvider"></a>

```python
resource_provider: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudRmsPolicyStatesV1States
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States">DataOpentelekomcloudRmsPolicyStatesV1States</a>

---



