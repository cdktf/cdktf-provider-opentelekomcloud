# `drsTaskV3` Submodule <a name="`drsTaskV3` Submodule" id="@cdktf/provider-opentelekomcloud.drsTaskV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsTaskV3 <a name="DrsTaskV3" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3 opentelekomcloud_drs_task_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3(Construct Scope, string Id, DrsTaskV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config">DrsTaskV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config">DrsTaskV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb">PutDestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed">PutLimitSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb">PutSourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly">ResetDestinationDbReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays">ResetExpiredDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed">ResetLimitSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner">ResetMigrateDefiner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType">ResetMigrationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite">ResetMultiWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType">ResetNetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum">ResetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationDb` <a name="PutDestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb"></a>

```csharp
private void PutDestinationDb(DrsTaskV3DestinationDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `PutLimitSpeed` <a name="PutLimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed"></a>

```csharp
private void PutLimitSpeed(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed.parameter.value"></a>

- *Type:* object

---

##### `PutSourceDb` <a name="PutSourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb"></a>

```csharp
private void PutSourceDb(DrsTaskV3SourceDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts"></a>

```csharp
private void PutTimeouts(DrsTaskV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationDbReadonly` <a name="ResetDestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly"></a>

```csharp
private void ResetDestinationDbReadonly()
```

##### `ResetExpiredDays` <a name="ResetExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays"></a>

```csharp
private void ResetExpiredDays()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimitSpeed` <a name="ResetLimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed"></a>

```csharp
private void ResetLimitSpeed()
```

##### `ResetMigrateDefiner` <a name="ResetMigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner"></a>

```csharp
private void ResetMigrateDefiner()
```

##### `ResetMigrationType` <a name="ResetMigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType"></a>

```csharp
private void ResetMigrationType()
```

##### `ResetMultiWrite` <a name="ResetMultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite"></a>

```csharp
private void ResetMultiWrite()
```

##### `ResetNetType` <a name="ResetNetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType"></a>

```csharp
private void ResetNetType()
```

##### `ResetNodeNum` <a name="ResetNodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum"></a>

```csharp
private void ResetNodeNum()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DrsTaskV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DrsTaskV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DrsTaskV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DrsTaskV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrsTaskV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrsTaskV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DrsTaskV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb">DestinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed">LimitSpeed</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb">SourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput">DestinationDbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput">DestinationDbReadonlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput">ExpiredDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput">LimitSpeedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput">MigrateDefinerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput">MigrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput">MultiWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput">NetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput">NodeNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput">SourceDbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly">DestinationDbReadonly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays">ExpiredDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner">MigrateDefiner</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType">MigrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite">MultiWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType">NetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum">NodeNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DestinationDb`<sup>Required</sup> <a name="DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb"></a>

```csharp
public DrsTaskV3DestinationDbOutputReference DestinationDb { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a>

---

##### `LimitSpeed`<sup>Required</sup> <a name="LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed"></a>

```csharp
public DrsTaskV3LimitSpeedList LimitSpeed { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SourceDb`<sup>Required</sup> <a name="SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb"></a>

```csharp
public DrsTaskV3SourceDbOutputReference SourceDb { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts"></a>

```csharp
public DrsTaskV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationDbInput`<sup>Optional</sup> <a name="DestinationDbInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput"></a>

```csharp
public DrsTaskV3DestinationDb DestinationDbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `DestinationDbReadonlyInput`<sup>Optional</sup> <a name="DestinationDbReadonlyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput"></a>

```csharp
public object DestinationDbReadonlyInput { get; }
```

- *Type:* object

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `ExpiredDaysInput`<sup>Optional</sup> <a name="ExpiredDaysInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput"></a>

```csharp
public double ExpiredDaysInput { get; }
```

- *Type:* double

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitSpeedInput`<sup>Optional</sup> <a name="LimitSpeedInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput"></a>

```csharp
public object LimitSpeedInput { get; }
```

- *Type:* object

---

##### `MigrateDefinerInput`<sup>Optional</sup> <a name="MigrateDefinerInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput"></a>

```csharp
public object MigrateDefinerInput { get; }
```

- *Type:* object

---

##### `MigrationTypeInput`<sup>Optional</sup> <a name="MigrationTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput"></a>

```csharp
public string MigrationTypeInput { get; }
```

- *Type:* string

---

##### `MultiWriteInput`<sup>Optional</sup> <a name="MultiWriteInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput"></a>

```csharp
public object MultiWriteInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetTypeInput`<sup>Optional</sup> <a name="NetTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput"></a>

```csharp
public string NetTypeInput { get; }
```

- *Type:* string

---

##### `NodeNumInput`<sup>Optional</sup> <a name="NodeNumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput"></a>

```csharp
public double NodeNumInput { get; }
```

- *Type:* double

---

##### `SourceDbInput`<sup>Optional</sup> <a name="SourceDbInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput"></a>

```csharp
public DrsTaskV3SourceDb SourceDbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationDbReadonly`<sup>Required</sup> <a name="DestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly"></a>

```csharp
public object DestinationDbReadonly { get; }
```

- *Type:* object

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `ExpiredDays`<sup>Required</sup> <a name="ExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays"></a>

```csharp
public double ExpiredDays { get; }
```

- *Type:* double

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MigrateDefiner`<sup>Required</sup> <a name="MigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner"></a>

```csharp
public object MigrateDefiner { get; }
```

- *Type:* object

---

##### `MigrationType`<sup>Required</sup> <a name="MigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType"></a>

```csharp
public string MigrationType { get; }
```

- *Type:* string

---

##### `MultiWrite`<sup>Required</sup> <a name="MultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite"></a>

```csharp
public object MultiWrite { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetType`<sup>Required</sup> <a name="NetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType"></a>

```csharp
public string NetType { get; }
```

- *Type:* string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum"></a>

```csharp
public double NodeNum { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsTaskV3Config <a name="DrsTaskV3Config" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DrsTaskV3DestinationDb DestinationDb,
    string Direction,
    string EngineType,
    string Name,
    DrsTaskV3SourceDb SourceDb,
    string Type,
    string Action = null,
    string Description = null,
    object DestinationDbReadonly = null,
    double ExpiredDays = null,
    object ForceDestroy = null,
    string Id = null,
    object LimitSpeed = null,
    object MigrateDefiner = null,
    string MigrationType = null,
    object MultiWrite = null,
    string NetType = null,
    double NodeNum = null,
    string StartTime = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DrsTaskV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb">DestinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | destination_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#direction DrsTaskV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb">SourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | source_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#type DrsTaskV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#action DrsTaskV3#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#description DrsTaskV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly">DestinationDbReadonly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays">ExpiredDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#id DrsTaskV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed">LimitSpeed</a></code> | <code>object</code> | limit_speed block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner">MigrateDefiner</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType">MigrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite">MultiWrite</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType">NetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum">NodeNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#tags DrsTaskV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestinationDb`<sup>Required</sup> <a name="DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb"></a>

```csharp
public DrsTaskV3DestinationDb DestinationDb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

destination_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#direction DrsTaskV3#direction}.

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `SourceDb`<sup>Required</sup> <a name="SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb"></a>

```csharp
public DrsTaskV3SourceDb SourceDb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

source_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#type DrsTaskV3#type}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#action DrsTaskV3#action}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#description DrsTaskV3#description}.

---

##### `DestinationDbReadonly`<sup>Optional</sup> <a name="DestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly"></a>

```csharp
public object DestinationDbReadonly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}.

---

##### `ExpiredDays`<sup>Optional</sup> <a name="ExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays"></a>

```csharp
public double ExpiredDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#id DrsTaskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LimitSpeed`<sup>Optional</sup> <a name="LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed"></a>

```csharp
public object LimitSpeed { get; set; }
```

- *Type:* object

limit_speed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}

---

##### `MigrateDefiner`<sup>Optional</sup> <a name="MigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner"></a>

```csharp
public object MigrateDefiner { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}.

---

##### `MigrationType`<sup>Optional</sup> <a name="MigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType"></a>

```csharp
public string MigrationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}.

---

##### `MultiWrite`<sup>Optional</sup> <a name="MultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite"></a>

```csharp
public object MultiWrite { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}.

---

##### `NetType`<sup>Optional</sup> <a name="NetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType"></a>

```csharp
public string NetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}.

