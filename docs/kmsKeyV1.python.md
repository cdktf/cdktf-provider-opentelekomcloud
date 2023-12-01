# `kmsKeyV1` Submodule <a name="`kmsKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.kmsKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyV1 <a name="KmsKeyV1" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1 opentelekomcloud_kms_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import kms_key_v1

kmsKeyV1.KmsKeyV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_alias: str,
  allow_cancel_deletion: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  key_description: str = None,
  pending_days: str = None,
  realm: str = None,
  rotation_enabled: typing.Union[bool, IResolvable] = None,
  rotation_interval: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyAlias">key_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.allowCancelDeletion">allow_cancel_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#id KmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyDescription">key_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.pendingDays">pending_days</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.realm">realm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#realm KmsKeyV1#realm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationEnabled">rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationInterval">rotation_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#tags KmsKeyV1#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_alias`<sup>Required</sup> <a name="key_alias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}.

---

##### `allow_cancel_deletion`<sup>Optional</sup> <a name="allow_cancel_deletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.allowCancelDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#id KmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}.

---

##### `key_description`<sup>Optional</sup> <a name="key_description" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}.

---

##### `pending_days`<sup>Optional</sup> <a name="pending_days" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.pendingDays"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.realm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#realm KmsKeyV1#realm}.

---

##### `rotation_enabled`<sup>Optional</sup> <a name="rotation_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}.

---

##### `rotation_interval`<sup>Optional</sup> <a name="rotation_interval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#tags KmsKeyV1#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion">reset_allow_cancel_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription">reset_key_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays">reset_pending_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm">reset_realm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled">reset_rotation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval">reset_rotation_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_allow_cancel_deletion` <a name="reset_allow_cancel_deletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion"></a>

```python
def reset_allow_cancel_deletion() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_key_description` <a name="reset_key_description" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription"></a>

```python
def reset_key_description() -> None
```

##### `reset_pending_days` <a name="reset_pending_days" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays"></a>

```python
def reset_pending_days() -> None
```

##### `reset_realm` <a name="reset_realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm"></a>

```python
def reset_realm() -> None
```

##### `reset_rotation_enabled` <a name="reset_rotation_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled"></a>

```python
def reset_rotation_enabled() -> None
```

##### `reset_rotation_interval` <a name="reset_rotation_interval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval"></a>

```python
def reset_rotation_interval() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import kms_key_v1

kmsKeyV1.KmsKeyV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import kms_key_v1

kmsKeyV1.KmsKeyV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import kms_key_v1

kmsKeyV1.KmsKeyV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import kms_key_v1

kmsKeyV1.KmsKeyV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsKeyV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsKeyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag">default_key_flag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber">rotation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate">scheduled_deletion_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput">allow_cancel_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput">key_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput">key_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput">pending_days_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput">realm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput">rotation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput">rotation_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion">allow_cancel_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias">key_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription">key_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays">pending_days</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm">realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled">rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval">rotation_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `default_key_flag`<sup>Required</sup> <a name="default_key_flag" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag"></a>

```python
default_key_flag: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `rotation_number`<sup>Required</sup> <a name="rotation_number" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber"></a>

```python
rotation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduled_deletion_date`<sup>Required</sup> <a name="scheduled_deletion_date" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate"></a>

```python
scheduled_deletion_date: str
```

- *Type:* str

---

##### `allow_cancel_deletion_input`<sup>Optional</sup> <a name="allow_cancel_deletion_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput"></a>

```python
allow_cancel_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_alias_input`<sup>Optional</sup> <a name="key_alias_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput"></a>

```python
key_alias_input: str
```

- *Type:* str

---

##### `key_description_input`<sup>Optional</sup> <a name="key_description_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput"></a>

```python
key_description_input: str
```

- *Type:* str

---

##### `pending_days_input`<sup>Optional</sup> <a name="pending_days_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput"></a>

```python
pending_days_input: str
```

- *Type:* str

---

##### `realm_input`<sup>Optional</sup> <a name="realm_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput"></a>

```python
realm_input: str
```

- *Type:* str

---

##### `rotation_enabled_input`<sup>Optional</sup> <a name="rotation_enabled_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput"></a>

```python
rotation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rotation_interval_input`<sup>Optional</sup> <a name="rotation_interval_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput"></a>

```python
rotation_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_cancel_deletion`<sup>Required</sup> <a name="allow_cancel_deletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion"></a>

```python
allow_cancel_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_alias`<sup>Required</sup> <a name="key_alias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

---

##### `key_description`<sup>Required</sup> <a name="key_description" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription"></a>

```python
key_description: str
```

- *Type:* str

---

##### `pending_days`<sup>Required</sup> <a name="pending_days" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays"></a>

```python
pending_days: str
```

- *Type:* str

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm"></a>

```python
realm: str
```

- *Type:* str

---

##### `rotation_enabled`<sup>Required</sup> <a name="rotation_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled"></a>

```python
rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rotation_interval`<sup>Required</sup> <a name="rotation_interval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval"></a>

```python
rotation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyV1Config <a name="KmsKeyV1Config" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import kms_key_v1

kmsKeyV1.KmsKeyV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_alias: str,
  allow_cancel_deletion: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  key_description: str = None,
  pending_days: str = None,
  realm: str = None,
  rotation_enabled: typing.Union[bool, IResolvable] = None,
  rotation_interval: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias">key_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion">allow_cancel_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#id KmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription">key_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays">pending_days</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm">realm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#realm KmsKeyV1#realm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled">rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval">rotation_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#tags KmsKeyV1#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_alias`<sup>Required</sup> <a name="key_alias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}.

---

##### `allow_cancel_deletion`<sup>Optional</sup> <a name="allow_cancel_deletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion"></a>

```python
allow_cancel_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#id KmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}.

---

##### `key_description`<sup>Optional</sup> <a name="key_description" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription"></a>

```python
key_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}.

---

##### `pending_days`<sup>Optional</sup> <a name="pending_days" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays"></a>

```python
pending_days: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm"></a>

```python
realm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#realm KmsKeyV1#realm}.

---

##### `rotation_enabled`<sup>Optional</sup> <a name="rotation_enabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled"></a>

```python
rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}.

---

##### `rotation_interval`<sup>Optional</sup> <a name="rotation_interval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval"></a>

```python
rotation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/kms_key_v1#tags KmsKeyV1#tags}.

---



