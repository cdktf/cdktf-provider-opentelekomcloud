# `wafDedicatedPolicyV1` Submodule <a name="`wafDedicatedPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPolicyV1 <a name="WafDedicatedPolicyV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1 opentelekomcloud_waf_dedicated_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1(
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
  deep_inspection: typing.Union[bool, IResolvable] = None,
  full_detection: typing.Union[bool, IResolvable] = None,
  header_inspection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  level: typing.Union[int, float] = None,
  options: typing.Union[IResolvable, typing.List[WafDedicatedPolicyV1Options]] = None,
  protection_mode: str = None,
  region: str = None,
  shiro_decryption_check: typing.Union[bool, IResolvable] = None,
  timeouts: WafDedicatedPolicyV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.deepInspection">deep_inspection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.fullDetection">full_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.headerInspection">header_inspection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.level">level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.options">options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]</code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.shiroDecryptionCheck">shiro_decryption_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}.

---

##### `deep_inspection`<sup>Optional</sup> <a name="deep_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.deepInspection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}.

---

##### `full_detection`<sup>Optional</sup> <a name="full_detection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.fullDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}.

---

##### `header_inspection`<sup>Optional</sup> <a name="header_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.headerInspection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.level"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.options"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#options WafDedicatedPolicyV1#options}

---

##### `protection_mode`<sup>Optional</sup> <a name="protection_mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.protectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}.

---

##### `shiro_decryption_check`<sup>Optional</sup> <a name="shiro_decryption_check" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.shiroDecryptionCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#timeouts WafDedicatedPolicyV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection">reset_deep_inspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection">reset_full_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection">reset_header_inspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode">reset_protection_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck">reset_shiro_decryption_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions"></a>

```python
def put_options(
  value: typing.Union[IResolvable, typing.List[WafDedicatedPolicyV1Options]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}.

---

##### `reset_deep_inspection` <a name="reset_deep_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection"></a>

```python
def reset_deep_inspection() -> None
```

##### `reset_full_detection` <a name="reset_full_detection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection"></a>

```python
def reset_full_detection() -> None
```

##### `reset_header_inspection` <a name="reset_header_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection"></a>

```python
def reset_header_inspection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_protection_mode` <a name="reset_protection_mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode"></a>

```python
def reset_protection_mode() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_shiro_decryption_check` <a name="reset_shiro_decryption_check" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck"></a>

```python
def reset_shiro_decryption_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafDedicatedPolicyV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafDedicatedPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput">deep_inspection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput">full_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput">header_inspection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput">level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput">options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput">protection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput">shiro_decryption_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection">deep_inspection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection">full_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection">header_inspection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level">level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck">shiro_decryption_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options"></a>

```python
options: WafDedicatedPolicyV1OptionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts"></a>

```python
timeouts: WafDedicatedPolicyV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a>

---

##### `deep_inspection_input`<sup>Optional</sup> <a name="deep_inspection_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput"></a>

```python
deep_inspection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `full_detection_input`<sup>Optional</sup> <a name="full_detection_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput"></a>

```python
full_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header_inspection_input`<sup>Optional</sup> <a name="header_inspection_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput"></a>

```python
header_inspection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput"></a>

```python
level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput"></a>

```python
options_input: typing.Union[IResolvable, typing.List[WafDedicatedPolicyV1Options]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]

---

##### `protection_mode_input`<sup>Optional</sup> <a name="protection_mode_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput"></a>

```python
protection_mode_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `shiro_decryption_check_input`<sup>Optional</sup> <a name="shiro_decryption_check_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput"></a>

```python
shiro_decryption_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WafDedicatedPolicyV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>]

---

##### `deep_inspection`<sup>Required</sup> <a name="deep_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection"></a>

```python
deep_inspection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `full_detection`<sup>Required</sup> <a name="full_detection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection"></a>

```python
full_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header_inspection`<sup>Required</sup> <a name="header_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection"></a>

```python
header_inspection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `shiro_decryption_check`<sup>Required</sup> <a name="shiro_decryption_check" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck"></a>

