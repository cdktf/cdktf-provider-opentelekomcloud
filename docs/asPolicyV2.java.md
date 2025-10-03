# `asPolicyV2` Submodule <a name="`asPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.asPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsPolicyV2 <a name="AsPolicyV2" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2 opentelekomcloud_as_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2;

AsPolicyV2.Builder.create(Construct scope, java.lang.String id)
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
    .scalingPolicyName(java.lang.String)
    .scalingPolicyType(java.lang.String)
    .scalingResourceId(java.lang.String)
    .scalingResourceType(java.lang.String)
//  .alarmId(java.lang.String)
//  .coolDownTime(java.lang.Number)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .scalingPolicyAction(IResolvable)
//  .scalingPolicyAction(java.util.List<AsPolicyV2ScalingPolicyAction>)
//  .scheduledPolicy(IResolvable)
//  .scheduledPolicy(java.util.List<AsPolicyV2ScheduledPolicy>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyName">scalingPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyType">scalingPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceId">scalingResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceType">scalingResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.alarmId">alarmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.coolDownTime">coolDownTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#id AsPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#region AsPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyAction">scalingPolicyAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>></code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scheduledPolicy">scheduledPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>></code> | scheduled_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scalingPolicyName`<sup>Required</sup> <a name="scalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}.

---

##### `scalingPolicyType`<sup>Required</sup> <a name="scalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}.

---

##### `scalingResourceId`<sup>Required</sup> <a name="scalingResourceId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}.

---

##### `scalingResourceType`<sup>Required</sup> <a name="scalingResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}.

---

##### `alarmId`<sup>Optional</sup> <a name="alarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.alarmId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}.

---

##### `coolDownTime`<sup>Optional</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.coolDownTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#id AsPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#region AsPolicyV2#region}.

---

##### `scalingPolicyAction`<sup>Optional</sup> <a name="scalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scalingPolicyAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>>

scaling_policy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_action AsPolicyV2#scaling_policy_action}

---

##### `scheduledPolicy`<sup>Optional</sup> <a name="scheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scheduledPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>>

scheduled_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scheduled_policy AsPolicyV2#scheduled_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction">putScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy">putScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetAlarmId">resetAlarmId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetCoolDownTime">resetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScalingPolicyAction">resetScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScheduledPolicy">resetScheduledPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScalingPolicyAction` <a name="putScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction"></a>

