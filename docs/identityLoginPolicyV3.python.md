# `identityLoginPolicyV3` Submodule <a name="`identityLoginPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityLoginPolicyV3 <a name="IdentityLoginPolicyV3" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3 opentelekomcloud_identity_login_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_login_policy_v3

identityLoginPolicyV3.IdentityLoginPolicyV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_validity_period: typing.Union[int, float] = None,
  custom_info_for_login: str = None,
  id: str = None,
  lockout_duration: typing.Union[int, float] = None,
  login_failed_times: typing.Union[int, float] = None,
  period_with_login_failures: typing.Union[int, float] = None,
  session_timeout: typing.Union[int, float] = None,
  show_recent_login_info: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.accountValidityPeriod">account_validity_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.customInfoForLogin">custom_info_for_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.loginFailedTimes">login_failed_times</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.periodWithLoginFailures">period_with_login_failures</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.showRecentLoginInfo">show_recent_login_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_validity_period`<sup>Optional</sup> <a name="account_validity_period" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.accountValidityPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}.

---

##### `custom_info_for_login`<sup>Optional</sup> <a name="custom_info_for_login" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.customInfoForLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockout_duration`<sup>Optional</sup> <a name="lockout_duration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.lockoutDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}.

---

##### `login_failed_times`<sup>Optional</sup> <a name="login_failed_times" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.loginFailedTimes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}.

---

##### `period_with_login_failures`<sup>Optional</sup> <a name="period_with_login_failures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.periodWithLoginFailures"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}.

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}.

---

##### `show_recent_login_info`<sup>Optional</sup> <a name="show_recent_login_info" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.showRecentLoginInfo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetAccountValidityPeriod">reset_account_validity_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetCustomInfoForLogin">reset_custom_info_for_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLockoutDuration">reset_lockout_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLoginFailedTimes">reset_login_failed_times</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetPeriodWithLoginFailures">reset_period_with_login_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetShowRecentLoginInfo">reset_show_recent_login_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_validity_period` <a name="reset_account_validity_period" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetAccountValidityPeriod"></a>

```python
def reset_account_validity_period() -> None
```

##### `reset_custom_info_for_login` <a name="reset_custom_info_for_login" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetCustomInfoForLogin"></a>

```python
def reset_custom_info_for_login() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lockout_duration` <a name="reset_lockout_duration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLockoutDuration"></a>

```python
def reset_lockout_duration() -> None
```

##### `reset_login_failed_times` <a name="reset_login_failed_times" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLoginFailedTimes"></a>

```python
def reset_login_failed_times() -> None
```

##### `reset_period_with_login_failures` <a name="reset_period_with_login_failures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetPeriodWithLoginFailures"></a>

```python
def reset_period_with_login_failures() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_show_recent_login_info` <a name="reset_show_recent_login_info" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetShowRecentLoginInfo"></a>

```python
def reset_show_recent_login_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityLoginPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_login_policy_v3

identityLoginPolicyV3.IdentityLoginPolicyV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_login_policy_v3

identityLoginPolicyV3.IdentityLoginPolicyV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_login_policy_v3

identityLoginPolicyV3.IdentityLoginPolicyV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_login_policy_v3

identityLoginPolicyV3.IdentityLoginPolicyV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityLoginPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityLoginPolicyV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityLoginPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityLoginPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriodInput">account_validity_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLoginInput">custom_info_for_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDurationInput">lockout_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimesInput">login_failed_times_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailuresInput">period_with_login_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfoInput">show_recent_login_info_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriod">account_validity_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLogin">custom_info_for_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimes">login_failed_times</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailures">period_with_login_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfo">show_recent_login_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_validity_period_input`<sup>Optional</sup> <a name="account_validity_period_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriodInput"></a>

```python
account_validity_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_info_for_login_input`<sup>Optional</sup> <a name="custom_info_for_login_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLoginInput"></a>

```python
custom_info_for_login_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lockout_duration_input`<sup>Optional</sup> <a name="lockout_duration_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDurationInput"></a>

```python
lockout_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login_failed_times_input`<sup>Optional</sup> <a name="login_failed_times_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimesInput"></a>

```python
login_failed_times_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_with_login_failures_input`<sup>Optional</sup> <a name="period_with_login_failures_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailuresInput"></a>

```python
period_with_login_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `show_recent_login_info_input`<sup>Optional</sup> <a name="show_recent_login_info_input" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfoInput"></a>

```python
show_recent_login_info_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_validity_period`<sup>Required</sup> <a name="account_validity_period" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriod"></a>

```python
account_validity_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_info_for_login`<sup>Required</sup> <a name="custom_info_for_login" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLogin"></a>

```python
custom_info_for_login: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lockout_duration`<sup>Required</sup> <a name="lockout_duration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDuration"></a>

```python
lockout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login_failed_times`<sup>Required</sup> <a name="login_failed_times" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimes"></a>

```python
login_failed_times: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_with_login_failures`<sup>Required</sup> <a name="period_with_login_failures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailures"></a>

```python
period_with_login_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `show_recent_login_info`<sup>Required</sup> <a name="show_recent_login_info" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfo"></a>

```python
show_recent_login_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityLoginPolicyV3Config <a name="IdentityLoginPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_login_policy_v3

identityLoginPolicyV3.IdentityLoginPolicyV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_validity_period: typing.Union[int, float] = None,
  custom_info_for_login: str = None,
  id: str = None,
  lockout_duration: typing.Union[int, float] = None,
  login_failed_times: typing.Union[int, float] = None,
  period_with_login_failures: typing.Union[int, float] = None,
  session_timeout: typing.Union[int, float] = None,
  show_recent_login_info: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.accountValidityPeriod">account_validity_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.customInfoForLogin">custom_info_for_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lockoutDuration">lockout_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.loginFailedTimes">login_failed_times</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.periodWithLoginFailures">period_with_login_failures</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.showRecentLoginInfo">show_recent_login_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_validity_period`<sup>Optional</sup> <a name="account_validity_period" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.accountValidityPeriod"></a>

```python
account_validity_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}.

---

##### `custom_info_for_login`<sup>Optional</sup> <a name="custom_info_for_login" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.customInfoForLogin"></a>

```python
custom_info_for_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockout_duration`<sup>Optional</sup> <a name="lockout_duration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lockoutDuration"></a>

```python
lockout_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}.

---

##### `login_failed_times`<sup>Optional</sup> <a name="login_failed_times" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.loginFailedTimes"></a>

```python
login_failed_times: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}.

---

##### `period_with_login_failures`<sup>Optional</sup> <a name="period_with_login_failures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.periodWithLoginFailures"></a>

```python
period_with_login_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}.

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}.

---

##### `show_recent_login_info`<sup>Optional</sup> <a name="show_recent_login_info" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.showRecentLoginInfo"></a>

```python
show_recent_login_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}.

---



