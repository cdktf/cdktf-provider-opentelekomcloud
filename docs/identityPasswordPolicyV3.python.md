# `identityPasswordPolicyV3` Submodule <a name="`identityPasswordPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPasswordPolicyV3 <a name="IdentityPasswordPolicyV3" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3 opentelekomcloud_identity_password_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_password_policy_v3

identityPasswordPolicyV3.IdentityPasswordPolicyV3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  maximum_consecutive_identical_chars: typing.Union[int, float] = None,
  minimum_password_age: typing.Union[int, float] = None,
  minimum_password_length: typing.Union[int, float] = None,
  number_of_recent_passwords_disallowed: typing.Union[int, float] = None,
  password_char_combination: typing.Union[int, float] = None,
  password_not_username_or_invert: bool | IResolvable = None,
  password_validity_period: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.maximumConsecutiveIdenticalChars">maximum_consecutive_identical_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.minimumPasswordAge">minimum_password_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.numberOfRecentPasswordsDisallowed">number_of_recent_passwords_disallowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.passwordCharCombination">password_char_combination</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_char_combination IdentityPasswordPolicyV3#password_char_combination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.passwordNotUsernameOrInvert">password_not_username_or_invert</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.passwordValidityPeriod">password_validity_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_consecutive_identical_chars`<sup>Optional</sup> <a name="maximum_consecutive_identical_chars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.maximumConsecutiveIdenticalChars"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}.

---

##### `minimum_password_age`<sup>Optional</sup> <a name="minimum_password_age" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.minimumPasswordAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}.

---

##### `minimum_password_length`<sup>Optional</sup> <a name="minimum_password_length" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.minimumPasswordLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}.

---

##### `number_of_recent_passwords_disallowed`<sup>Optional</sup> <a name="number_of_recent_passwords_disallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.numberOfRecentPasswordsDisallowed"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}.

---

##### `password_char_combination`<sup>Optional</sup> <a name="password_char_combination" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.passwordCharCombination"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_char_combination IdentityPasswordPolicyV3#password_char_combination}.

---

##### `password_not_username_or_invert`<sup>Optional</sup> <a name="password_not_username_or_invert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.passwordNotUsernameOrInvert"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}.

---

##### `password_validity_period`<sup>Optional</sup> <a name="password_validity_period" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.passwordValidityPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMaximumConsecutiveIdenticalChars">reset_maximum_consecutive_identical_chars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordAge">reset_minimum_password_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordLength">reset_minimum_password_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetNumberOfRecentPasswordsDisallowed">reset_number_of_recent_passwords_disallowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordCharCombination">reset_password_char_combination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordNotUsernameOrInvert">reset_password_not_username_or_invert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordValidityPeriod">reset_password_validity_period</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_consecutive_identical_chars` <a name="reset_maximum_consecutive_identical_chars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMaximumConsecutiveIdenticalChars"></a>

```python
def reset_maximum_consecutive_identical_chars() -> None
```

##### `reset_minimum_password_age` <a name="reset_minimum_password_age" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordAge"></a>

```python
def reset_minimum_password_age() -> None
```

##### `reset_minimum_password_length` <a name="reset_minimum_password_length" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordLength"></a>

```python
def reset_minimum_password_length() -> None
```

##### `reset_number_of_recent_passwords_disallowed` <a name="reset_number_of_recent_passwords_disallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetNumberOfRecentPasswordsDisallowed"></a>

```python
def reset_number_of_recent_passwords_disallowed() -> None
```

##### `reset_password_char_combination` <a name="reset_password_char_combination" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordCharCombination"></a>

```python
def reset_password_char_combination() -> None
```

##### `reset_password_not_username_or_invert` <a name="reset_password_not_username_or_invert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordNotUsernameOrInvert"></a>

```python
def reset_password_not_username_or_invert() -> None
```

##### `reset_password_validity_period` <a name="reset_password_validity_period" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordValidityPeriod"></a>

