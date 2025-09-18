# `identityProtectionPolicyV3` Submodule <a name="`identityProtectionPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityProtectionPolicyV3 <a name="IdentityProtectionPolicyV3" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3 opentelekomcloud_identity_protection_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_operation_protection_policy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  self_management: IdentityProtectionPolicyV3SelfManagement = None,
  verification_email: str = None,
  verification_mobile: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.enableOperationProtectionPolicy">enable_operation_protection_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.selfManagement">self_management</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | self_management block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.verificationEmail">verification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.verificationMobile">verification_mobile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_operation_protection_policy`<sup>Optional</sup> <a name="enable_operation_protection_policy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.enableOperationProtectionPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `self_management`<sup>Optional</sup> <a name="self_management" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.selfManagement"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

self_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#self_management IdentityProtectionPolicyV3#self_management}

---

##### `verification_email`<sup>Optional</sup> <a name="verification_email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.verificationEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}.

---

##### `verification_mobile`<sup>Optional</sup> <a name="verification_mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.Initializer.parameter.verificationMobile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement">put_self_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetEnableOperationProtectionPolicy">reset_enable_operation_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetSelfManagement">reset_self_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationEmail">reset_verification_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationMobile">reset_verification_mobile</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_self_management` <a name="put_self_management" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement"></a>

```python
def put_self_management(
  access_key: typing.Union[bool, IResolvable] = None,
  email: typing.Union[bool, IResolvable] = None,
  mobile: typing.Union[bool, IResolvable] = None,
  password: typing.Union[bool, IResolvable] = None
) -> None
```

###### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement.parameter.accessKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#access_key IdentityProtectionPolicyV3#access_key}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement.parameter.email"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#email IdentityProtectionPolicyV3#email}.

---

###### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement.parameter.mobile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#mobile IdentityProtectionPolicyV3#mobile}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.putSelfManagement.parameter.password"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#password IdentityProtectionPolicyV3#password}.

---

##### `reset_enable_operation_protection_policy` <a name="reset_enable_operation_protection_policy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetEnableOperationProtectionPolicy"></a>

```python
def reset_enable_operation_protection_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_self_management` <a name="reset_self_management" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetSelfManagement"></a>

```python
def reset_self_management() -> None
```

##### `reset_verification_email` <a name="reset_verification_email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationEmail"></a>

```python
def reset_verification_email() -> None
```

##### `reset_verification_mobile` <a name="reset_verification_mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.resetVerificationMobile"></a>

```python
def reset_verification_mobile() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityProtectionPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityProtectionPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityProtectionPolicyV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityProtectionPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityProtectionPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagement">self_management</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference">IdentityProtectionPolicyV3SelfManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfVerification">self_verification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicyInput">enable_operation_protection_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagementInput">self_management_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmailInput">verification_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobileInput">verification_mobile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicy">enable_operation_protection_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmail">verification_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobile">verification_mobile</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `self_management`<sup>Required</sup> <a name="self_management" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagement"></a>

```python
self_management: IdentityProtectionPolicyV3SelfManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference">IdentityProtectionPolicyV3SelfManagementOutputReference</a>

---

##### `self_verification`<sup>Required</sup> <a name="self_verification" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfVerification"></a>

```python
self_verification: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_operation_protection_policy_input`<sup>Optional</sup> <a name="enable_operation_protection_policy_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicyInput"></a>

```python
enable_operation_protection_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `self_management_input`<sup>Optional</sup> <a name="self_management_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.selfManagementInput"></a>

```python
self_management_input: IdentityProtectionPolicyV3SelfManagement
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

---

##### `verification_email_input`<sup>Optional</sup> <a name="verification_email_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmailInput"></a>

```python
verification_email_input: str
```

- *Type:* str

---

##### `verification_mobile_input`<sup>Optional</sup> <a name="verification_mobile_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobileInput"></a>

```python
verification_mobile_input: str
```

