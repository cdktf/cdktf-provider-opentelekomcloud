# `rdsInstanceV3` Submodule <a name="`rdsInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsInstanceV3 <a name="RdsInstanceV3" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3 opentelekomcloud_rds_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3(Construct Scope, string Id, RdsInstanceV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config">RdsInstanceV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config">RdsInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy">PutBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb">PutDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup">PutRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint">PutRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetBackupStrategy">ResetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetHaReplicationMode">ResetHaReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetLowerCaseTableNames">ResetLowerCaseTableNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParamGroupId">ResetParamGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPublicIps">ResetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestoreFromBackup">ResetRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestorePoint">ResetRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetSslEnable">ResetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupStrategy` <a name="PutBackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy"></a>

```csharp
private void PutBackupStrategy(RdsInstanceV3BackupStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---

##### `PutDb` <a name="PutDb" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb"></a>

```csharp
private void PutDb(RdsInstanceV3Db Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---

##### `PutRestoreFromBackup` <a name="PutRestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup"></a>

```csharp
private void PutRestoreFromBackup(RdsInstanceV3RestoreFromBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---

##### `PutRestorePoint` <a name="PutRestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint"></a>

```csharp
private void PutRestorePoint(RdsInstanceV3RestorePoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts"></a>

```csharp
private void PutTimeouts(RdsInstanceV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume"></a>

```csharp
private void PutVolume(RdsInstanceV3Volume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---

##### `ResetBackupStrategy` <a name="ResetBackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetBackupStrategy"></a>

```csharp
private void ResetBackupStrategy()
```

##### `ResetHaReplicationMode` <a name="ResetHaReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetHaReplicationMode"></a>

```csharp
private void ResetHaReplicationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLowerCaseTableNames` <a name="ResetLowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetLowerCaseTableNames"></a>

```csharp
private void ResetLowerCaseTableNames()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetParamGroupId` <a name="ResetParamGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParamGroupId"></a>

```csharp
private void ResetParamGroupId()
```

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPublicIps"></a>

```csharp
private void ResetPublicIps()
```

##### `ResetRestoreFromBackup` <a name="ResetRestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestoreFromBackup"></a>

```csharp
private void ResetRestoreFromBackup()
```

##### `ResetRestorePoint` <a name="ResetRestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestorePoint"></a>

```csharp
private void ResetRestorePoint()
```

##### `ResetSslEnable` <a name="ResetSslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetSslEnable"></a>

```csharp
private void ResetSslEnable()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RdsInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsInstanceV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RdsInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference">RdsInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.db">Db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference">RdsInstanceV3DbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList">RdsInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIps">PrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoredBackupId">RestoredBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackup">RestoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference">RdsInstanceV3RestoreFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePoint">RestorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference">RdsInstanceV3RestorePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference">RdsInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference">RdsInstanceV3VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategyInput">BackupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dbInput">DbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavorInput">FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationModeInput">HaReplicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNamesInput">LowerCaseTableNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupIdInput">ParamGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIpsInput">PublicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackupInput">RestoreFromBackupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePointInput">RestorePointInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnableInput">SslEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagInput">TagInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZone">AvailabilityZone</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavor">Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationMode">HaReplicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupId">ParamGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIps">PublicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnable">SslEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tag">Tag</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `BackupStrategy`<sup>Required</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategy"></a>

```csharp
public RdsInstanceV3BackupStrategyOutputReference BackupStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference">RdsInstanceV3BackupStrategyOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.db"></a>

```csharp
public RdsInstanceV3DbOutputReference Db { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference">RdsInstanceV3DbOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nodes"></a>

```csharp
public RdsInstanceV3NodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList">RdsInstanceV3NodesList</a>

---

##### `PrivateIps`<sup>Required</sup> <a name="PrivateIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIps"></a>

```csharp
public string[] PrivateIps { get; }
```

- *Type:* string[]

---

##### `RestoredBackupId`<sup>Required</sup> <a name="RestoredBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoredBackupId"></a>

```csharp
public string RestoredBackupId { get; }
```

- *Type:* string

---

##### `RestoreFromBackup`<sup>Required</sup> <a name="RestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackup"></a>

```csharp
public RdsInstanceV3RestoreFromBackupOutputReference RestoreFromBackup { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference">RdsInstanceV3RestoreFromBackupOutputReference</a>

---

##### `RestorePoint`<sup>Required</sup> <a name="RestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePoint"></a>

```csharp
public RdsInstanceV3RestorePointOutputReference RestorePoint { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference">RdsInstanceV3RestorePointOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeouts"></a>

```csharp
public RdsInstanceV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference">RdsInstanceV3TimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volume"></a>

```csharp
public RdsInstanceV3VolumeOutputReference Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference">RdsInstanceV3VolumeOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZoneInput"></a>

```csharp
public string[] AvailabilityZoneInput { get; }
```

- *Type:* string[]

---

##### `BackupStrategyInput`<sup>Optional</sup> <a name="BackupStrategyInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategyInput"></a>

```csharp
public RdsInstanceV3BackupStrategy BackupStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---

##### `DbInput`<sup>Optional</sup> <a name="DbInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dbInput"></a>

```csharp
public RdsInstanceV3Db DbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavorInput"></a>

```csharp
public string FlavorInput { get; }
```

- *Type:* string

---

##### `HaReplicationModeInput`<sup>Optional</sup> <a name="HaReplicationModeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationModeInput"></a>

```csharp
public string HaReplicationModeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LowerCaseTableNamesInput`<sup>Optional</sup> <a name="LowerCaseTableNamesInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNamesInput"></a>

```csharp
public string LowerCaseTableNamesInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParamGroupIdInput`<sup>Optional</sup> <a name="ParamGroupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupIdInput"></a>

```csharp
public string ParamGroupIdInput { get; }
```

- *Type:* string

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIpsInput"></a>

```csharp
public string[] PublicIpsInput { get; }
```

- *Type:* string[]

---

##### `RestoreFromBackupInput`<sup>Optional</sup> <a name="RestoreFromBackupInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackupInput"></a>

```csharp
public RdsInstanceV3RestoreFromBackup RestoreFromBackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---

##### `RestorePointInput`<sup>Optional</sup> <a name="RestorePointInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePointInput"></a>

```csharp
public RdsInstanceV3RestorePoint RestorePointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SslEnableInput`<sup>Optional</sup> <a name="SslEnableInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnableInput"></a>

```csharp
public object SslEnableInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volumeInput"></a>

```csharp
public RdsInstanceV3Volume VolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZone"></a>

```csharp
public string[] AvailabilityZone { get; }
```

- *Type:* string[]

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavor"></a>

```csharp
public string Flavor { get; }
```

- *Type:* string

---

##### `HaReplicationMode`<sup>Required</sup> <a name="HaReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationMode"></a>

```csharp
public string HaReplicationMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LowerCaseTableNames`<sup>Required</sup> <a name="LowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNames"></a>

```csharp
public string LowerCaseTableNames { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParamGroupId`<sup>Required</sup> <a name="ParamGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupId"></a>

```csharp
public string ParamGroupId { get; }
```

- *Type:* string

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIps"></a>

```csharp
public string[] PublicIps { get; }
```

- *Type:* string[]

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SslEnable`<sup>Required</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnable"></a>

```csharp
public object SslEnable { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tag"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tag { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsInstanceV3BackupStrategy <a name="RdsInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3BackupStrategy {
    string StartTime,
    double KeepDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#start_time RdsInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.keepDays">KeepDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#keep_days RdsInstanceV3#keep_days}. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#start_time RdsInstanceV3#start_time}.

---

##### `KeepDays`<sup>Optional</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.keepDays"></a>

```csharp
public double KeepDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#keep_days RdsInstanceV3#keep_days}.

---

### RdsInstanceV3Config <a name="RdsInstanceV3Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AvailabilityZone,
    RdsInstanceV3Db Db,
    string Flavor,
    string Name,
    string SecurityGroupId,
    string SubnetId,
    RdsInstanceV3Volume Volume,
    string VpcId,
    RdsInstanceV3BackupStrategy BackupStrategy = null,
    string HaReplicationMode = null,
    string Id = null,
    string LowerCaseTableNames = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string ParamGroupId = null,
    string[] PublicIps = null,
    RdsInstanceV3RestoreFromBackup RestoreFromBackup = null,
    RdsInstanceV3RestorePoint RestorePoint = null,
    object SslEnable = null,
    System.Collections.Generic.IDictionary<string, string> Tag = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    RdsInstanceV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.db">Db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.flavor">Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#name RdsInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.haReplicationMode">HaReplicationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#id RdsInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.paramGroupId">ParamGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.publicIps">PublicIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restoreFromBackup">RestoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | restore_from_backup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restorePoint">RestorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | restore_point block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.sslEnable">SslEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tag">Tag</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.availabilityZone"></a>

```csharp
public string[] AvailabilityZone { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}.

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.db"></a>

```csharp
public RdsInstanceV3Db Db { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#db RdsInstanceV3#db}

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.flavor"></a>

```csharp
public string Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#name RdsInstanceV3#name}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.volume"></a>

```csharp
public RdsInstanceV3Volume Volume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#volume RdsInstanceV3#volume}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}.

---

##### `BackupStrategy`<sup>Optional</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.backupStrategy"></a>

```csharp
public RdsInstanceV3BackupStrategy BackupStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#backup_strategy RdsInstanceV3#backup_strategy}

---

##### `HaReplicationMode`<sup>Optional</sup> <a name="HaReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.haReplicationMode"></a>

```csharp
public string HaReplicationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#id RdsInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LowerCaseTableNames`<sup>Optional</sup> <a name="LowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lowerCaseTableNames"></a>

```csharp
public string LowerCaseTableNames { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}.

---

##### `ParamGroupId`<sup>Optional</sup> <a name="ParamGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.paramGroupId"></a>

```csharp
public string ParamGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}.

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.publicIps"></a>

```csharp
public string[] PublicIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}.

---

##### `RestoreFromBackup`<sup>Optional</sup> <a name="RestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restoreFromBackup"></a>

```csharp
public RdsInstanceV3RestoreFromBackup RestoreFromBackup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#restore_from_backup RdsInstanceV3#restore_from_backup}

---

##### `RestorePoint`<sup>Optional</sup> <a name="RestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restorePoint"></a>

```csharp
public RdsInstanceV3RestorePoint RestorePoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

restore_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#restore_point RdsInstanceV3#restore_point}

---

##### `SslEnable`<sup>Optional</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.sslEnable"></a>

```csharp
public object SslEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tag"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tag { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.timeouts"></a>

```csharp
public RdsInstanceV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#timeouts RdsInstanceV3#timeouts}

---

### RdsInstanceV3Db <a name="RdsInstanceV3Db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3Db {
    string Password,
    double Port = null,
    string Type = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#password RdsInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#port RdsInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#version RdsInstanceV3#version}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#password RdsInstanceV3#password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#port RdsInstanceV3#port}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#version RdsInstanceV3#version}.

---

### RdsInstanceV3Nodes <a name="RdsInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3Nodes {

};
```


### RdsInstanceV3RestoreFromBackup <a name="RdsInstanceV3RestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3RestoreFromBackup {
    string SourceInstanceId,
    string Type,
    string BackupId = null,
    double RestoreTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.sourceInstanceId">SourceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#source_instance_id RdsInstanceV3#source_instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.restoreTime">RestoreTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}. |

---

##### `SourceInstanceId`<sup>Required</sup> <a name="SourceInstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.sourceInstanceId"></a>

```csharp
public string SourceInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#source_instance_id RdsInstanceV3#source_instance_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}.

---

##### `RestoreTime`<sup>Optional</sup> <a name="RestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.restoreTime"></a>

```csharp
public double RestoreTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}.

---

### RdsInstanceV3RestorePoint <a name="RdsInstanceV3RestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3RestorePoint {
    string InstanceId,
    string BackupId = null,
    double RestoreTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#instance_id RdsInstanceV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.restoreTime">RestoreTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}. |

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#instance_id RdsInstanceV3#instance_id}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}.

---

##### `RestoreTime`<sup>Optional</sup> <a name="RestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.restoreTime"></a>

```csharp
public double RestoreTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}.

---

### RdsInstanceV3Timeouts <a name="RdsInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3Timeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#create RdsInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#update RdsInstanceV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#create RdsInstanceV3#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#update RdsInstanceV3#update}.

---

### RdsInstanceV3Volume <a name="RdsInstanceV3Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3Volume {
    double Size,
    string Type,
    string DiskEncryptionId = null,
    double LimitSize = null,
    double TriggerThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#size RdsInstanceV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.diskEncryptionId">DiskEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.limitSize">LimitSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#limit_size RdsInstanceV3#limit_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.triggerThreshold">TriggerThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#trigger_threshold RdsInstanceV3#trigger_threshold}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#size RdsInstanceV3#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `DiskEncryptionId`<sup>Optional</sup> <a name="DiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.diskEncryptionId"></a>

```csharp
public string DiskEncryptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}.

---

##### `LimitSize`<sup>Optional</sup> <a name="LimitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.limitSize"></a>

```csharp
public double LimitSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#limit_size RdsInstanceV3#limit_size}.

---

##### `TriggerThreshold`<sup>Optional</sup> <a name="TriggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.triggerThreshold"></a>

```csharp
public double TriggerThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/rds_instance_v3#trigger_threshold RdsInstanceV3#trigger_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsInstanceV3BackupStrategyOutputReference <a name="RdsInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3BackupStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetKeepDays">ResetKeepDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepDays` <a name="ResetKeepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```csharp
private void ResetKeepDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDaysInput">KeepDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDays">KeepDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeepDaysInput`<sup>Optional</sup> <a name="KeepDaysInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```csharp
public double KeepDaysInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `KeepDays`<sup>Required</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```csharp
public double KeepDays { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV3BackupStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---


### RdsInstanceV3DbOutputReference <a name="RdsInstanceV3DbOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3DbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV3Db InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---


### RdsInstanceV3NodesList <a name="RdsInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3NodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get"></a>

```csharp
private RdsInstanceV3NodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RdsInstanceV3NodesOutputReference <a name="RdsInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3NodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes">RdsInstanceV3Nodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV3Nodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes">RdsInstanceV3Nodes</a>

---


### RdsInstanceV3RestoreFromBackupOutputReference <a name="RdsInstanceV3RestoreFromBackupOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3RestoreFromBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetRestoreTime">ResetRestoreTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetRestoreTime` <a name="ResetRestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetRestoreTime"></a>

```csharp
private void ResetRestoreTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTimeInput">RestoreTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceIdInput">SourceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTime">RestoreTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceId">SourceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `RestoreTimeInput`<sup>Optional</sup> <a name="RestoreTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTimeInput"></a>

```csharp
public double RestoreTimeInput { get; }
```

- *Type:* double

---

##### `SourceInstanceIdInput`<sup>Optional</sup> <a name="SourceInstanceIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceIdInput"></a>

```csharp
public string SourceInstanceIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `RestoreTime`<sup>Required</sup> <a name="RestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTime"></a>

```csharp
public double RestoreTime { get; }
```

- *Type:* double

---

##### `SourceInstanceId`<sup>Required</sup> <a name="SourceInstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceId"></a>

```csharp
public string SourceInstanceId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV3RestoreFromBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---


### RdsInstanceV3RestorePointOutputReference <a name="RdsInstanceV3RestorePointOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3RestorePointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetRestoreTime">ResetRestoreTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetRestoreTime` <a name="ResetRestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetRestoreTime"></a>

```csharp
private void ResetRestoreTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTimeInput">RestoreTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTime">RestoreTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `RestoreTimeInput`<sup>Optional</sup> <a name="RestoreTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTimeInput"></a>

```csharp
public double RestoreTimeInput { get; }
```

- *Type:* double

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `RestoreTime`<sup>Required</sup> <a name="RestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTime"></a>

```csharp
public double RestoreTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV3RestorePoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---


### RdsInstanceV3TimeoutsOutputReference <a name="RdsInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RdsInstanceV3VolumeOutputReference <a name="RdsInstanceV3VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV3VolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetDiskEncryptionId">ResetDiskEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetLimitSize">ResetLimitSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetTriggerThreshold">ResetTriggerThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionId` <a name="ResetDiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetDiskEncryptionId"></a>

```csharp
private void ResetDiskEncryptionId()
```

##### `ResetLimitSize` <a name="ResetLimitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetLimitSize"></a>

```csharp
private void ResetLimitSize()
```

##### `ResetTriggerThreshold` <a name="ResetTriggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetTriggerThreshold"></a>

```csharp
private void ResetTriggerThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionIdInput">DiskEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSizeInput">LimitSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThresholdInput">TriggerThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionId">DiskEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSize">LimitSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThreshold">TriggerThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionIdInput`<sup>Optional</sup> <a name="DiskEncryptionIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionIdInput"></a>

```csharp
public string DiskEncryptionIdInput { get; }
```

- *Type:* string

---

##### `LimitSizeInput`<sup>Optional</sup> <a name="LimitSizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSizeInput"></a>

```csharp
public double LimitSizeInput { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TriggerThresholdInput`<sup>Optional</sup> <a name="TriggerThresholdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThresholdInput"></a>

```csharp
public double TriggerThresholdInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionId`<sup>Required</sup> <a name="DiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionId"></a>

```csharp
public string DiskEncryptionId { get; }
```

- *Type:* string

---

##### `LimitSize`<sup>Required</sup> <a name="LimitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSize"></a>

```csharp
public double LimitSize { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `TriggerThreshold`<sup>Required</sup> <a name="TriggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThreshold"></a>

```csharp
public double TriggerThreshold { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV3Volume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---



