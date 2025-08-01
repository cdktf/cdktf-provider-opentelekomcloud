# `wafDedicatedPreciseProtectionRuleV1` Submodule <a name="`wafDedicatedPreciseProtectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPreciseProtectionRuleV1 <a name="WafDedicatedPreciseProtectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1 opentelekomcloud_waf_dedicated_precise_protection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1;

WafDedicatedPreciseProtectionRuleV1.Builder.create(Construct scope, java.lang.String id)
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
    .action(IResolvable)
    .action(java.util.List<WafDedicatedPreciseProtectionRuleV1Action>)
    .policyId(java.lang.String)
    .priority(java.lang.Number)
    .time(java.lang.Boolean)
    .time(IResolvable)
//  .conditions(IResolvable)
//  .conditions(java.util.List<WafDedicatedPreciseProtectionRuleV1Conditions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .start(java.lang.Number)
//  .terminal(java.lang.Number)
//  .timeouts(WafDedicatedPreciseProtectionRuleV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.time">time</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.start">start</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.terminal">terminal</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#action WafDedicatedPreciseProtectionRuleV1#action}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.time"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#conditions WafDedicatedPreciseProtectionRuleV1#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.start"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}.

---

##### `terminal`<sup>Optional</sup> <a name="terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.terminal"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#timeouts WafDedicatedPreciseProtectionRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTerminal">resetTerminal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<WafDedicatedPreciseProtectionRuleV1Action> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<WafDedicatedPreciseProtectionRuleV1Conditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts"></a>

```java
public void putTimeouts(WafDedicatedPreciseProtectionRuleV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetId"></a>

```java
public void resetId()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetStart"></a>

```java
public void resetStart()
```

##### `resetTerminal` <a name="resetTerminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTerminal"></a>

```java
public void resetTerminal()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedPreciseProtectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1;

WafDedicatedPreciseProtectionRuleV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1;

WafDedicatedPreciseProtectionRuleV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1;

WafDedicatedPreciseProtectionRuleV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1;

WafDedicatedPreciseProtectionRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafDedicatedPreciseProtectionRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WafDedicatedPreciseProtectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafDedicatedPreciseProtectionRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafDedicatedPreciseProtectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedPreciseProtectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList">WafDedicatedPreciseProtectionRuleV1ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList">WafDedicatedPreciseProtectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference">WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminalInput">terminalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeInput">timeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminal">terminal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.time">time</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.action"></a>

```java
public WafDedicatedPreciseProtectionRuleV1ActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList">WafDedicatedPreciseProtectionRuleV1ActionList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditions"></a>

```java
public WafDedicatedPreciseProtectionRuleV1ConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList">WafDedicatedPreciseProtectionRuleV1ConditionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeouts"></a>

```java
public WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference">WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `terminalInput`<sup>Optional</sup> <a name="terminalInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminalInput"></a>

```java
public java.lang.Number getTerminalInput();
```

- *Type:* java.lang.Number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeInput"></a>

```java
public java.lang.Object getTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `terminal`<sup>Required</sup> <a name="terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminal"></a>

```java
public java.lang.Number getTerminal();
```

- *Type:* java.lang.Number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.time"></a>

```java
public java.lang.Object getTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPreciseProtectionRuleV1Action <a name="WafDedicatedPreciseProtectionRuleV1Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1Action;

WafDedicatedPreciseProtectionRuleV1Action.builder()
    .category(java.lang.String)
//  .followedActionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.followedActionId">followedActionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}.

---

##### `followedActionId`<sup>Optional</sup> <a name="followedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.followedActionId"></a>

```java
public java.lang.String getFollowedActionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}.

---

### WafDedicatedPreciseProtectionRuleV1Conditions <a name="WafDedicatedPreciseProtectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1Conditions;

WafDedicatedPreciseProtectionRuleV1Conditions.builder()
//  .category(java.lang.String)
//  .contents(java.util.List<java.lang.String>)
//  .index(java.lang.String)
//  .logicOperation(java.lang.String)
//  .valueListId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.index">index</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.logicOperation">logicOperation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.valueListId">valueListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}.

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}.

---

##### `logicOperation`<sup>Optional</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.logicOperation"></a>

```java
public java.lang.String getLogicOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}.