- *Type:* str

---

##### `enable_operation_protection_policy`<sup>Required</sup> <a name="enable_operation_protection_policy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.enableOperationProtectionPolicy"></a>

```python
enable_operation_protection_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `verification_email`<sup>Required</sup> <a name="verification_email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationEmail"></a>

```python
verification_email: str
```

- *Type:* str

---

##### `verification_mobile`<sup>Required</sup> <a name="verification_mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.verificationMobile"></a>

```python
verification_mobile: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityProtectionPolicyV3Config <a name="IdentityProtectionPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_operation_protection_policy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  self_management: IdentityProtectionPolicyV3SelfManagement = None,
  verification_email: str = None,
  verification_mobile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.enableOperationProtectionPolicy">enable_operation_protection_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.selfManagement">self_management</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | self_management block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationEmail">verification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationMobile">verification_mobile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_operation_protection_policy`<sup>Optional</sup> <a name="enable_operation_protection_policy" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.enableOperationProtectionPolicy"></a>

```python
enable_operation_protection_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#enable_operation_protection_policy IdentityProtectionPolicyV3#enable_operation_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#id IdentityProtectionPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `self_management`<sup>Optional</sup> <a name="self_management" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.selfManagement"></a>

```python
self_management: IdentityProtectionPolicyV3SelfManagement
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

self_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#self_management IdentityProtectionPolicyV3#self_management}

---

##### `verification_email`<sup>Optional</sup> <a name="verification_email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationEmail"></a>

```python
verification_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_email IdentityProtectionPolicyV3#verification_email}.

---

##### `verification_mobile`<sup>Optional</sup> <a name="verification_mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3Config.property.verificationMobile"></a>

```python
verification_mobile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#verification_mobile IdentityProtectionPolicyV3#verification_mobile}.

---

### IdentityProtectionPolicyV3SelfManagement <a name="IdentityProtectionPolicyV3SelfManagement" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement(
  access_key: typing.Union[bool, IResolvable] = None,
  email: typing.Union[bool, IResolvable] = None,
  mobile: typing.Union[bool, IResolvable] = None,
  password: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.accessKey">access_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#access_key IdentityProtectionPolicyV3#access_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.email">email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#email IdentityProtectionPolicyV3#email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.mobile">mobile</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#mobile IdentityProtectionPolicyV3#mobile}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.password">password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#password IdentityProtectionPolicyV3#password}. |

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.accessKey"></a>

```python
access_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#access_key IdentityProtectionPolicyV3#access_key}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.email"></a>

```python
email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#email IdentityProtectionPolicyV3#email}.

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.mobile"></a>

```python
mobile: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#mobile IdentityProtectionPolicyV3#mobile}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement.property.password"></a>

```python
password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/identity_protection_policy_v3#password IdentityProtectionPolicyV3#password}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityProtectionPolicyV3SelfManagementOutputReference <a name="IdentityProtectionPolicyV3SelfManagementOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protection_policy_v3

identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetMobile">reset_mobile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetPassword">reset_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_key` <a name="reset_access_key" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_mobile` <a name="reset_mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetMobile"></a>

```python
def reset_mobile() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKeyInput">access_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.emailInput">email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobileInput">mobile_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.passwordInput">password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKey">access_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.email">email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobile">mobile</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.password">password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKeyInput"></a>

```python
access_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.emailInput"></a>

```python
email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mobile_input`<sup>Optional</sup> <a name="mobile_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobileInput"></a>

```python
mobile_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.passwordInput"></a>

```python
password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.accessKey"></a>

```python
access_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.email"></a>

```python
email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.mobile"></a>

```python
mobile: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.password"></a>

```python
password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagementOutputReference.property.internalValue"></a>

```python
internal_value: IdentityProtectionPolicyV3SelfManagement
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtectionPolicyV3.IdentityProtectionPolicyV3SelfManagement">IdentityProtectionPolicyV3SelfManagement</a>

---



