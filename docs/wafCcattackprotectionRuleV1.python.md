# `wafCcattackprotectionRuleV1` Submodule <a name="`wafCcattackprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafCcattackprotectionRuleV1 <a name="WafCcattackprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1 opentelekomcloud_waf_ccattackprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_category: str,
  limit_num: typing.Union[int, float],
  limit_period: typing.Union[int, float],
  policy_id: str,
  tag_type: str,
  url: str,
  block_content: str = None,
  block_content_type: str = None,
  id: str = None,
  lock_time: typing.Union[int, float] = None,
  tag_category: str = None,
  tag_contents: typing.List[str] = None,
  tag_index: str = None,
  timeouts: WafCcattackprotectionRuleV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.actionCategory">action_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.limitNum">limit_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.limitPeriod">limit_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagType">tag_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.blockContent">block_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.blockContentType">block_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.lockTime">lock_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagCategory">tag_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagContents">tag_contents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagIndex">tag_index</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_category`<sup>Required</sup> <a name="action_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.actionCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}.

---

##### `limit_num`<sup>Required</sup> <a name="limit_num" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.limitNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}.

---

##### `limit_period`<sup>Required</sup> <a name="limit_period" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.limitPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}.

---

##### `tag_type`<sup>Required</sup> <a name="tag_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}.

---

##### `block_content`<sup>Optional</sup> <a name="block_content" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.blockContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}.

---

##### `block_content_type`<sup>Optional</sup> <a name="block_content_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.blockContentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_time`<sup>Optional</sup> <a name="lock_time" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.lockTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}.

---

##### `tag_category`<sup>Optional</sup> <a name="tag_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}.

---

##### `tag_contents`<sup>Optional</sup> <a name="tag_contents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagContents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}.

---

##### `tag_index`<sup>Optional</sup> <a name="tag_index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.tagIndex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#timeouts WafCcattackprotectionRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContent">reset_block_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContentType">reset_block_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetLockTime">reset_lock_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagCategory">reset_tag_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagContents">reset_tag_contents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagIndex">reset_tag_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}.

---

##### `reset_block_content` <a name="reset_block_content" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContent"></a>

```python
def reset_block_content() -> None
```

##### `reset_block_content_type` <a name="reset_block_content_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContentType"></a>

```python
def reset_block_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lock_time` <a name="reset_lock_time" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetLockTime"></a>

```python
def reset_lock_time() -> None
```

##### `reset_tag_category` <a name="reset_tag_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagCategory"></a>

```python
def reset_tag_category() -> None
```

##### `reset_tag_contents` <a name="reset_tag_contents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagContents"></a>

```python
def reset_tag_contents() -> None
```

##### `reset_tag_index` <a name="reset_tag_index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagIndex"></a>

```python
def reset_tag_index() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WafCcattackprotectionRuleV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WafCcattackprotectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafCcattackprotectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference">WafCcattackprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategoryInput">action_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentInput">block_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentTypeInput">block_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNumInput">limit_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriodInput">limit_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTimeInput">lock_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategoryInput">tag_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContentsInput">tag_contents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndexInput">tag_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagTypeInput">tag_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategory">action_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContent">block_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentType">block_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNum">limit_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriod">limit_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTime">lock_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategory">tag_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContents">tag_contents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndex">tag_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagType">tag_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeouts"></a>

```python
timeouts: WafCcattackprotectionRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference">WafCcattackprotectionRuleV1TimeoutsOutputReference</a>

---

##### `action_category_input`<sup>Optional</sup> <a name="action_category_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategoryInput"></a>

```python
action_category_input: str
```

- *Type:* str

---

##### `block_content_input`<sup>Optional</sup> <a name="block_content_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentInput"></a>

```python
block_content_input: str
```

- *Type:* str

---

##### `block_content_type_input`<sup>Optional</sup> <a name="block_content_type_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentTypeInput"></a>

```python
block_content_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_num_input`<sup>Optional</sup> <a name="limit_num_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNumInput"></a>

```python
limit_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_period_input`<sup>Optional</sup> <a name="limit_period_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriodInput"></a>