```java
public void putScalingPolicyAction(IResolvable OR java.util.List<AsPolicyV2ScalingPolicyAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>>

---

##### `putScheduledPolicy` <a name="putScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy"></a>

```java
public void putScheduledPolicy(IResolvable OR java.util.List<AsPolicyV2ScheduledPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>>

---

##### `resetAlarmId` <a name="resetAlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetAlarmId"></a>

```java
public void resetAlarmId()
```

##### `resetCoolDownTime` <a name="resetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetCoolDownTime"></a>

```java
public void resetCoolDownTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScalingPolicyAction` <a name="resetScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScalingPolicyAction"></a>

```java
public void resetScalingPolicyAction()
```

##### `resetScheduledPolicy` <a name="resetScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScheduledPolicy"></a>

```java
public void resetScheduledPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AsPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2;

AsPolicyV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2;

AsPolicyV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2;

AsPolicyV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2;

AsPolicyV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AsPolicyV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AsPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AsPolicyV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AsPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AsPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList">AsPolicyV2MetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyAction">scalingPolicyAction</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList">AsPolicyV2ScalingPolicyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicy">scheduledPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList">AsPolicyV2ScheduledPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmIdInput">alarmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTimeInput">coolDownTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyActionInput">scalingPolicyActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyNameInput">scalingPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyTypeInput">scalingPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceIdInput">scalingResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceTypeInput">scalingResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicyInput">scheduledPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTime">coolDownTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyName">scalingPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyType">scalingPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceId">scalingResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceType">scalingResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.metadata"></a>

```java
public AsPolicyV2MetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList">AsPolicyV2MetadataList</a>

---

##### `scalingPolicyAction`<sup>Required</sup> <a name="scalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyAction"></a>

```java
public AsPolicyV2ScalingPolicyActionList getScalingPolicyAction();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList">AsPolicyV2ScalingPolicyActionList</a>

---

##### `scheduledPolicy`<sup>Required</sup> <a name="scheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicy"></a>

```java
public AsPolicyV2ScheduledPolicyList getScheduledPolicy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList">AsPolicyV2ScheduledPolicyList</a>

---

##### `alarmIdInput`<sup>Optional</sup> <a name="alarmIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmIdInput"></a>

```java
public java.lang.String getAlarmIdInput();
```

- *Type:* java.lang.String

---

##### `coolDownTimeInput`<sup>Optional</sup> <a name="coolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTimeInput"></a>

```java
public java.lang.Number getCoolDownTimeInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scalingPolicyActionInput`<sup>Optional</sup> <a name="scalingPolicyActionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyActionInput"></a>

```java
public java.lang.Object getScalingPolicyActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>>

---

##### `scalingPolicyNameInput`<sup>Optional</sup> <a name="scalingPolicyNameInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyNameInput"></a>

```java
public java.lang.String getScalingPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `scalingPolicyTypeInput`<sup>Optional</sup> <a name="scalingPolicyTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyTypeInput"></a>

```java
public java.lang.String getScalingPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `scalingResourceIdInput`<sup>Optional</sup> <a name="scalingResourceIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceIdInput"></a>

```java
public java.lang.String getScalingResourceIdInput();
```

- *Type:* java.lang.String

---

##### `scalingResourceTypeInput`<sup>Optional</sup> <a name="scalingResourceTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceTypeInput"></a>

```java
public java.lang.String getScalingResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `scheduledPolicyInput`<sup>Optional</sup> <a name="scheduledPolicyInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicyInput"></a>

```java
public java.lang.Object getScheduledPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>>

---

##### `alarmId`<sup>Required</sup> <a name="alarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

---

##### `coolDownTime`<sup>Required</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTime"></a>

```java
public java.lang.Number getCoolDownTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scalingPolicyName`<sup>Required</sup> <a name="scalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyName"></a>

```java
public java.lang.String getScalingPolicyName();
```

- *Type:* java.lang.String

---

##### `scalingPolicyType`<sup>Required</sup> <a name="scalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyType"></a>

```java
public java.lang.String getScalingPolicyType();
```

- *Type:* java.lang.String

---

##### `scalingResourceId`<sup>Required</sup> <a name="scalingResourceId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceId"></a>

```java
public java.lang.String getScalingResourceId();
```

- *Type:* java.lang.String

---

##### `scalingResourceType`<sup>Required</sup> <a name="scalingResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceType"></a>

```java
public java.lang.String getScalingResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AsPolicyV2Config <a name="AsPolicyV2Config" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2Config;

AsPolicyV2Config.builder()
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
    .scalingPolicyName(java.lang.String)
    .scalingPolicyType(java.lang.String)
    .scalingResourceId(java.lang.String)
    .scalingResourceType(java.lang.String)
//  .alarmId(java.lang.String)
//  .coolDownTime(java.lang.Number)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .scalingPolicyAction(IResolvable)
//  .scalingPolicyAction(java.util.List<AsPolicyV2ScalingPolicyAction>)
//  .scheduledPolicy(IResolvable)
//  .scheduledPolicy(java.util.List<AsPolicyV2ScheduledPolicy>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyName">scalingPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyType">scalingPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceId">scalingResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceType">scalingResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.coolDownTime">coolDownTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#id AsPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#region AsPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyAction">scalingPolicyAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>></code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scheduledPolicy">scheduledPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>></code> | scheduled_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scalingPolicyName`<sup>Required</sup> <a name="scalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyName"></a>

```java
public java.lang.String getScalingPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}.

---

##### `scalingPolicyType`<sup>Required</sup> <a name="scalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyType"></a>

```java
public java.lang.String getScalingPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}.

---

##### `scalingResourceId`<sup>Required</sup> <a name="scalingResourceId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceId"></a>

```java
public java.lang.String getScalingResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}.

---

##### `scalingResourceType`<sup>Required</sup> <a name="scalingResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceType"></a>

```java
public java.lang.String getScalingResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}.

---

##### `alarmId`<sup>Optional</sup> <a name="alarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}.

---

##### `coolDownTime`<sup>Optional</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.coolDownTime"></a>

```java
public java.lang.Number getCoolDownTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#id AsPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#region AsPolicyV2#region}.

---

##### `scalingPolicyAction`<sup>Optional</sup> <a name="scalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyAction"></a>

```java
public java.lang.Object getScalingPolicyAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>>

scaling_policy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scaling_policy_action AsPolicyV2#scaling_policy_action}

---

##### `scheduledPolicy`<sup>Optional</sup> <a name="scheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scheduledPolicy"></a>

```java
public java.lang.Object getScheduledPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>>

scheduled_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#scheduled_policy AsPolicyV2#scheduled_policy}

---

### AsPolicyV2Metadata <a name="AsPolicyV2Metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2Metadata;

AsPolicyV2Metadata.builder()
    .build();
```


### AsPolicyV2ScalingPolicyAction <a name="AsPolicyV2ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2ScalingPolicyAction;

AsPolicyV2ScalingPolicyAction.builder()
//  .limits(java.lang.Number)
//  .operation(java.lang.String)
//  .percentage(java.lang.Number)
//  .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.limits">limits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#limits AsPolicyV2#limits}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#operation AsPolicyV2#operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#percentage AsPolicyV2#percentage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#size AsPolicyV2#size}. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.limits"></a>

