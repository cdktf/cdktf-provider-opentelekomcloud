# `asGroupV1` Submodule <a name="`asGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.asGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsGroupV1 <a name="AsGroupV1" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1 opentelekomcloud_as_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1(Construct Scope, string Id, AsGroupV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config">AsGroupV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config">AsGroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners">PutLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups">PutSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones">ResetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime">ResetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber">ResetDesireInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod">ResetHealthPeriodicAuditGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod">ResetHealthPeriodicAuditMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime">ResetHealthPeriodicAuditTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy">ResetInstanceTerminatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners">ResetLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId">ResetLbListenerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber">ResetMaxInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber">ResetMinInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId">ResetScalingConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLbaasListeners` <a name="PutLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners"></a>

```csharp
private void PutLbaasListeners(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners.parameter.value"></a>

- *Type:* object

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `PutSecurityGroups` <a name="PutSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups"></a>

```csharp
private void PutSecurityGroups(AsGroupV1SecurityGroups Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts"></a>

```csharp
private void PutTimeouts(AsGroupV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---

##### `ResetAvailableZones` <a name="ResetAvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones"></a>

```csharp
private void ResetAvailableZones()
```

##### `ResetCoolDownTime` <a name="ResetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime"></a>

```csharp
private void ResetCoolDownTime()
```

##### `ResetDesireInstanceNumber` <a name="ResetDesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber"></a>

```csharp
private void ResetDesireInstanceNumber()
```

##### `ResetHealthPeriodicAuditGracePeriod` <a name="ResetHealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod"></a>

```csharp
private void ResetHealthPeriodicAuditGracePeriod()
```

##### `ResetHealthPeriodicAuditMethod` <a name="ResetHealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod"></a>

```csharp
private void ResetHealthPeriodicAuditMethod()
```

##### `ResetHealthPeriodicAuditTime` <a name="ResetHealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime"></a>

```csharp
private void ResetHealthPeriodicAuditTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceTerminatePolicy` <a name="ResetInstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy"></a>

```csharp
private void ResetInstanceTerminatePolicy()
```

##### `ResetLbaasListeners` <a name="ResetLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners"></a>

```csharp
private void ResetLbaasListeners()
```

##### `ResetLbListenerId` <a name="ResetLbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId"></a>

```csharp
private void ResetLbListenerId()
```

##### `ResetMaxInstanceNumber` <a name="ResetMaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber"></a>

```csharp
private void ResetMaxInstanceNumber()
```

##### `ResetMinInstanceNumber` <a name="ResetMinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber"></a>

```csharp
private void ResetMinInstanceNumber()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScalingConfigurationId` <a name="ResetScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId"></a>

```csharp
private void ResetScalingConfigurationId()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsGroupV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsGroupV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsGroupV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsGroupV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsGroupV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AsGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber">CurrentInstanceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners">LbaasListeners</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups">SecurityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput">AvailableZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput">CoolDownTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput">DeleteInstancesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput">DeletePublicipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput">DesireInstanceNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput">HealthPeriodicAuditGracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput">HealthPeriodicAuditMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput">HealthPeriodicAuditTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput">InstanceTerminatePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput">LbaasListenersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput">LbListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput">MaxInstanceNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput">MinInstanceNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput">NotificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput">ScalingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput">ScalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones">AvailableZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime">CoolDownTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances">DeleteInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip">DeletePublicip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber">DesireInstanceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod">HealthPeriodicAuditGracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod">HealthPeriodicAuditMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime">HealthPeriodicAuditTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy">InstanceTerminatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId">LbListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber">MaxInstanceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber">MinInstanceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications">Notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId">ScalingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName">ScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CurrentInstanceNumber`<sup>Required</sup> <a name="CurrentInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber"></a>

```csharp
public double CurrentInstanceNumber { get; }
```

- *Type:* double

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `LbaasListeners`<sup>Required</sup> <a name="LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners"></a>

```csharp
public AsGroupV1LbaasListenersList LbaasListeners { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks"></a>

```csharp
public AsGroupV1NetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a>

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups"></a>

```csharp
public AsGroupV1SecurityGroupsOutputReference SecurityGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts"></a>

```csharp
public AsGroupV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a>

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput"></a>

```csharp
public string[] AvailableZonesInput { get; }
```

- *Type:* string[]

---

##### `CoolDownTimeInput`<sup>Optional</sup> <a name="CoolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput"></a>

```csharp
public double CoolDownTimeInput { get; }
```

- *Type:* double

---

##### `DeleteInstancesInput`<sup>Optional</sup> <a name="DeleteInstancesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput"></a>

```csharp
public string DeleteInstancesInput { get; }
```

- *Type:* string

---

##### `DeletePublicipInput`<sup>Optional</sup> <a name="DeletePublicipInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput"></a>

```csharp
public object DeletePublicipInput { get; }
```

- *Type:* object

---

##### `DesireInstanceNumberInput`<sup>Optional</sup> <a name="DesireInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput"></a>

```csharp
public double DesireInstanceNumberInput { get; }
```

- *Type:* double

---

##### `HealthPeriodicAuditGracePeriodInput`<sup>Optional</sup> <a name="HealthPeriodicAuditGracePeriodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput"></a>

```csharp
public double HealthPeriodicAuditGracePeriodInput { get; }
```

- *Type:* double

---

##### `HealthPeriodicAuditMethodInput`<sup>Optional</sup> <a name="HealthPeriodicAuditMethodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput"></a>

```csharp
public string HealthPeriodicAuditMethodInput { get; }
```

- *Type:* string

---

##### `HealthPeriodicAuditTimeInput`<sup>Optional</sup> <a name="HealthPeriodicAuditTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput"></a>

```csharp
public double HealthPeriodicAuditTimeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceTerminatePolicyInput`<sup>Optional</sup> <a name="InstanceTerminatePolicyInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput"></a>

```csharp
public string InstanceTerminatePolicyInput { get; }
```

- *Type:* string

---

##### `LbaasListenersInput`<sup>Optional</sup> <a name="LbaasListenersInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput"></a>

```csharp
public object LbaasListenersInput { get; }
```

- *Type:* object

---

##### `LbListenerIdInput`<sup>Optional</sup> <a name="LbListenerIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput"></a>

```csharp
public string LbListenerIdInput { get; }
```

- *Type:* string

---

##### `MaxInstanceNumberInput`<sup>Optional</sup> <a name="MaxInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput"></a>

```csharp
public double MaxInstanceNumberInput { get; }
```

- *Type:* double

---

##### `MinInstanceNumberInput`<sup>Optional</sup> <a name="MinInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput"></a>

```csharp
public double MinInstanceNumberInput { get; }
```

- *Type:* double

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput"></a>

```csharp
public string[] NotificationsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScalingConfigurationIdInput`<sup>Optional</sup> <a name="ScalingConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput"></a>

```csharp
public string ScalingConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ScalingGroupNameInput`<sup>Optional</sup> <a name="ScalingGroupNameInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput"></a>

```csharp
public string ScalingGroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput"></a>

```csharp
public AsGroupV1SecurityGroups SecurityGroupsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones"></a>

```csharp
public string[] AvailableZones { get; }
```

- *Type:* string[]

---

##### `CoolDownTime`<sup>Required</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime"></a>

```csharp
public double CoolDownTime { get; }
```

- *Type:* double

---

##### `DeleteInstances`<sup>Required</sup> <a name="DeleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances"></a>

```csharp
public string DeleteInstances { get; }
```

- *Type:* string

---

##### `DeletePublicip`<sup>Required</sup> <a name="DeletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip"></a>

```csharp
public object DeletePublicip { get; }
```

- *Type:* object

---

##### `DesireInstanceNumber`<sup>Required</sup> <a name="DesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber"></a>

```csharp
public double DesireInstanceNumber { get; }
```

- *Type:* double

---

##### `HealthPeriodicAuditGracePeriod`<sup>Required</sup> <a name="HealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod"></a>

```csharp
public double HealthPeriodicAuditGracePeriod { get; }
```

- *Type:* double

---

##### `HealthPeriodicAuditMethod`<sup>Required</sup> <a name="HealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod"></a>

```csharp
public string HealthPeriodicAuditMethod { get; }
```

- *Type:* string

---

##### `HealthPeriodicAuditTime`<sup>Required</sup> <a name="HealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime"></a>

```csharp
public double HealthPeriodicAuditTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceTerminatePolicy`<sup>Required</sup> <a name="InstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy"></a>

```csharp
public string InstanceTerminatePolicy { get; }
```

- *Type:* string

---

##### `LbListenerId`<sup>Required</sup> <a name="LbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId"></a>

```csharp
public string LbListenerId { get; }
```

- *Type:* string

---

##### `MaxInstanceNumber`<sup>Required</sup> <a name="MaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber"></a>

```csharp
public double MaxInstanceNumber { get; }
```

- *Type:* double

---

##### `MinInstanceNumber`<sup>Required</sup> <a name="MinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber"></a>

```csharp
public double MinInstanceNumber { get; }
```

- *Type:* double

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications"></a>

```csharp
public string[] Notifications { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScalingConfigurationId`<sup>Required</sup> <a name="ScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId"></a>

```csharp
public string ScalingConfigurationId { get; }
```

- *Type:* string

---

##### `ScalingGroupName`<sup>Required</sup> <a name="ScalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName"></a>

```csharp
public string ScalingGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsGroupV1Config <a name="AsGroupV1Config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeleteInstances,
    object DeletePublicip,
    object Networks,
    string ScalingGroupName,
    string VpcId,
    string[] AvailableZones = null,
    double CoolDownTime = null,
    double DesireInstanceNumber = null,
    double HealthPeriodicAuditGracePeriod = null,
    string HealthPeriodicAuditMethod = null,
    double HealthPeriodicAuditTime = null,
    string Id = null,
    string InstanceTerminatePolicy = null,
    object LbaasListeners = null,
    string LbListenerId = null,
    double MaxInstanceNumber = null,
    double MinInstanceNumber = null,
    string[] Notifications = null,
    string Region = null,
    string ScalingConfigurationId = null,
    AsGroupV1SecurityGroups SecurityGroups = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    AsGroupV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances">DeleteInstances</a></code> | <code>string</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip">DeletePublicip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks">Networks</a></code> | <code>object</code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName">ScalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones">AvailableZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime">CoolDownTime</a></code> | <code>double</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber">DesireInstanceNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod">HealthPeriodicAuditGracePeriod</a></code> | <code>double</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod">HealthPeriodicAuditMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime">HealthPeriodicAuditTime</a></code> | <code>double</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy">InstanceTerminatePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners">LbaasListeners</a></code> | <code>object</code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId">LbListenerId</a></code> | <code>string</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber">MaxInstanceNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber">MinInstanceNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications">Notifications</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId">ScalingConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups">SecurityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeleteInstances`<sup>Required</sup> <a name="DeleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances"></a>

```csharp
public string DeleteInstances { get; set; }
```

- *Type:* string

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `DeletePublicip`<sup>Required</sup> <a name="DeletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip"></a>

```csharp
public object DeletePublicip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#networks AsGroupV1#networks}

---

##### `ScalingGroupName`<sup>Required</sup> <a name="ScalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName"></a>

```csharp
public string ScalingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `AvailableZones`<sup>Optional</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones"></a>

```csharp
public string[] AvailableZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `CoolDownTime`<sup>Optional</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime"></a>

```csharp
public double CoolDownTime { get; set; }
```

- *Type:* double

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `DesireInstanceNumber`<sup>Optional</sup> <a name="DesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber"></a>

```csharp
public double DesireInstanceNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `HealthPeriodicAuditGracePeriod`<sup>Optional</sup> <a name="HealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod"></a>

```csharp
public double HealthPeriodicAuditGracePeriod { get; set; }
```

- *Type:* double

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `HealthPeriodicAuditMethod`<sup>Optional</sup> <a name="HealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod"></a>

```csharp
public string HealthPeriodicAuditMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `HealthPeriodicAuditTime`<sup>Optional</sup> <a name="HealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime"></a>

```csharp
public double HealthPeriodicAuditTime { get; set; }
```

- *Type:* double

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTerminatePolicy`<sup>Optional</sup> <a name="InstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy"></a>

```csharp
public string InstanceTerminatePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `LbaasListeners`<sup>Optional</sup> <a name="LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners"></a>

```csharp
public object LbaasListeners { get; set; }
```

- *Type:* object

lbaas_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `LbListenerId`<sup>Optional</sup> <a name="LbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId"></a>

```csharp
public string LbListenerId { get; set; }
```

- *Type:* string

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `MaxInstanceNumber`<sup>Optional</sup> <a name="MaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber"></a>

```csharp
public double MaxInstanceNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `MinInstanceNumber`<sup>Optional</sup> <a name="MinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber"></a>

```csharp
public double MinInstanceNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications"></a>

```csharp
public string[] Notifications { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#region AsGroupV1#region}.

---

##### `ScalingConfigurationId`<sup>Optional</sup> <a name="ScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId"></a>

```csharp
public string ScalingConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups"></a>

```csharp
public AsGroupV1SecurityGroups SecurityGroups { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#tags AsGroupV1#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts"></a>

```csharp
public AsGroupV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#timeouts AsGroupV1#timeouts}

---

### AsGroupV1LbaasListeners <a name="AsGroupV1LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1LbaasListeners {
    string PoolId,
    double ProtocolPort,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId">PoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort">ProtocolPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#weight AsGroupV1#weight}. |

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}.

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort"></a>

```csharp
public double ProtocolPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#weight AsGroupV1#weight}.

---

### AsGroupV1Networks <a name="AsGroupV1Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1Networks {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1SecurityGroups <a name="AsGroupV1SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1SecurityGroups {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1Timeouts <a name="AsGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#create AsGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete AsGroupV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#create AsGroupV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete AsGroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsGroupV1LbaasListenersList <a name="AsGroupV1LbaasListenersList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1LbaasListenersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get"></a>

```csharp
private AsGroupV1LbaasListenersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsGroupV1LbaasListenersOutputReference <a name="AsGroupV1LbaasListenersOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1LbaasListenersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput">ProtocolPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort">ProtocolPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `ProtocolPortInput`<sup>Optional</sup> <a name="ProtocolPortInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput"></a>

```csharp
public double ProtocolPortInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort"></a>

```csharp
public double ProtocolPort { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsGroupV1NetworksList <a name="AsGroupV1NetworksList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1NetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get"></a>

```csharp
private AsGroupV1NetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsGroupV1NetworksOutputReference <a name="AsGroupV1NetworksOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1NetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AsGroupV1SecurityGroupsOutputReference <a name="AsGroupV1SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1SecurityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue"></a>

```csharp
public AsGroupV1SecurityGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---


### AsGroupV1TimeoutsOutputReference <a name="AsGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsGroupV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