---

##### `NodeNum`<sup>Optional</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum"></a>

```csharp
public double NodeNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#tags DrsTaskV3#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts"></a>

```csharp
public DrsTaskV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}

---

### DrsTaskV3DestinationDb <a name="DrsTaskV3DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3DestinationDb {
    string EngineType,
    string Ip,
    string Password,
    double Port,
    string User,
    string InstanceId = null,
    string Name = null,
    string Region = null,
    string SslCertCheckSum = null,
    string SslCertKey = null,
    string SslCertName = null,
    string SslCertPassword = null,
    object SslEnabled = null,
    string SubnetId = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip">Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey">SslCertKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName">SslCertName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword">SslCertPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled">SslEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#vpc_id DrsTaskV3#vpc_id}. |

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `SslCertCheckSum`<sup>Optional</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum"></a>

```csharp
public string SslCertCheckSum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `SslCertKey`<sup>Optional</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey"></a>

```csharp
public string SslCertKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `SslCertName`<sup>Optional</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName"></a>

```csharp
public string SslCertName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `SslCertPassword`<sup>Optional</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword"></a>

```csharp
public string SslCertPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `SslEnabled`<sup>Optional</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled"></a>

```csharp
public object SslEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#vpc_id DrsTaskV3#vpc_id}.

---

### DrsTaskV3LimitSpeed <a name="DrsTaskV3LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3LimitSpeed {
    string EndTime,
    string Speed,
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed">Speed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#speed DrsTaskV3#speed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}.

---

##### `Speed`<sup>Required</sup> <a name="Speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed"></a>

```csharp
public string Speed { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#speed DrsTaskV3#speed}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

### DrsTaskV3SourceDb <a name="DrsTaskV3SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3SourceDb {
    string EngineType,
    string Ip,
    string Password,
    double Port,
    string User,
    string InstanceId = null,
    string Name = null,
    string Region = null,
    string SslCertCheckSum = null,
    string SslCertKey = null,
    string SslCertName = null,
    string SslCertPassword = null,
    object SslEnabled = null,
    string SubnetId = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip">Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey">SslCertKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName">SslCertName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword">SslCertPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled">SslEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#vpc_id DrsTaskV3#vpc_id}. |

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `SslCertCheckSum`<sup>Optional</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum"></a>

```csharp
public string SslCertCheckSum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `SslCertKey`<sup>Optional</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey"></a>

```csharp
public string SslCertKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `SslCertName`<sup>Optional</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName"></a>

```csharp
public string SslCertName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `SslCertPassword`<sup>Optional</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword"></a>

```csharp
public string SslCertPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `SslEnabled`<sup>Optional</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled"></a>

```csharp
public object SslEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#vpc_id DrsTaskV3#vpc_id}.

---

### DrsTaskV3Timeouts <a name="DrsTaskV3Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#create DrsTaskV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#delete DrsTaskV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#update DrsTaskV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#create DrsTaskV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#delete DrsTaskV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/drs_task_v3#update DrsTaskV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DrsTaskV3DestinationDbOutputReference <a name="DrsTaskV3DestinationDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3DestinationDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum">ResetSslCertCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey">ResetSslCertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName">ResetSslCertName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword">ResetSslCertPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled">ResetSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSslCertCheckSum` <a name="ResetSslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum"></a>

```csharp
private void ResetSslCertCheckSum()
```

##### `ResetSslCertKey` <a name="ResetSslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey"></a>

```csharp
private void ResetSslCertKey()
```

##### `ResetSslCertName` <a name="ResetSslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName"></a>

```csharp
private void ResetSslCertName()
```

##### `ResetSslCertPassword` <a name="ResetSslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword"></a>

```csharp
private void ResetSslCertPassword()
```

##### `ResetSslEnabled` <a name="ResetSslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled"></a>

```csharp
private void ResetSslEnabled()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput">SslCertCheckSumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput">SslCertKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput">SslCertNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput">SslCertPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput">SslEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey">SslCertKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName">SslCertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword">SslCertPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled">SslEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SslCertCheckSumInput`<sup>Optional</sup> <a name="SslCertCheckSumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput"></a>

```csharp
public string SslCertCheckSumInput { get; }
```

- *Type:* string

---

##### `SslCertKeyInput`<sup>Optional</sup> <a name="SslCertKeyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput"></a>

```csharp
public string SslCertKeyInput { get; }
```

- *Type:* string

---

##### `SslCertNameInput`<sup>Optional</sup> <a name="SslCertNameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput"></a>

```csharp
public string SslCertNameInput { get; }
```

- *Type:* string

---

##### `SslCertPasswordInput`<sup>Optional</sup> <a name="SslCertPasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput"></a>

```csharp
public string SslCertPasswordInput { get; }
```

- *Type:* string

---

##### `SslEnabledInput`<sup>Optional</sup> <a name="SslEnabledInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput"></a>

```csharp
public object SslEnabledInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SslCertCheckSum`<sup>Required</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum"></a>

```csharp
public string SslCertCheckSum { get; }
```

- *Type:* string

---

##### `SslCertKey`<sup>Required</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey"></a>

```csharp
public string SslCertKey { get; }
```

- *Type:* string

---

##### `SslCertName`<sup>Required</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName"></a>

```csharp
public string SslCertName { get; }
```

- *Type:* string

---

##### `SslCertPassword`<sup>Required</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword"></a>

```csharp
public string SslCertPassword { get; }
```

- *Type:* string

---

##### `SslEnabled`<sup>Required</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled"></a>

```csharp
public object SslEnabled { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue"></a>

```csharp
public DrsTaskV3DestinationDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---


### DrsTaskV3LimitSpeedList <a name="DrsTaskV3LimitSpeedList" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3LimitSpeedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get"></a>

```csharp
private DrsTaskV3LimitSpeedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DrsTaskV3LimitSpeedOutputReference <a name="DrsTaskV3LimitSpeedOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3LimitSpeedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput">SpeedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed">Speed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `SpeedInput`<sup>Optional</sup> <a name="SpeedInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput"></a>

```csharp
public string SpeedInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Speed`<sup>Required</sup> <a name="Speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed"></a>

```csharp
public string Speed { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DrsTaskV3SourceDbOutputReference <a name="DrsTaskV3SourceDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3SourceDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum">ResetSslCertCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey">ResetSslCertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName">ResetSslCertName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword">ResetSslCertPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled">ResetSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSslCertCheckSum` <a name="ResetSslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum"></a>

```csharp
private void ResetSslCertCheckSum()
```

##### `ResetSslCertKey` <a name="ResetSslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey"></a>

```csharp
private void ResetSslCertKey()
```

##### `ResetSslCertName` <a name="ResetSslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName"></a>

```csharp
private void ResetSslCertName()
```

##### `ResetSslCertPassword` <a name="ResetSslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword"></a>

```csharp
private void ResetSslCertPassword()
```

##### `ResetSslEnabled` <a name="ResetSslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled"></a>

```csharp
private void ResetSslEnabled()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput">SslCertCheckSumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput">SslCertKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput">SslCertNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput">SslCertPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput">SslEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey">SslCertKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName">SslCertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword">SslCertPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled">SslEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SslCertCheckSumInput`<sup>Optional</sup> <a name="SslCertCheckSumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput"></a>

```csharp
public string SslCertCheckSumInput { get; }
```

- *Type:* string

---

##### `SslCertKeyInput`<sup>Optional</sup> <a name="SslCertKeyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput"></a>

```csharp
public string SslCertKeyInput { get; }
```

- *Type:* string

---

##### `SslCertNameInput`<sup>Optional</sup> <a name="SslCertNameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput"></a>

```csharp
public string SslCertNameInput { get; }
```

- *Type:* string

---

##### `SslCertPasswordInput`<sup>Optional</sup> <a name="SslCertPasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput"></a>

```csharp
public string SslCertPasswordInput { get; }
```

- *Type:* string

---

##### `SslEnabledInput`<sup>Optional</sup> <a name="SslEnabledInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput"></a>

```csharp
public object SslEnabledInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SslCertCheckSum`<sup>Required</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum"></a>

```csharp
public string SslCertCheckSum { get; }
```

- *Type:* string

---

##### `SslCertKey`<sup>Required</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey"></a>

```csharp
public string SslCertKey { get; }
```

- *Type:* string

---

##### `SslCertName`<sup>Required</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName"></a>

```csharp
public string SslCertName { get; }
```

- *Type:* string

---

##### `SslCertPassword`<sup>Required</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword"></a>

```csharp
public string SslCertPassword { get; }
```

- *Type:* string

---

##### `SslEnabled`<sup>Required</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled"></a>

```csharp
public object SslEnabled { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue"></a>

```csharp
public DrsTaskV3SourceDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---


### DrsTaskV3TimeoutsOutputReference <a name="DrsTaskV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DrsTaskV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