```java
public java.lang.Number getLimits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#limits AsPolicyV2#limits}.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#operation AsPolicyV2#operation}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#percentage AsPolicyV2#percentage}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#size AsPolicyV2#size}.

---

### AsPolicyV2ScheduledPolicy <a name="AsPolicyV2ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2ScheduledPolicy;

AsPolicyV2ScheduledPolicy.builder()
    .launchTime(java.lang.String)
//  .endTime(java.lang.String)
//  .recurrenceType(java.lang.String)
//  .recurrenceValue(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.launchTime">launchTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#launch_time AsPolicyV2#launch_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#end_time AsPolicyV2#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceValue">recurrenceValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#start_time AsPolicyV2#start_time}. |

---

##### `launchTime`<sup>Required</sup> <a name="launchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.launchTime"></a>

```java
public java.lang.String getLaunchTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#launch_time AsPolicyV2#launch_time}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#end_time AsPolicyV2#end_time}.

---

##### `recurrenceType`<sup>Optional</sup> <a name="recurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}.

---

##### `recurrenceValue`<sup>Optional</sup> <a name="recurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceValue"></a>

```java
public java.lang.String getRecurrenceValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/as_policy_v2#start_time AsPolicyV2#start_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsPolicyV2MetadataList <a name="AsPolicyV2MetadataList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2MetadataList;

new AsPolicyV2MetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get"></a>

```java
public AsPolicyV2MetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AsPolicyV2MetadataOutputReference <a name="AsPolicyV2MetadataOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2MetadataOutputReference;

new AsPolicyV2MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.bandwidthShareType">bandwidthShareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipAddress">eipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipId">eipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata">AsPolicyV2Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidthShareType`<sup>Required</sup> <a name="bandwidthShareType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.bandwidthShareType"></a>

```java
public java.lang.String getBandwidthShareType();
```

- *Type:* java.lang.String

---

##### `eipAddress`<sup>Required</sup> <a name="eipAddress" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipAddress"></a>

```java
public java.lang.String getEipAddress();
```

- *Type:* java.lang.String

---

##### `eipId`<sup>Required</sup> <a name="eipId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipId"></a>

```java
public java.lang.String getEipId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.internalValue"></a>

```java
public AsPolicyV2Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata">AsPolicyV2Metadata</a>

---


### AsPolicyV2ScalingPolicyActionList <a name="AsPolicyV2ScalingPolicyActionList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2ScalingPolicyActionList;

new AsPolicyV2ScalingPolicyActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get"></a>

```java
public AsPolicyV2ScalingPolicyActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>>

---


### AsPolicyV2ScalingPolicyActionOutputReference <a name="AsPolicyV2ScalingPolicyActionOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2ScalingPolicyActionOutputReference;

new AsPolicyV2ScalingPolicyActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetOperation"></a>

```java
public void resetOperation()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetSize"></a>

```java
public void resetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limitsInput">limitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limits">limits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limitsInput"></a>

```java
public java.lang.Number getLimitsInput();
```

- *Type:* java.lang.Number

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limits"></a>

```java
public java.lang.Number getLimits();
```

- *Type:* java.lang.Number

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>

---


### AsPolicyV2ScheduledPolicyList <a name="AsPolicyV2ScheduledPolicyList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2ScheduledPolicyList;

new AsPolicyV2ScheduledPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get"></a>

```java
public AsPolicyV2ScheduledPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>>

---


### AsPolicyV2ScheduledPolicyOutputReference <a name="AsPolicyV2ScheduledPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_policy_v2.AsPolicyV2ScheduledPolicyOutputReference;

new AsPolicyV2ScheduledPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceType">resetRecurrenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceValue">resetRecurrenceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetRecurrenceType` <a name="resetRecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceType"></a>

```java
public void resetRecurrenceType()
```

##### `resetRecurrenceValue` <a name="resetRecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceValue"></a>

```java
public void resetRecurrenceValue()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTimeInput">launchTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValueInput">recurrenceValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTime">launchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValue">recurrenceValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `launchTimeInput`<sup>Optional</sup> <a name="launchTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTimeInput"></a>

```java
public java.lang.String getLaunchTimeInput();
```

- *Type:* java.lang.String

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceTypeInput"></a>

```java
public java.lang.String getRecurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `recurrenceValueInput`<sup>Optional</sup> <a name="recurrenceValueInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValueInput"></a>

```java
public java.lang.String getRecurrenceValueInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `launchTime`<sup>Required</sup> <a name="launchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTime"></a>

```java
public java.lang.String getLaunchTime();
```

- *Type:* java.lang.String

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

---

##### `recurrenceValue`<sup>Required</sup> <a name="recurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValue"></a>

```java
public java.lang.String getRecurrenceValue();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>

---



