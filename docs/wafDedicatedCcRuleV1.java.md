# `wafDedicatedCcRuleV1` Submodule <a name="`wafDedicatedCcRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedCcRuleV1 <a name="WafDedicatedCcRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1 opentelekomcloud_waf_dedicated_cc_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1;

WafDedicatedCcRuleV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(IResolvable|java.util.List<WafDedicatedCcRuleV1Action>)
    .limitNum(java.lang.Number)
    .limitPeriod(java.lang.Number)
    .mode(java.lang.Number)
    .policyId(java.lang.String)
    .tagType(java.lang.String)
    .url(java.lang.String)
//  .conditions(IResolvable|java.util.List<WafDedicatedCcRuleV1Conditions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .lockTime(java.lang.Number)
//  .tagCategory(java.lang.String)
//  .tagContents(java.util.List<java.lang.String>)
//  .tagIndex(java.lang.String)
//  .timeouts(WafDedicatedCcRuleV1Timeouts)
//  .unlockNum(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.limitNum">limitNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.limitPeriod">limitPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.mode">mode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagType">tagType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.lockTime">lockTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagCategory">tagCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagContents">tagContents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagIndex">tagIndex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.unlockNum">unlockNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#action WafDedicatedCcRuleV1#action}

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.limitNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}.

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.limitPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.mode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}.

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#conditions WafDedicatedCcRuleV1#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockTime`<sup>Optional</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.lockTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}.

---

##### `tagCategory`<sup>Optional</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagCategory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}.

---

##### `tagContents`<sup>Optional</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagContents"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}.

---

##### `tagIndex`<sup>Optional</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.tagIndex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#timeouts WafDedicatedCcRuleV1#timeouts}

---

##### `unlockNum`<sup>Optional</sup> <a name="unlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.unlockNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetLockTime">resetLockTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagCategory">resetTagCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagContents">resetTagContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagIndex">resetTagIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetUnlockNum">resetUnlockNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction"></a>