```python
shiro_decryption_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPolicyV1Config <a name="WafDedicatedPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  deep_inspection: typing.Union[bool, IResolvable] = None,
  full_detection: typing.Union[bool, IResolvable] = None,
  header_inspection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  level: typing.Union[int, float] = None,
  options: typing.Union[IResolvable, typing.List[WafDedicatedPolicyV1Options]] = None,
  protection_mode: str = None,
  region: str = None,
  shiro_decryption_check: typing.Union[bool, IResolvable] = None,
  timeouts: WafDedicatedPolicyV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection">deep_inspection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection">full_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection">header_inspection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level">level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options">options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]</code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck">shiro_decryption_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}.

---

##### `deep_inspection`<sup>Optional</sup> <a name="deep_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection"></a>

```python
deep_inspection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}.

---

##### `full_detection`<sup>Optional</sup> <a name="full_detection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection"></a>

```python
full_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}.

---

##### `header_inspection`<sup>Optional</sup> <a name="header_inspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection"></a>

```python
header_inspection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options"></a>

```python
options: typing.Union[IResolvable, typing.List[WafDedicatedPolicyV1Options]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#options WafDedicatedPolicyV1#options}

---

##### `protection_mode`<sup>Optional</sup> <a name="protection_mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}.

---

##### `shiro_decryption_check`<sup>Optional</sup> <a name="shiro_decryption_check" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck"></a>

```python
shiro_decryption_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts"></a>

```python
timeouts: WafDedicatedPolicyV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#timeouts WafDedicatedPolicyV1#timeouts}

---

### WafDedicatedPolicyV1Options <a name="WafDedicatedPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1Options(
  anti_crawler: typing.Union[bool, IResolvable] = None,
  anti_leakage: typing.Union[bool, IResolvable] = None,
  anti_tamper: typing.Union[bool, IResolvable] = None,
  blacklist: typing.Union[bool, IResolvable] = None,
  cc: typing.Union[bool, IResolvable] = None,
  common: typing.Union[bool, IResolvable] = None,
  crawler: typing.Union[bool, IResolvable] = None,
  crawler_engine: typing.Union[bool, IResolvable] = None,
  crawler_other: typing.Union[bool, IResolvable] = None,
  crawler_scanner: typing.Union[bool, IResolvable] = None,
  crawler_script: typing.Union[bool, IResolvable] = None,
  custom: typing.Union[bool, IResolvable] = None,
  followed_action: typing.Union[bool, IResolvable] = None,
  geolocation_access_control: typing.Union[bool, IResolvable] = None,
  ignore: typing.Union[bool, IResolvable] = None,
  privacy: typing.Union[bool, IResolvable] = None,
  web_attack: typing.Union[bool, IResolvable] = None,
  web_shell: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler">anti_crawler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage">anti_leakage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper">anti_tamper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist">blacklist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc">cc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common">common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler">crawler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine">crawler_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther">crawler_other</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner">crawler_scanner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript">crawler_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom">custom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction">followed_action</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl">geolocation_access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore">ignore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy">privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack">web_attack</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell">web_shell</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}. |

---

##### `anti_crawler`<sup>Optional</sup> <a name="anti_crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler"></a>

```python
anti_crawler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}.

---

##### `anti_leakage`<sup>Optional</sup> <a name="anti_leakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage"></a>

```python
anti_leakage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}.

---

##### `anti_tamper`<sup>Optional</sup> <a name="anti_tamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper"></a>

```python
anti_tamper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}.

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist"></a>

```python
blacklist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}.

---

##### `cc`<sup>Optional</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc"></a>

```python
cc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}.

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common"></a>

```python
common: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}.

---

##### `crawler`<sup>Optional</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler"></a>

```python
crawler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}.

---

##### `crawler_engine`<sup>Optional</sup> <a name="crawler_engine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine"></a>

```python
crawler_engine: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}.

---

##### `crawler_other`<sup>Optional</sup> <a name="crawler_other" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther"></a>

```python
crawler_other: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}.

