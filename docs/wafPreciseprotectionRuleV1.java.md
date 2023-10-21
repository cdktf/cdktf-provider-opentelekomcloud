# `opentelekomcloud_waf_preciseprotection_rule_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_waf_preciseprotection_rule_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1).

# `wafPreciseprotectionRuleV1` Submodule <a name="`wafPreciseprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPreciseprotectionRuleV1 <a name="WafPreciseprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1 opentelekomcloud_waf_preciseprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1;

WafPreciseprotectionRuleV1.Builder.create(Construct scope, java.lang.String id)
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
    .actionCategory(java.lang.String)
    .conditions(IResolvable)
    .conditions(java.util.List<WafPreciseprotectionRuleV1Conditions>)
    .name(java.lang.String)
    .policyId(java.lang.String)
//  .end(java.lang.String)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .start(java.lang.String)
//  .time(java.lang.Boolean)
//  .time(IResolvable)
//  .timeouts(WafPreciseprotectionRuleV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.actionCategory">actionCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.time">time</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.actionCategory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#conditions WafPreciseprotectionRuleV1#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}.

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.end"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.start"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.time"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#timeouts WafPreciseprotectionRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime">resetTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<WafPreciseprotectionRuleV1Conditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts"></a>

```java
public void putTimeouts(WafPreciseprotectionRuleV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId"></a>

```java
public void resetId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart"></a>

```java
public void resetStart()
```

##### `resetTime` <a name="resetTime" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime"></a>

```java
public void resetTime()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafPreciseprotectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1;

WafPreciseprotectionRuleV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1;

WafPreciseprotectionRuleV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1;

WafPreciseprotectionRuleV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1;

WafPreciseprotectionRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WafPreciseprotectionRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WafPreciseprotectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WafPreciseprotectionRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WafPreciseprotectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WafPreciseprotectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput">actionCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput">timeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory">actionCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time">time</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions"></a>

```java
public WafPreciseprotectionRuleV1ConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts"></a>

```java
public WafPreciseprotectionRuleV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a>

---

##### `actionCategoryInput`<sup>Optional</sup> <a name="actionCategoryInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput"></a>

```java
public java.lang.String getActionCategoryInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>>

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput"></a>

```java
public java.lang.Object getTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory"></a>

```java
public java.lang.String getActionCategory();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time"></a>

```java
public java.lang.Object getTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafPreciseprotectionRuleV1Conditions <a name="WafPreciseprotectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1Conditions;

WafPreciseprotectionRuleV1Conditions.builder()
    .category(java.lang.String)
    .contents(java.util.List<java.lang.String>)
    .logic(java.lang.String)
//  .index(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic">logic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index">index</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}.

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}.

---

##### `logic`<sup>Required</sup> <a name="logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic"></a>

```java
public java.lang.String getLogic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}.

---

### WafPreciseprotectionRuleV1Config <a name="WafPreciseprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1Config;

WafPreciseprotectionRuleV1Config.builder()
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
    .actionCategory(java.lang.String)
    .conditions(IResolvable)
    .conditions(java.util.List<WafPreciseprotectionRuleV1Conditions>)
    .name(java.lang.String)
    .policyId(java.lang.String)
//  .end(java.lang.String)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .start(java.lang.String)
//  .time(java.lang.Boolean)
//  .time(IResolvable)
//  .timeouts(WafPreciseprotectionRuleV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory">actionCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time">time</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory"></a>

```java
public java.lang.String getActionCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#conditions WafPreciseprotectionRuleV1#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}.

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time"></a>

```java
public java.lang.Object getTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts"></a>

```java
public WafPreciseprotectionRuleV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#timeouts WafPreciseprotectionRuleV1#timeouts}

---

### WafPreciseprotectionRuleV1Timeouts <a name="WafPreciseprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1Timeouts;

WafPreciseprotectionRuleV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPreciseprotectionRuleV1ConditionsList <a name="WafPreciseprotectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1ConditionsList;

new WafPreciseprotectionRuleV1ConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get"></a>

```java
public WafPreciseprotectionRuleV1ConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>>

---


### WafPreciseprotectionRuleV1ConditionsOutputReference <a name="WafPreciseprotectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1ConditionsOutputReference;

new WafPreciseprotectionRuleV1ConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex"></a>

```java
public void resetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput">logicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic">logic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```java
public java.util.List<java.lang.String> getContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `logicInput`<sup>Optional</sup> <a name="logicInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput"></a>

```java
public java.lang.String getLogicInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents"></a>

```java
public java.util.List<java.lang.String> getContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `logic`<sup>Required</sup> <a name="logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic"></a>

```java
public java.lang.String getLogic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>

---


### WafPreciseprotectionRuleV1TimeoutsOutputReference <a name="WafPreciseprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.waf_preciseprotection_rule_v1.WafPreciseprotectionRuleV1TimeoutsOutputReference;

new WafPreciseprotectionRuleV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---