```java
public void putAction(IResolvable|java.util.List<WafDedicatedCcRuleV1Action> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<WafDedicatedCcRuleV1Conditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts"></a>

```java
public void putTimeouts(WafDedicatedCcRuleV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetId"></a>

```java
public void resetId()
```

##### `resetLockTime` <a name="resetLockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetLockTime"></a>

```java
public void resetLockTime()
```

##### `resetTagCategory` <a name="resetTagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagCategory"></a>

```java
public void resetTagCategory()
```

##### `resetTagContents` <a name="resetTagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagContents"></a>

```java
public void resetTagContents()
```

##### `resetTagIndex` <a name="resetTagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagIndex"></a>

```java
public void resetTagIndex()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnlockNum` <a name="resetUnlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetUnlockNum"></a>

```java
public void resetUnlockNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedCcRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1;

WafDedicatedCcRuleV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1;

WafDedicatedCcRuleV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1;

WafDedicatedCcRuleV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1;

WafDedicatedCcRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafDedicatedCcRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WafDedicatedCcRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafDedicatedCcRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafDedicatedCcRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedCcRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList">WafDedicatedCcRuleV1ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList">WafDedicatedCcRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference">WafDedicatedCcRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNumInput">limitNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriodInput">limitPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTimeInput">lockTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.modeInput">modeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategoryInput">tagCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContentsInput">tagContentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndexInput">tagIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagTypeInput">tagTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNumInput">unlockNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNum">limitNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriod">limitPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTime">lockTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategory">tagCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContents">tagContents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndex">tagIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagType">tagType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNum">unlockNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.action"></a>

```java
public WafDedicatedCcRuleV1ActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList">WafDedicatedCcRuleV1ActionList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditions"></a>

```java
public WafDedicatedCcRuleV1ConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList">WafDedicatedCcRuleV1ConditionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeouts"></a>

```java
public WafDedicatedCcRuleV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference">WafDedicatedCcRuleV1TimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.actionInput"></a>

```java
public IResolvable|java.util.List<WafDedicatedCcRuleV1Action> getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<WafDedicatedCcRuleV1Conditions> getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitNumInput`<sup>Optional</sup> <a name="limitNumInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNumInput"></a>

```java
public java.lang.Number getLimitNumInput();
```

- *Type:* java.lang.Number

---

##### `limitPeriodInput`<sup>Optional</sup> <a name="limitPeriodInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriodInput"></a>

```java
public java.lang.Number getLimitPeriodInput();
```

- *Type:* java.lang.Number

---

##### `lockTimeInput`<sup>Optional</sup> <a name="lockTimeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTimeInput"></a>

```java
public java.lang.Number getLockTimeInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.modeInput"></a>

```java
public java.lang.Number getModeInput();
```

- *Type:* java.lang.Number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `tagCategoryInput`<sup>Optional</sup> <a name="tagCategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategoryInput"></a>

```java
public java.lang.String getTagCategoryInput();
```

- *Type:* java.lang.String

---

##### `tagContentsInput`<sup>Optional</sup> <a name="tagContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContentsInput"></a>

```java
public java.util.List<java.lang.String> getTagContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagIndexInput`<sup>Optional</sup> <a name="tagIndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndexInput"></a>

```java
public java.lang.String getTagIndexInput();
```

- *Type:* java.lang.String

---

##### `tagTypeInput`<sup>Optional</sup> <a name="tagTypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagTypeInput"></a>

```java
public java.lang.String getTagTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeoutsInput"></a>

```java
public IResolvable|WafDedicatedCcRuleV1Timeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---

##### `unlockNumInput`<sup>Optional</sup> <a name="unlockNumInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNumInput"></a>

```java
public java.lang.Number getUnlockNumInput();
```

- *Type:* java.lang.Number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNum"></a>

```java
public java.lang.Number getLimitNum();
```

- *Type:* java.lang.Number

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriod"></a>

```java
public java.lang.Number getLimitPeriod();
```

- *Type:* java.lang.Number

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTime"></a>

```java
public java.lang.Number getLockTime();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `tagCategory`<sup>Required</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategory"></a>

```java
public java.lang.String getTagCategory();
```

- *Type:* java.lang.String

---

##### `tagContents`<sup>Required</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContents"></a>

```java
public java.util.List<java.lang.String> getTagContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagIndex`<sup>Required</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndex"></a>

```java
public java.lang.String getTagIndex();
```

- *Type:* java.lang.String

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagType"></a>

```java
public java.lang.String getTagType();
```

- *Type:* java.lang.String

---

##### `unlockNum`<sup>Required</sup> <a name="unlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNum"></a>

```java
public java.lang.Number getUnlockNum();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedCcRuleV1Action <a name="WafDedicatedCcRuleV1Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1Action;

WafDedicatedCcRuleV1Action.builder()
    .category(java.lang.String)
//  .content(java.lang.String)
//  .contentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#content WafDedicatedCcRuleV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#content_type WafDedicatedCcRuleV1#content_type}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#content WafDedicatedCcRuleV1#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#content_type WafDedicatedCcRuleV1#content_type}.

---

### WafDedicatedCcRuleV1Conditions <a name="WafDedicatedCcRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1Conditions;

WafDedicatedCcRuleV1Conditions.builder()
    .category(java.lang.String)
    .logicOperation(java.lang.String)
//  .contents(java.util.List<java.lang.String>)
//  .index(java.lang.String)
//  .valueListId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.logicOperation">logicOperation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#logic_operation WafDedicatedCcRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#contents WafDedicatedCcRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.index">index</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#index WafDedicatedCcRuleV1#index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.valueListId">valueListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#value_list_id WafDedicatedCcRuleV1#value_list_id}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}.

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.logicOperation"></a>

```java
public java.lang.String getLogicOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#logic_operation WafDedicatedCcRuleV1#logic_operation}.

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#contents WafDedicatedCcRuleV1#contents}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#index WafDedicatedCcRuleV1#index}.

---

##### `valueListId`<sup>Optional</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.valueListId"></a>

```java
public java.lang.String getValueListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#value_list_id WafDedicatedCcRuleV1#value_list_id}.

---

### WafDedicatedCcRuleV1Config <a name="WafDedicatedCcRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1Config;

WafDedicatedCcRuleV1Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(IResolvable|java.util.List<WafDedicatedCcRuleV1Action>)
    .limitNum(java.lang.Number)
    .limitPeriod(java.lang.Number)
    .mode(java.lang.Number)
    .policyId(java.lang.String)
    .tagType(java.lang.String)
    .url(java.lang.String)
//  .conditions(IResolvable|java.util.List<WafDedicatedCcRuleV1Conditions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .lockTime(java.lang.Number)
//  .tagCategory(java.lang.String)
//  .tagContents(java.util.List<java.lang.String>)
//  .tagIndex(java.lang.String)
//  .timeouts(WafDedicatedCcRuleV1Timeouts)
//  .unlockNum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitNum">limitNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitPeriod">limitPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.mode">mode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagType">tagType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lockTime">lockTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagCategory">tagCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagContents">tagContents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagIndex">tagIndex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.unlockNum">unlockNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.action"></a>

```java
public IResolvable|java.util.List<WafDedicatedCcRuleV1Action> getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#action WafDedicatedCcRuleV1#action}

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitNum"></a>

```java
public java.lang.Number getLimitNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}.

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitPeriod"></a>

```java
public java.lang.Number getLimitPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}.

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagType"></a>