---

##### `crawler_scanner`<sup>Optional</sup> <a name="crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner"></a>

```python
crawler_scanner: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}.

---

##### `crawler_script`<sup>Optional</sup> <a name="crawler_script" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript"></a>

```python
crawler_script: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom"></a>

```python
custom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}.

---

##### `followed_action`<sup>Optional</sup> <a name="followed_action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction"></a>

```python
followed_action: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}.

---

##### `geolocation_access_control`<sup>Optional</sup> <a name="geolocation_access_control" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl"></a>

```python
geolocation_access_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore"></a>

```python
ignore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}.

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy"></a>

```python
privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}.

---

##### `web_attack`<sup>Optional</sup> <a name="web_attack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack"></a>

```python
web_attack: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}.

---

##### `web_shell`<sup>Optional</sup> <a name="web_shell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell"></a>

```python
web_shell: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}.

---

### WafDedicatedPolicyV1Timeouts <a name="WafDedicatedPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPolicyV1OptionsList <a name="WafDedicatedPolicyV1OptionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafDedicatedPolicyV1OptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafDedicatedPolicyV1Options]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]]

---


### WafDedicatedPolicyV1OptionsOutputReference <a name="WafDedicatedPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler">reset_anti_crawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage">reset_anti_leakage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper">reset_anti_tamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist">reset_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc">reset_cc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon">reset_common</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler">reset_crawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine">reset_crawler_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther">reset_crawler_other</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner">reset_crawler_scanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript">reset_crawler_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction">reset_followed_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl">reset_geolocation_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore">reset_ignore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy">reset_privacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack">reset_web_attack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell">reset_web_shell</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_anti_crawler` <a name="reset_anti_crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler"></a>

```python
def reset_anti_crawler() -> None
```

##### `reset_anti_leakage` <a name="reset_anti_leakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage"></a>

```python
def reset_anti_leakage() -> None
```

##### `reset_anti_tamper` <a name="reset_anti_tamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper"></a>

```python
def reset_anti_tamper() -> None
```

##### `reset_blacklist` <a name="reset_blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist"></a>

```python
def reset_blacklist() -> None
```

##### `reset_cc` <a name="reset_cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc"></a>

```python
def reset_cc() -> None
```

##### `reset_common` <a name="reset_common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon"></a>

```python
def reset_common() -> None
```

##### `reset_crawler` <a name="reset_crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler"></a>

```python
def reset_crawler() -> None
```

##### `reset_crawler_engine` <a name="reset_crawler_engine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```python
def reset_crawler_engine() -> None
```

##### `reset_crawler_other` <a name="reset_crawler_other" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```python
def reset_crawler_other() -> None
```

##### `reset_crawler_scanner` <a name="reset_crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```python
def reset_crawler_scanner() -> None
```

##### `reset_crawler_script` <a name="reset_crawler_script" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```python
def reset_crawler_script() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_followed_action` <a name="reset_followed_action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction"></a>

```python
def reset_followed_action() -> None
```

##### `reset_geolocation_access_control` <a name="reset_geolocation_access_control" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl"></a>

```python
def reset_geolocation_access_control() -> None
```

##### `reset_ignore` <a name="reset_ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore"></a>

```python
def reset_ignore() -> None
```

##### `reset_privacy` <a name="reset_privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy"></a>

```python
def reset_privacy() -> None
```

##### `reset_web_attack` <a name="reset_web_attack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack"></a>

```python
def reset_web_attack() -> None
```

##### `reset_web_shell` <a name="reset_web_shell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell"></a>

```python
def reset_web_shell() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable">bot_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise">precise</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput">anti_crawler_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput">anti_leakage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput">anti_tamper_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput">blacklist_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput">cc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput">common_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput">crawler_engine_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput">crawler_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput">crawler_other_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput">crawler_scanner_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput">crawler_script_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput">custom_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput">followed_action_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput">geolocation_access_control_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput">ignore_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput">privacy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput">web_attack_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput">web_shell_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler">anti_crawler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage">anti_leakage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper">anti_tamper</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist">blacklist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc">cc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common">common</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler">crawler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine">crawler_engine</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther">crawler_other</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner">crawler_scanner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript">crawler_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom">custom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction">followed_action</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl">geolocation_access_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore">ignore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy">privacy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack">web_attack</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell">web_shell</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_enable`<sup>Required</sup> <a name="bot_enable" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable"></a>

```python
bot_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `precise`<sup>Required</sup> <a name="precise" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise"></a>