---

##### `valueListId`<sup>Optional</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.valueListId"></a>

```java
public java.lang.String getValueListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}.

---

### WafDedicatedPreciseProtectionRuleV1Config <a name="WafDedicatedPreciseProtectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1Config;

WafDedicatedPreciseProtectionRuleV1Config.builder()
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
    .action(IResolvable)
    .action(java.util.List<WafDedicatedPreciseProtectionRuleV1Action>)
    .policyId(java.lang.String)
    .priority(java.lang.Number)
    .time(java.lang.Boolean)
    .time(IResolvable)
//  .conditions(IResolvable)
//  .conditions(java.util.List<WafDedicatedPreciseProtectionRuleV1Conditions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .start(java.lang.Number)
//  .terminal(java.lang.Number)
//  .timeouts(WafDedicatedPreciseProtectionRuleV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.time">time</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.start">start</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.terminal">terminal</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#action WafDedicatedPreciseProtectionRuleV1#action}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.time"></a>

```java
public java.lang.Object getTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#conditions WafDedicatedPreciseProtectionRuleV1#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}.

---

##### `terminal`<sup>Optional</sup> <a name="terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.terminal"></a>

```java
public java.lang.Number getTerminal();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.timeouts"></a>

```java
public WafDedicatedPreciseProtectionRuleV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#timeouts WafDedicatedPreciseProtectionRuleV1#timeouts}

---

### WafDedicatedPreciseProtectionRuleV1Timeouts <a name="WafDedicatedPreciseProtectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1Timeouts;

WafDedicatedPreciseProtectionRuleV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPreciseProtectionRuleV1ActionList <a name="WafDedicatedPreciseProtectionRuleV1ActionList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1ActionList;

new WafDedicatedPreciseProtectionRuleV1ActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get"></a>

```java
public WafDedicatedPreciseProtectionRuleV1ActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>>

---


### WafDedicatedPreciseProtectionRuleV1ActionOutputReference <a name="WafDedicatedPreciseProtectionRuleV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference;

new WafDedicatedPreciseProtectionRuleV1ActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resetFollowedActionId">resetFollowedActionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFollowedActionId` <a name="resetFollowedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resetFollowedActionId"></a>

```java
public void resetFollowedActionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionIdInput">followedActionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionId">followedActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `followedActionIdInput`<sup>Optional</sup> <a name="followedActionIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionIdInput"></a>

```java
public java.lang.String getFollowedActionIdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `followedActionId`<sup>Required</sup> <a name="followedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionId"></a>

```java
public java.lang.String getFollowedActionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>

---


### WafDedicatedPreciseProtectionRuleV1ConditionsList <a name="WafDedicatedPreciseProtectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1ConditionsList;

new WafDedicatedPreciseProtectionRuleV1ConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get"></a>

```java
public WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>>

---


### WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference <a name="WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference;

new WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetLogicOperation">resetLogicOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetValueListId">resetValueListId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetContents` <a name="resetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetContents"></a>

```java
public void resetContents()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetIndex"></a>

```java
public void resetIndex()
```

##### `resetLogicOperation` <a name="resetLogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetLogicOperation"></a>

```java
public void resetLogicOperation()
```

##### `resetValueListId` <a name="resetValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetValueListId"></a>

```java
public void resetValueListId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperationInput">logicOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListIdInput">valueListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperation">logicOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListId">valueListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```java
public java.util.List<java.lang.String> getContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `logicOperationInput`<sup>Optional</sup> <a name="logicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```java
public java.lang.String getLogicOperationInput();
```

- *Type:* java.lang.String

---

##### `valueListIdInput`<sup>Optional</sup> <a name="valueListIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListIdInput"></a>

```java
public java.lang.String getValueListIdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperation"></a>

```java
public java.lang.String getLogicOperation();
```

- *Type:* java.lang.String

---

##### `valueListId`<sup>Required</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListId"></a>

```java
public java.lang.String getValueListId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>

---


### WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference <a name="WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_dedicated_precise_protection_rule_v1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference;

new WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---



