# `ltsKeywordsAlarmRuleV2` Submodule <a name="`ltsKeywordsAlarmRuleV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsKeywordsAlarmRuleV2 <a name="LtsKeywordsAlarmRuleV2" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2 opentelekomcloud_lts_keywords_alarm_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2(Construct Scope, string Id, LtsKeywordsAlarmRuleV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config">LtsKeywordsAlarmRuleV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config">LtsKeywordsAlarmRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putFrequency">PutFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putKeywordsRequests">PutKeywordsRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putNotificationRule">PutNotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetAlarmActionRuleName">ResetAlarmActionRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetNotificationRule">ResetNotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetRecoveryPolicy">ResetRecoveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetSendNotifications">ResetSendNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetSendRecoveryNotifications">ResetSendRecoveryNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetTriggerConditionCount">ResetTriggerConditionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetTriggerConditionFrequency">ResetTriggerConditionFrequency</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFrequency` <a name="PutFrequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putFrequency"></a>

```csharp
private void PutFrequency(LtsKeywordsAlarmRuleV2Frequency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a>

---

##### `PutKeywordsRequests` <a name="PutKeywordsRequests" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putKeywordsRequests"></a>

```csharp
private void PutKeywordsRequests(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putKeywordsRequests.parameter.value"></a>

- *Type:* object

---

##### `PutNotificationRule` <a name="PutNotificationRule" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putNotificationRule"></a>

```csharp
private void PutNotificationRule(LtsKeywordsAlarmRuleV2NotificationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.putNotificationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a>

---

##### `ResetAlarmActionRuleName` <a name="ResetAlarmActionRuleName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetAlarmActionRuleName"></a>

```csharp
private void ResetAlarmActionRuleName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationRule` <a name="ResetNotificationRule" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetNotificationRule"></a>

```csharp
private void ResetNotificationRule()
```

##### `ResetRecoveryPolicy` <a name="ResetRecoveryPolicy" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetRecoveryPolicy"></a>

```csharp
private void ResetRecoveryPolicy()
```

##### `ResetSendNotifications` <a name="ResetSendNotifications" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetSendNotifications"></a>

```csharp
private void ResetSendNotifications()
```

##### `ResetSendRecoveryNotifications` <a name="ResetSendRecoveryNotifications" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetSendRecoveryNotifications"></a>

```csharp
private void ResetSendRecoveryNotifications()
```

##### `ResetTriggerConditionCount` <a name="ResetTriggerConditionCount" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetTriggerConditionCount"></a>

```csharp
private void ResetTriggerConditionCount()
```

##### `ResetTriggerConditionFrequency` <a name="ResetTriggerConditionFrequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.resetTriggerConditionFrequency"></a>

```csharp
private void ResetTriggerConditionFrequency()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsKeywordsAlarmRuleV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsKeywordsAlarmRuleV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsKeywordsAlarmRuleV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsKeywordsAlarmRuleV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsKeywordsAlarmRuleV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LtsKeywordsAlarmRuleV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LtsKeywordsAlarmRuleV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LtsKeywordsAlarmRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LtsKeywordsAlarmRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.frequency">Frequency</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference">LtsKeywordsAlarmRuleV2FrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.keywordsRequests">KeywordsRequests</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList">LtsKeywordsAlarmRuleV2KeywordsRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationRule">NotificationRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference">LtsKeywordsAlarmRuleV2NotificationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.alarmActionRuleNameInput">AlarmActionRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.frequencyInput">FrequencyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.keywordsRequestsInput">KeywordsRequestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationFrequencyInput">NotificationFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationRuleInput">NotificationRuleInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.recoveryPolicyInput">RecoveryPolicyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendNotificationsInput">SendNotificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendRecoveryNotificationsInput">SendRecoveryNotificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionCountInput">TriggerConditionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionFrequencyInput">TriggerConditionFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.alarmActionRuleName">AlarmActionRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationFrequency">NotificationFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.recoveryPolicy">RecoveryPolicy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendNotifications">SendNotifications</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendRecoveryNotifications">SendRecoveryNotifications</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionCount">TriggerConditionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionFrequency">TriggerConditionFrequency</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.frequency"></a>

```csharp
public LtsKeywordsAlarmRuleV2FrequencyOutputReference Frequency { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference">LtsKeywordsAlarmRuleV2FrequencyOutputReference</a>

---

##### `KeywordsRequests`<sup>Required</sup> <a name="KeywordsRequests" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.keywordsRequests"></a>

```csharp
public LtsKeywordsAlarmRuleV2KeywordsRequestsList KeywordsRequests { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList">LtsKeywordsAlarmRuleV2KeywordsRequestsList</a>

---

##### `NotificationRule`<sup>Required</sup> <a name="NotificationRule" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationRule"></a>

```csharp
public LtsKeywordsAlarmRuleV2NotificationRuleOutputReference NotificationRule { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference">LtsKeywordsAlarmRuleV2NotificationRuleOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AlarmActionRuleNameInput`<sup>Optional</sup> <a name="AlarmActionRuleNameInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.alarmActionRuleNameInput"></a>

```csharp
public string AlarmActionRuleNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.frequencyInput"></a>

```csharp
public LtsKeywordsAlarmRuleV2Frequency FrequencyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeywordsRequestsInput`<sup>Optional</sup> <a name="KeywordsRequestsInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.keywordsRequestsInput"></a>

```csharp
public object KeywordsRequestsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationFrequencyInput`<sup>Optional</sup> <a name="NotificationFrequencyInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationFrequencyInput"></a>

```csharp
public double NotificationFrequencyInput { get; }
```

- *Type:* double

---

##### `NotificationRuleInput`<sup>Optional</sup> <a name="NotificationRuleInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationRuleInput"></a>

```csharp
public LtsKeywordsAlarmRuleV2NotificationRule NotificationRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a>

---

##### `RecoveryPolicyInput`<sup>Optional</sup> <a name="RecoveryPolicyInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.recoveryPolicyInput"></a>

```csharp
public double RecoveryPolicyInput { get; }
```

- *Type:* double

---

##### `SendNotificationsInput`<sup>Optional</sup> <a name="SendNotificationsInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendNotificationsInput"></a>

```csharp
public object SendNotificationsInput { get; }
```

- *Type:* object

---

##### `SendRecoveryNotificationsInput`<sup>Optional</sup> <a name="SendRecoveryNotificationsInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendRecoveryNotificationsInput"></a>

```csharp
public object SendRecoveryNotificationsInput { get; }
```

- *Type:* object

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TriggerConditionCountInput`<sup>Optional</sup> <a name="TriggerConditionCountInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionCountInput"></a>

```csharp
public double TriggerConditionCountInput { get; }
```

- *Type:* double

---

##### `TriggerConditionFrequencyInput`<sup>Optional</sup> <a name="TriggerConditionFrequencyInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionFrequencyInput"></a>

```csharp
public double TriggerConditionFrequencyInput { get; }
```

- *Type:* double

---

##### `AlarmActionRuleName`<sup>Required</sup> <a name="AlarmActionRuleName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.alarmActionRuleName"></a>

```csharp
public string AlarmActionRuleName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationFrequency`<sup>Required</sup> <a name="NotificationFrequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.notificationFrequency"></a>

```csharp
public double NotificationFrequency { get; }
```

- *Type:* double

---

##### `RecoveryPolicy`<sup>Required</sup> <a name="RecoveryPolicy" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.recoveryPolicy"></a>

```csharp
public double RecoveryPolicy { get; }
```

- *Type:* double

---

##### `SendNotifications`<sup>Required</sup> <a name="SendNotifications" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendNotifications"></a>

```csharp
public object SendNotifications { get; }
```

- *Type:* object

---

##### `SendRecoveryNotifications`<sup>Required</sup> <a name="SendRecoveryNotifications" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.sendRecoveryNotifications"></a>

```csharp
public object SendRecoveryNotifications { get; }
```

- *Type:* object

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `TriggerConditionCount`<sup>Required</sup> <a name="TriggerConditionCount" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionCount"></a>

```csharp
public double TriggerConditionCount { get; }
```

- *Type:* double

---

##### `TriggerConditionFrequency`<sup>Required</sup> <a name="TriggerConditionFrequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.triggerConditionFrequency"></a>

```csharp
public double TriggerConditionFrequency { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsKeywordsAlarmRuleV2Config <a name="LtsKeywordsAlarmRuleV2Config" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    LtsKeywordsAlarmRuleV2Frequency Frequency,
    object KeywordsRequests,
    string Name,
    double NotificationFrequency,
    string Severity,
    string AlarmActionRuleName = null,
    string Description = null,
    string Id = null,
    LtsKeywordsAlarmRuleV2NotificationRule NotificationRule = null,
    double RecoveryPolicy = null,
    object SendNotifications = null,
    object SendRecoveryNotifications = null,
    double TriggerConditionCount = null,
    double TriggerConditionFrequency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.frequency">Frequency</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.keywordsRequests">KeywordsRequests</a></code> | <code>object</code> | keywords_requests block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#name LtsKeywordsAlarmRuleV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.notificationFrequency">NotificationFrequency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#notification_frequency LtsKeywordsAlarmRuleV2#notification_frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#severity LtsKeywordsAlarmRuleV2#severity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.alarmActionRuleName">AlarmActionRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#alarm_action_rule_name LtsKeywordsAlarmRuleV2#alarm_action_rule_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#description LtsKeywordsAlarmRuleV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#id LtsKeywordsAlarmRuleV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.notificationRule">NotificationRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a></code> | notification_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.recoveryPolicy">RecoveryPolicy</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#recovery_policy LtsKeywordsAlarmRuleV2#recovery_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.sendNotifications">SendNotifications</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#send_notifications LtsKeywordsAlarmRuleV2#send_notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.sendRecoveryNotifications">SendRecoveryNotifications</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#send_recovery_notifications LtsKeywordsAlarmRuleV2#send_recovery_notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.triggerConditionCount">TriggerConditionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#trigger_condition_count LtsKeywordsAlarmRuleV2#trigger_condition_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.triggerConditionFrequency">TriggerConditionFrequency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#trigger_condition_frequency LtsKeywordsAlarmRuleV2#trigger_condition_frequency}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.frequency"></a>

```csharp
public LtsKeywordsAlarmRuleV2Frequency Frequency { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#frequency LtsKeywordsAlarmRuleV2#frequency}

---

##### `KeywordsRequests`<sup>Required</sup> <a name="KeywordsRequests" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.keywordsRequests"></a>

```csharp
public object KeywordsRequests { get; set; }
```

- *Type:* object

keywords_requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#keywords_requests LtsKeywordsAlarmRuleV2#keywords_requests}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#name LtsKeywordsAlarmRuleV2#name}.

---

##### `NotificationFrequency`<sup>Required</sup> <a name="NotificationFrequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.notificationFrequency"></a>

```csharp
public double NotificationFrequency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#notification_frequency LtsKeywordsAlarmRuleV2#notification_frequency}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#severity LtsKeywordsAlarmRuleV2#severity}.

---

##### `AlarmActionRuleName`<sup>Optional</sup> <a name="AlarmActionRuleName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.alarmActionRuleName"></a>

```csharp
public string AlarmActionRuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#alarm_action_rule_name LtsKeywordsAlarmRuleV2#alarm_action_rule_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#description LtsKeywordsAlarmRuleV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#id LtsKeywordsAlarmRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationRule`<sup>Optional</sup> <a name="NotificationRule" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.notificationRule"></a>

```csharp
public LtsKeywordsAlarmRuleV2NotificationRule NotificationRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a>

notification_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#notification_rule LtsKeywordsAlarmRuleV2#notification_rule}

---

##### `RecoveryPolicy`<sup>Optional</sup> <a name="RecoveryPolicy" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.recoveryPolicy"></a>

```csharp
public double RecoveryPolicy { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#recovery_policy LtsKeywordsAlarmRuleV2#recovery_policy}.

---

##### `SendNotifications`<sup>Optional</sup> <a name="SendNotifications" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.sendNotifications"></a>

```csharp
public object SendNotifications { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#send_notifications LtsKeywordsAlarmRuleV2#send_notifications}.

---

##### `SendRecoveryNotifications`<sup>Optional</sup> <a name="SendRecoveryNotifications" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.sendRecoveryNotifications"></a>

```csharp
public object SendRecoveryNotifications { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#send_recovery_notifications LtsKeywordsAlarmRuleV2#send_recovery_notifications}.

---

##### `TriggerConditionCount`<sup>Optional</sup> <a name="TriggerConditionCount" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.triggerConditionCount"></a>

```csharp
public double TriggerConditionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#trigger_condition_count LtsKeywordsAlarmRuleV2#trigger_condition_count}.

---

##### `TriggerConditionFrequency`<sup>Optional</sup> <a name="TriggerConditionFrequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Config.property.triggerConditionFrequency"></a>

```csharp
public double TriggerConditionFrequency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#trigger_condition_frequency LtsKeywordsAlarmRuleV2#trigger_condition_frequency}.

---

### LtsKeywordsAlarmRuleV2Frequency <a name="LtsKeywordsAlarmRuleV2Frequency" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2Frequency {
    string Type,
    string CronExpression = null,
    double DayOfWeek = null,
    double FixedRate = null,
    string FixedRateUnit = null,
    double HourOfDay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#type LtsKeywordsAlarmRuleV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#cron_expression LtsKeywordsAlarmRuleV2#cron_expression}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#day_of_week LtsKeywordsAlarmRuleV2#day_of_week}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.fixedRate">FixedRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#fixed_rate LtsKeywordsAlarmRuleV2#fixed_rate}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.fixedRateUnit">FixedRateUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#fixed_rate_unit LtsKeywordsAlarmRuleV2#fixed_rate_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#hour_of_day LtsKeywordsAlarmRuleV2#hour_of_day}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#type LtsKeywordsAlarmRuleV2#type}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#cron_expression LtsKeywordsAlarmRuleV2#cron_expression}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#day_of_week LtsKeywordsAlarmRuleV2#day_of_week}.

---

##### `FixedRate`<sup>Optional</sup> <a name="FixedRate" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.fixedRate"></a>

```csharp
public double FixedRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#fixed_rate LtsKeywordsAlarmRuleV2#fixed_rate}.

---

##### `FixedRateUnit`<sup>Optional</sup> <a name="FixedRateUnit" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.fixedRateUnit"></a>

```csharp
public string FixedRateUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#fixed_rate_unit LtsKeywordsAlarmRuleV2#fixed_rate_unit}.

---

##### `HourOfDay`<sup>Optional</sup> <a name="HourOfDay" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#hour_of_day LtsKeywordsAlarmRuleV2#hour_of_day}.

---

### LtsKeywordsAlarmRuleV2KeywordsRequests <a name="LtsKeywordsAlarmRuleV2KeywordsRequests" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2KeywordsRequests {
    string Condition,
    string Keyword,
    string LogGroupId,
    string LogStreamId,
    double Number,
    double SearchTimeRange,
    string SearchTimeRangeUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#condition LtsKeywordsAlarmRuleV2#condition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.keyword">Keyword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#keyword LtsKeywordsAlarmRuleV2#keyword}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#log_group_id LtsKeywordsAlarmRuleV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.logStreamId">LogStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#log_stream_id LtsKeywordsAlarmRuleV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.number">Number</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#number LtsKeywordsAlarmRuleV2#number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.searchTimeRange">SearchTimeRange</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#search_time_range LtsKeywordsAlarmRuleV2#search_time_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.searchTimeRangeUnit">SearchTimeRangeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#search_time_range_unit LtsKeywordsAlarmRuleV2#search_time_range_unit}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#condition LtsKeywordsAlarmRuleV2#condition}.

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.keyword"></a>

```csharp
public string Keyword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#keyword LtsKeywordsAlarmRuleV2#keyword}.

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#log_group_id LtsKeywordsAlarmRuleV2#log_group_id}.

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.logStreamId"></a>

```csharp
public string LogStreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#log_stream_id LtsKeywordsAlarmRuleV2#log_stream_id}.

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.number"></a>

```csharp
public double Number { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#number LtsKeywordsAlarmRuleV2#number}.

---

##### `SearchTimeRange`<sup>Required</sup> <a name="SearchTimeRange" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.searchTimeRange"></a>

```csharp
public double SearchTimeRange { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#search_time_range LtsKeywordsAlarmRuleV2#search_time_range}.

---

##### `SearchTimeRangeUnit`<sup>Required</sup> <a name="SearchTimeRangeUnit" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequests.property.searchTimeRangeUnit"></a>

```csharp
public string SearchTimeRangeUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#search_time_range_unit LtsKeywordsAlarmRuleV2#search_time_range_unit}.

---

### LtsKeywordsAlarmRuleV2NotificationRule <a name="LtsKeywordsAlarmRuleV2NotificationRule" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2NotificationRule {
    object Topics,
    string UserName,
    string Language = null,
    string TemplateName = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.topics">Topics</a></code> | <code>object</code> | topics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#user_name LtsKeywordsAlarmRuleV2#user_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#language LtsKeywordsAlarmRuleV2#language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.templateName">TemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#template_name LtsKeywordsAlarmRuleV2#template_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#timezone LtsKeywordsAlarmRuleV2#timezone}. |

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.topics"></a>

```csharp
public object Topics { get; set; }
```

- *Type:* object

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#topics LtsKeywordsAlarmRuleV2#topics}

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#user_name LtsKeywordsAlarmRuleV2#user_name}.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#language LtsKeywordsAlarmRuleV2#language}.

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#template_name LtsKeywordsAlarmRuleV2#template_name}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#timezone LtsKeywordsAlarmRuleV2#timezone}.

---

### LtsKeywordsAlarmRuleV2NotificationRuleTopics <a name="LtsKeywordsAlarmRuleV2NotificationRuleTopics" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2NotificationRuleTopics {
    string Name,
    string TopicUrn,
    string DisplayName = null,
    double PushPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#name LtsKeywordsAlarmRuleV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.topicUrn">TopicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#topic_urn LtsKeywordsAlarmRuleV2#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#display_name LtsKeywordsAlarmRuleV2#display_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.pushPolicy">PushPolicy</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#push_policy LtsKeywordsAlarmRuleV2#push_policy}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#name LtsKeywordsAlarmRuleV2#name}.

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.topicUrn"></a>

```csharp
public string TopicUrn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#topic_urn LtsKeywordsAlarmRuleV2#topic_urn}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#display_name LtsKeywordsAlarmRuleV2#display_name}.

---

##### `PushPolicy`<sup>Optional</sup> <a name="PushPolicy" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopics.property.pushPolicy"></a>

```csharp
public double PushPolicy { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_keywords_alarm_rule_v2#push_policy LtsKeywordsAlarmRuleV2#push_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsKeywordsAlarmRuleV2FrequencyOutputReference <a name="LtsKeywordsAlarmRuleV2FrequencyOutputReference" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2FrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetFixedRate">ResetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetFixedRateUnit">ResetFixedRateUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetHourOfDay">ResetHourOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetFixedRate` <a name="ResetFixedRate" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetFixedRate"></a>

```csharp
private void ResetFixedRate()
```

##### `ResetFixedRateUnit` <a name="ResetFixedRateUnit" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetFixedRateUnit"></a>

```csharp
private void ResetFixedRateUnit()
```

##### `ResetHourOfDay` <a name="ResetHourOfDay" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.resetHourOfDay"></a>

```csharp
private void ResetHourOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRateInput">FixedRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRateUnitInput">FixedRateUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRateUnit">FixedRateUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.dayOfWeekInput"></a>

```csharp
public double DayOfWeekInput { get; }
```

- *Type:* double

---

##### `FixedRateInput`<sup>Optional</sup> <a name="FixedRateInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRateInput"></a>

```csharp
public double FixedRateInput { get; }
```

- *Type:* double

---

##### `FixedRateUnitInput`<sup>Optional</sup> <a name="FixedRateUnitInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRateUnitInput"></a>

```csharp
public string FixedRateUnitInput { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.dayOfWeek"></a>

```csharp
public double DayOfWeek { get; }
```

- *Type:* double

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `FixedRateUnit`<sup>Required</sup> <a name="FixedRateUnit" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.fixedRateUnit"></a>

```csharp
public string FixedRateUnit { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2FrequencyOutputReference.property.internalValue"></a>

```csharp
public LtsKeywordsAlarmRuleV2Frequency InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2Frequency">LtsKeywordsAlarmRuleV2Frequency</a>

---


### LtsKeywordsAlarmRuleV2KeywordsRequestsList <a name="LtsKeywordsAlarmRuleV2KeywordsRequestsList" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2KeywordsRequestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.get"></a>

```csharp
private LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference <a name="LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.keywordInput">KeywordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.numberInput">NumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRangeInput">SearchTimeRangeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRangeUnitInput">SearchTimeRangeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.keyword">Keyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRange">SearchTimeRange</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRangeUnit">SearchTimeRangeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `KeywordInput`<sup>Optional</sup> <a name="KeywordInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.keywordInput"></a>

```csharp
public string KeywordInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logStreamIdInput"></a>

```csharp
public string LogStreamIdInput { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.numberInput"></a>

```csharp
public double NumberInput { get; }
```

- *Type:* double

---

##### `SearchTimeRangeInput`<sup>Optional</sup> <a name="SearchTimeRangeInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRangeInput"></a>

```csharp
public double SearchTimeRangeInput { get; }
```

- *Type:* double

---

##### `SearchTimeRangeUnitInput`<sup>Optional</sup> <a name="SearchTimeRangeUnitInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRangeUnitInput"></a>

```csharp
public string SearchTimeRangeUnitInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.keyword"></a>

```csharp
public string Keyword { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `SearchTimeRange`<sup>Required</sup> <a name="SearchTimeRange" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRange"></a>

```csharp
public double SearchTimeRange { get; }
```

- *Type:* double

---

##### `SearchTimeRangeUnit`<sup>Required</sup> <a name="SearchTimeRangeUnit" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.searchTimeRangeUnit"></a>

```csharp
public string SearchTimeRangeUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2KeywordsRequestsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LtsKeywordsAlarmRuleV2NotificationRuleOutputReference <a name="LtsKeywordsAlarmRuleV2NotificationRuleOutputReference" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2NotificationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.putTopics">PutTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resetTemplateName">ResetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopics` <a name="PutTopics" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.putTopics"></a>

```csharp
private void PutTopics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.putTopics.parameter.value"></a>

- *Type:* object

---

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList">LtsKeywordsAlarmRuleV2NotificationRuleTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.topicsInput">TopicsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.topics"></a>

```csharp
public LtsKeywordsAlarmRuleV2NotificationRuleTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList">LtsKeywordsAlarmRuleV2NotificationRuleTopicsList</a>

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.topicsInput"></a>

```csharp
public object TopicsInput { get; }
```

- *Type:* object

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleOutputReference.property.internalValue"></a>

```csharp
public LtsKeywordsAlarmRuleV2NotificationRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRule">LtsKeywordsAlarmRuleV2NotificationRule</a>

---


### LtsKeywordsAlarmRuleV2NotificationRuleTopicsList <a name="LtsKeywordsAlarmRuleV2NotificationRuleTopicsList" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2NotificationRuleTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.get"></a>

```csharp
private LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference <a name="LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resetPushPolicy">ResetPushPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetPushPolicy` <a name="ResetPushPolicy" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.resetPushPolicy"></a>

```csharp
private void ResetPushPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.pushPolicyInput">PushPolicyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.topicUrnInput">TopicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.pushPolicy">PushPolicy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.topicUrn">TopicUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PushPolicyInput`<sup>Optional</sup> <a name="PushPolicyInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.pushPolicyInput"></a>

```csharp
public double PushPolicyInput { get; }
```

- *Type:* double

---

##### `TopicUrnInput`<sup>Optional</sup> <a name="TopicUrnInput" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.topicUrnInput"></a>

```csharp
public string TopicUrnInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PushPolicy`<sup>Required</sup> <a name="PushPolicy" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.pushPolicy"></a>

```csharp
public double PushPolicy { get; }
```

- *Type:* double

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.topicUrn"></a>

```csharp
public string TopicUrn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsKeywordsAlarmRuleV2.LtsKeywordsAlarmRuleV2NotificationRuleTopicsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