```python
precise: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `anti_crawler_input`<sup>Optional</sup> <a name="anti_crawler_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput"></a>

```python
anti_crawler_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anti_leakage_input`<sup>Optional</sup> <a name="anti_leakage_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput"></a>

```python
anti_leakage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anti_tamper_input`<sup>Optional</sup> <a name="anti_tamper_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput"></a>

```python
anti_tamper_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blacklist_input`<sup>Optional</sup> <a name="blacklist_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput"></a>

```python
blacklist_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cc_input`<sup>Optional</sup> <a name="cc_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput"></a>

```python
cc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_input`<sup>Optional</sup> <a name="common_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput"></a>

```python
common_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_engine_input`<sup>Optional</sup> <a name="crawler_engine_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```python
crawler_engine_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_input`<sup>Optional</sup> <a name="crawler_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```python
crawler_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_other_input`<sup>Optional</sup> <a name="crawler_other_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```python
crawler_other_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_scanner_input`<sup>Optional</sup> <a name="crawler_scanner_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```python
crawler_scanner_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_script_input`<sup>Optional</sup> <a name="crawler_script_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```python
crawler_script_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput"></a>

```python
custom_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `followed_action_input`<sup>Optional</sup> <a name="followed_action_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput"></a>

```python
followed_action_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geolocation_access_control_input`<sup>Optional</sup> <a name="geolocation_access_control_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput"></a>

```python
geolocation_access_control_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_input`<sup>Optional</sup> <a name="ignore_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```python
ignore_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privacy_input`<sup>Optional</sup> <a name="privacy_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput"></a>

```python
privacy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_attack_input`<sup>Optional</sup> <a name="web_attack_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput"></a>

```python
web_attack_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_shell_input`<sup>Optional</sup> <a name="web_shell_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput"></a>

```python
web_shell_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anti_crawler`<sup>Required</sup> <a name="anti_crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler"></a>

```python
anti_crawler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anti_leakage`<sup>Required</sup> <a name="anti_leakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage"></a>

```python
anti_leakage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anti_tamper`<sup>Required</sup> <a name="anti_tamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper"></a>

```python
anti_tamper: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist"></a>

```python
blacklist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cc`<sup>Required</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc"></a>

```python
cc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common"></a>

```python
common: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler`<sup>Required</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler"></a>

```python
crawler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_engine`<sup>Required</sup> <a name="crawler_engine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```python
crawler_engine: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_other`<sup>Required</sup> <a name="crawler_other" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```python
crawler_other: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_scanner`<sup>Required</sup> <a name="crawler_scanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```python
crawler_scanner: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crawler_script`<sup>Required</sup> <a name="crawler_script" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```python
crawler_script: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom"></a>

```python
custom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `followed_action`<sup>Required</sup> <a name="followed_action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction"></a>

```python
followed_action: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geolocation_access_control`<sup>Required</sup> <a name="geolocation_access_control" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl"></a>

```python
geolocation_access_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore`<sup>Required</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore"></a>

```python
ignore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy"></a>

```python
privacy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_attack`<sup>Required</sup> <a name="web_attack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack"></a>

```python
web_attack: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_shell`<sup>Required</sup> <a name="web_shell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell"></a>

```python
web_shell: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafDedicatedPolicyV1Options]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>]

---


### WafDedicatedPolicyV1TimeoutsOutputReference <a name="WafDedicatedPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_dedicated_policy_v1

wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafDedicatedPolicyV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>]

---