```python
limit_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lock_time_input`<sup>Optional</sup> <a name="lock_time_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTimeInput"></a>

```python
lock_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `tag_category_input`<sup>Optional</sup> <a name="tag_category_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategoryInput"></a>

```python
tag_category_input: str
```

- *Type:* str

---

##### `tag_contents_input`<sup>Optional</sup> <a name="tag_contents_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContentsInput"></a>

```python
tag_contents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_index_input`<sup>Optional</sup> <a name="tag_index_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndexInput"></a>

```python
tag_index_input: str
```

- *Type:* str

---

##### `tag_type_input`<sup>Optional</sup> <a name="tag_type_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagTypeInput"></a>

```python
tag_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WafCcattackprotectionRuleV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `action_category`<sup>Required</sup> <a name="action_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategory"></a>

```python
action_category: str
```

- *Type:* str

---

##### `block_content`<sup>Required</sup> <a name="block_content" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContent"></a>

```python
block_content: str
```

- *Type:* str

---

##### `block_content_type`<sup>Required</sup> <a name="block_content_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentType"></a>

```python
block_content_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_num`<sup>Required</sup> <a name="limit_num" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNum"></a>

```python
limit_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_period`<sup>Required</sup> <a name="limit_period" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriod"></a>

```python
limit_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lock_time`<sup>Required</sup> <a name="lock_time" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTime"></a>

```python
lock_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `tag_category`<sup>Required</sup> <a name="tag_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategory"></a>

```python
tag_category: str
```

- *Type:* str

---

##### `tag_contents`<sup>Required</sup> <a name="tag_contents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContents"></a>

```python
tag_contents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_index`<sup>Required</sup> <a name="tag_index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndex"></a>

```python
tag_index: str
```

- *Type:* str

---

##### `tag_type`<sup>Required</sup> <a name="tag_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagType"></a>

```python
tag_type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafCcattackprotectionRuleV1Config <a name="WafCcattackprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_category: str,
  limit_num: typing.Union[int, float],
  limit_period: typing.Union[int, float],
  policy_id: str,
  tag_type: str,
  url: str,
  block_content: str = None,
  block_content_type: str = None,
  id: str = None,
  lock_time: typing.Union[int, float] = None,
  tag_category: str = None,
  tag_contents: typing.List[str] = None,
  tag_index: str = None,
  timeouts: WafCcattackprotectionRuleV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.actionCategory">action_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitNum">limit_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitPeriod">limit_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagType">tag_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContent">block_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContentType">block_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lockTime">lock_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagCategory">tag_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagContents">tag_contents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagIndex">tag_index</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_category`<sup>Required</sup> <a name="action_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.actionCategory"></a>

```python
action_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}.

---

##### `limit_num`<sup>Required</sup> <a name="limit_num" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitNum"></a>

```python
limit_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}.

---

##### `limit_period`<sup>Required</sup> <a name="limit_period" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitPeriod"></a>

```python
limit_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}.

---

##### `tag_type`<sup>Required</sup> <a name="tag_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagType"></a>

```python
tag_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}.

---

##### `block_content`<sup>Optional</sup> <a name="block_content" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContent"></a>

```python
block_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}.

---

##### `block_content_type`<sup>Optional</sup> <a name="block_content_type" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContentType"></a>

```python
block_content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_time`<sup>Optional</sup> <a name="lock_time" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lockTime"></a>

```python
lock_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}.

---

##### `tag_category`<sup>Optional</sup> <a name="tag_category" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagCategory"></a>

```python
tag_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}.

---

##### `tag_contents`<sup>Optional</sup> <a name="tag_contents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagContents"></a>

```python
tag_contents: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}.

---

##### `tag_index`<sup>Optional</sup> <a name="tag_index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagIndex"></a>

```python
tag_index: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.timeouts"></a>

```python
timeouts: WafCcattackprotectionRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#timeouts WafCcattackprotectionRuleV1#timeouts}

---

### WafCcattackprotectionRuleV1Timeouts <a name="WafCcattackprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafCcattackprotectionRuleV1TimeoutsOutputReference <a name="WafCcattackprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import waf_ccattackprotection_rule_v1

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WafCcattackprotectionRuleV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>]

---



