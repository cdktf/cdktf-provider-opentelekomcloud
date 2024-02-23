# `wafDedicatedAlarmMaskingRuleV1` Submodule <a name="`wafDedicatedAlarmMaskingRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedAlarmMaskingRuleV1 <a name="WafDedicatedAlarmMaskingRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1 opentelekomcloud_waf_dedicated_alarm_masking_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1;

WafDedicatedAlarmMaskingRuleV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .conditions(IResolvable)
    .conditions(java.util.List<WafDedicatedAlarmMaskingRuleV1Conditions>)
    .domains(java.util.List<java.lang.String>)
    .policyId(java.lang.String)
    .rule(java.lang.String)
//  .advancedSettings(IResolvable)
//  .advancedSettings(java.util.List<WafDedicatedAlarmMaskingRuleV1AdvancedSettings>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(WafDedicatedAlarmMaskingRuleV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.rule">rule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.advancedSettings">advancedSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#conditions WafDedicatedAlarmMaskingRuleV1#conditions}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.domains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.rule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}.

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.advancedSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#advanced_settings WafDedicatedAlarmMaskingRuleV1#advanced_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#timeouts WafDedicatedAlarmMaskingRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings">putAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetAdvancedSettings">resetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedSettings` <a name="putAdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings"></a>

```java
public void putAdvancedSettings(IResolvable OR java.util.List<WafDedicatedAlarmMaskingRuleV1AdvancedSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<WafDedicatedAlarmMaskingRuleV1Conditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts"></a>

```java
public void putTimeouts(WafDedicatedAlarmMaskingRuleV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

---

##### `resetAdvancedSettings` <a name="resetAdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetAdvancedSettings"></a>

```java
public void resetAdvancedSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedAlarmMaskingRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1;

WafDedicatedAlarmMaskingRuleV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1;

WafDedicatedAlarmMaskingRuleV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1;

WafDedicatedAlarmMaskingRuleV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1;

WafDedicatedAlarmMaskingRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafDedicatedAlarmMaskingRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WafDedicatedAlarmMaskingRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafDedicatedAlarmMaskingRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafDedicatedAlarmMaskingRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedAlarmMaskingRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList">WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList">WafDedicatedAlarmMaskingRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference">WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettingsInput">advancedSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedSettings`<sup>Required</sup> <a name="advancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettings"></a>

```java
public WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList getAdvancedSettings();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList">WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditions"></a>

```java
public WafDedicatedAlarmMaskingRuleV1ConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList">WafDedicatedAlarmMaskingRuleV1ConditionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeouts"></a>

```java
public WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference">WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference</a>

---

##### `advancedSettingsInput`<sup>Optional</sup> <a name="advancedSettingsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettingsInput"></a>

```java
public java.lang.Object getAdvancedSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedAlarmMaskingRuleV1AdvancedSettings <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings;

WafDedicatedAlarmMaskingRuleV1AdvancedSettings.builder()
//  .contents(java.util.List<java.lang.String>)
//  .index(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.index">index</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}. |

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}.

---

### WafDedicatedAlarmMaskingRuleV1Conditions <a name="WafDedicatedAlarmMaskingRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1Conditions;

WafDedicatedAlarmMaskingRuleV1Conditions.builder()
    .category(java.lang.String)
    .logicOperation(java.lang.String)
//  .contents(java.util.List<java.lang.String>)
//  .index(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#category WafDedicatedAlarmMaskingRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.logicOperation">logicOperation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#logic_operation WafDedicatedAlarmMaskingRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.index">index</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#category WafDedicatedAlarmMaskingRuleV1#category}.

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.logicOperation"></a>

```java
public java.lang.String getLogicOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#logic_operation WafDedicatedAlarmMaskingRuleV1#logic_operation}.

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}.

---

### WafDedicatedAlarmMaskingRuleV1Config <a name="WafDedicatedAlarmMaskingRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1Config;

WafDedicatedAlarmMaskingRuleV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .conditions(IResolvable)
    .conditions(java.util.List<WafDedicatedAlarmMaskingRuleV1Conditions>)
    .domains(java.util.List<java.lang.String>)
    .policyId(java.lang.String)
    .rule(java.lang.String)
//  .advancedSettings(IResolvable)
//  .advancedSettings(java.util.List<WafDedicatedAlarmMaskingRuleV1AdvancedSettings>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(WafDedicatedAlarmMaskingRuleV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.rule">rule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.advancedSettings">advancedSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#conditions WafDedicatedAlarmMaskingRuleV1#conditions}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}.

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.advancedSettings"></a>

```java
public java.lang.Object getAdvancedSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#advanced_settings WafDedicatedAlarmMaskingRuleV1#advanced_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.timeouts"></a>

```java
public WafDedicatedAlarmMaskingRuleV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#timeouts WafDedicatedAlarmMaskingRuleV1#timeouts}

---

### WafDedicatedAlarmMaskingRuleV1Timeouts <a name="WafDedicatedAlarmMaskingRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1Timeouts;

WafDedicatedAlarmMaskingRuleV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#create WafDedicatedAlarmMaskingRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#delete WafDedicatedAlarmMaskingRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#update WafDedicatedAlarmMaskingRuleV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#create WafDedicatedAlarmMaskingRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#delete WafDedicatedAlarmMaskingRuleV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/waf_dedicated_alarm_masking_rule_v1#update WafDedicatedAlarmMaskingRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList;

new WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.get"></a>

```java
public WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>>

---


### WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference;

new WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContents` <a name="resetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetContents"></a>

```java
public void resetContents()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetIndex"></a>

```java
public void resetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contentsInput"></a>

```java
public java.util.List<java.lang.String> getContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---


### WafDedicatedAlarmMaskingRuleV1ConditionsList <a name="WafDedicatedAlarmMaskingRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1ConditionsList;

new WafDedicatedAlarmMaskingRuleV1ConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get"></a>

```java
public WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>>

---


### WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference;

new WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContents` <a name="resetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetContents"></a>

```java
public void resetContents()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetIndex"></a>

```java
public void resetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperationInput">logicOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperation">logicOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contentsInput"></a>

```java
public java.util.List<java.lang.String> getContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `logicOperationInput`<sup>Optional</sup> <a name="logicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```java
public java.lang.String getLogicOperationInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperation"></a>

```java
public java.lang.String getLogicOperation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions">WafDedicatedAlarmMaskingRuleV1Conditions</a>

---


### WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_alarm_masking_rule_v1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference;

new WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

---