```java
public java.lang.String getTagType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.conditions"></a>

```java
public IResolvable|java.util.List<WafDedicatedCcRuleV1Conditions> getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#conditions WafDedicatedCcRuleV1#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockTime`<sup>Optional</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lockTime"></a>

```java
public java.lang.Number getLockTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}.

---

##### `tagCategory`<sup>Optional</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagCategory"></a>

```java
public java.lang.String getTagCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}.

---

##### `tagContents`<sup>Optional</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagContents"></a>

```java
public java.util.List<java.lang.String> getTagContents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}.

---

##### `tagIndex`<sup>Optional</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagIndex"></a>

```java
public java.lang.String getTagIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.timeouts"></a>

```java
public WafDedicatedCcRuleV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#timeouts WafDedicatedCcRuleV1#timeouts}

---

##### `unlockNum`<sup>Optional</sup> <a name="unlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.unlockNum"></a>

```java
public java.lang.Number getUnlockNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}.

---

### WafDedicatedCcRuleV1Timeouts <a name="WafDedicatedCcRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1Timeouts;

WafDedicatedCcRuleV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#create WafDedicatedCcRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#delete WafDedicatedCcRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#create WafDedicatedCcRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/waf_dedicated_cc_rule_v1#delete WafDedicatedCcRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedCcRuleV1ActionList <a name="WafDedicatedCcRuleV1ActionList" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1ActionList;

new WafDedicatedCcRuleV1ActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get"></a>

```java
public WafDedicatedCcRuleV1ActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WafDedicatedCcRuleV1Action> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>>

---


### WafDedicatedCcRuleV1ActionOutputReference <a name="WafDedicatedCcRuleV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1ActionOutputReference;

new WafDedicatedCcRuleV1ActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContentType"></a>

```java
public void resetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.internalValue"></a>

```java
public IResolvable|WafDedicatedCcRuleV1Action getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>

---


### WafDedicatedCcRuleV1ConditionsList <a name="WafDedicatedCcRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1ConditionsList;

new WafDedicatedCcRuleV1ConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get"></a>

```java
public WafDedicatedCcRuleV1ConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WafDedicatedCcRuleV1Conditions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>>

---


### WafDedicatedCcRuleV1ConditionsOutputReference <a name="WafDedicatedCcRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1ConditionsOutputReference;

new WafDedicatedCcRuleV1ConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetValueListId">resetValueListId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContents` <a name="resetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetContents"></a>

```java
public void resetContents()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetIndex"></a>

```java
public void resetIndex()
```

##### `resetValueListId` <a name="resetValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetValueListId"></a>

```java
public void resetValueListId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperationInput">logicOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListIdInput">valueListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperation">logicOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListId">valueListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contentsInput"></a>

```java
public java.util.List<java.lang.String> getContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `logicOperationInput`<sup>Optional</sup> <a name="logicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```java
public java.lang.String getLogicOperationInput();
```

- *Type:* java.lang.String

---

##### `valueListIdInput`<sup>Optional</sup> <a name="valueListIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListIdInput"></a>

```java
public java.lang.String getValueListIdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperation"></a>

```java
public java.lang.String getLogicOperation();
```

- *Type:* java.lang.String

---

##### `valueListId`<sup>Required</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListId"></a>

```java
public java.lang.String getValueListId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|WafDedicatedCcRuleV1Conditions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>

---


### WafDedicatedCcRuleV1TimeoutsOutputReference <a name="WafDedicatedCcRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_cc_rule_v1.WafDedicatedCcRuleV1TimeoutsOutputReference;

new WafDedicatedCcRuleV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|WafDedicatedCcRuleV1Timeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---