```python
def reset_password_validity_period() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityPasswordPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_password_policy_v3

identityPasswordPolicyV3.IdentityPasswordPolicyV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_password_policy_v3

identityPasswordPolicyV3.IdentityPasswordPolicyV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_password_policy_v3

identityPasswordPolicyV3.IdentityPasswordPolicyV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_password_policy_v3

identityPasswordPolicyV3.IdentityPasswordPolicyV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityPasswordPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityPasswordPolicyV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityPasswordPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPasswordPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumPasswordLength">maximum_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordRequirements">password_requirements</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalCharsInput">maximum_consecutive_identical_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAgeInput">minimum_password_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLengthInput">minimum_password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowedInput">number_of_recent_passwords_disallowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordCharCombinationInput">password_char_combination_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvertInput">password_not_username_or_invert_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriodInput">password_validity_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalChars">maximum_consecutive_identical_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAge">minimum_password_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowed">number_of_recent_passwords_disallowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordCharCombination">password_char_combination</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvert">password_not_username_or_invert</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriod">password_validity_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `maximum_password_length`<sup>Required</sup> <a name="maximum_password_length" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumPasswordLength"></a>

```python
maximum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_requirements`<sup>Required</sup> <a name="password_requirements" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordRequirements"></a>

```python
password_requirements: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maximum_consecutive_identical_chars_input`<sup>Optional</sup> <a name="maximum_consecutive_identical_chars_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalCharsInput"></a>

```python
maximum_consecutive_identical_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_password_age_input`<sup>Optional</sup> <a name="minimum_password_age_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAgeInput"></a>

```python
minimum_password_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_password_length_input`<sup>Optional</sup> <a name="minimum_password_length_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLengthInput"></a>

```python
minimum_password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_recent_passwords_disallowed_input`<sup>Optional</sup> <a name="number_of_recent_passwords_disallowed_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowedInput"></a>

```python
number_of_recent_passwords_disallowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_char_combination_input`<sup>Optional</sup> <a name="password_char_combination_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordCharCombinationInput"></a>

```python
password_char_combination_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_not_username_or_invert_input`<sup>Optional</sup> <a name="password_not_username_or_invert_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvertInput"></a>

```python
password_not_username_or_invert_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `password_validity_period_input`<sup>Optional</sup> <a name="password_validity_period_input" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriodInput"></a>

```python
password_validity_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_consecutive_identical_chars`<sup>Required</sup> <a name="maximum_consecutive_identical_chars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalChars"></a>

```python
maximum_consecutive_identical_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_password_age`<sup>Required</sup> <a name="minimum_password_age" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAge"></a>

```python
minimum_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_password_length`<sup>Required</sup> <a name="minimum_password_length" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLength"></a>

```python
minimum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_recent_passwords_disallowed`<sup>Required</sup> <a name="number_of_recent_passwords_disallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowed"></a>

```python
number_of_recent_passwords_disallowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_char_combination`<sup>Required</sup> <a name="password_char_combination" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordCharCombination"></a>

```python
password_char_combination: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_not_username_or_invert`<sup>Required</sup> <a name="password_not_username_or_invert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvert"></a>

```python
password_not_username_or_invert: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `password_validity_period`<sup>Required</sup> <a name="password_validity_period" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriod"></a>

```python
password_validity_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPasswordPolicyV3Config <a name="IdentityPasswordPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_password_policy_v3

identityPasswordPolicyV3.IdentityPasswordPolicyV3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  maximum_consecutive_identical_chars: typing.Union[int, float] = None,
  minimum_password_age: typing.Union[int, float] = None,
  minimum_password_length: typing.Union[int, float] = None,
  number_of_recent_passwords_disallowed: typing.Union[int, float] = None,
  password_char_combination: typing.Union[int, float] = None,
  password_not_username_or_invert: bool | IResolvable = None,
  password_validity_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.maximumConsecutiveIdenticalChars">maximum_consecutive_identical_chars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordAge">minimum_password_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.numberOfRecentPasswordsDisallowed">number_of_recent_passwords_disallowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordCharCombination">password_char_combination</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_char_combination IdentityPasswordPolicyV3#password_char_combination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordNotUsernameOrInvert">password_not_username_or_invert</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordValidityPeriod">password_validity_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_consecutive_identical_chars`<sup>Optional</sup> <a name="maximum_consecutive_identical_chars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.maximumConsecutiveIdenticalChars"></a>

```python
maximum_consecutive_identical_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}.

---

##### `minimum_password_age`<sup>Optional</sup> <a name="minimum_password_age" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordAge"></a>

```python
minimum_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}.

---

##### `minimum_password_length`<sup>Optional</sup> <a name="minimum_password_length" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordLength"></a>

```python
minimum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}.

---

##### `number_of_recent_passwords_disallowed`<sup>Optional</sup> <a name="number_of_recent_passwords_disallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.numberOfRecentPasswordsDisallowed"></a>

```python
number_of_recent_passwords_disallowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}.

---

##### `password_char_combination`<sup>Optional</sup> <a name="password_char_combination" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordCharCombination"></a>

```python
password_char_combination: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_char_combination IdentityPasswordPolicyV3#password_char_combination}.

---

##### `password_not_username_or_invert`<sup>Optional</sup> <a name="password_not_username_or_invert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordNotUsernameOrInvert"></a>

```python
password_not_username_or_invert: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}.

---

##### `password_validity_period`<sup>Optional</sup> <a name="password_validity_period" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordValidityPeriod"></a>

```python
password_validity_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}.

---



