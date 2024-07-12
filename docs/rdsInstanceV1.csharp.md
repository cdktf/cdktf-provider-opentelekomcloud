# `rdsInstanceV1` Submodule <a name="`rdsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsInstanceV1 <a name="RdsInstanceV1" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1 opentelekomcloud_rds_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1(Construct Scope, string Id, RdsInstanceV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config">RdsInstanceV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config">RdsInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putBackupstrategy">PutBackupstrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putDatastore">PutDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putHa">PutHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putNics">PutNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putSecuritygroup">PutSecuritygroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetBackupstrategy">ResetBackupstrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetDbport">ResetDbport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetHa">ResetHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupstrategy` <a name="PutBackupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putBackupstrategy"></a>

```csharp
private void PutBackupstrategy(RdsInstanceV1Backupstrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putBackupstrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

---

##### `PutDatastore` <a name="PutDatastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putDatastore"></a>

```csharp
private void PutDatastore(RdsInstanceV1Datastore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

---

##### `PutHa` <a name="PutHa" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putHa"></a>

```csharp
private void PutHa(RdsInstanceV1Ha Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putHa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

---

##### `PutNics` <a name="PutNics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putNics"></a>

```csharp
private void PutNics(RdsInstanceV1Nics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putNics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

---

##### `PutSecuritygroup` <a name="PutSecuritygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putSecuritygroup"></a>

```csharp
private void PutSecuritygroup(RdsInstanceV1Securitygroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putSecuritygroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putTimeouts"></a>

```csharp
private void PutTimeouts(RdsInstanceV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putVolume"></a>

```csharp
private void PutVolume(RdsInstanceV1Volume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

---

##### `ResetBackupstrategy` <a name="ResetBackupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetBackupstrategy"></a>

```csharp
private void ResetBackupstrategy()
```

##### `ResetDbport` <a name="ResetDbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetDbport"></a>

```csharp
private void ResetDbport()
```

##### `ResetHa` <a name="ResetHa" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetHa"></a>

```csharp
private void ResetHa()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsInstanceV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RdsInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsInstanceV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RdsInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategy">Backupstrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference">RdsInstanceV1BackupstrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference">RdsInstanceV1DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.ha">Ha</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference">RdsInstanceV1HaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nics">Nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference">RdsInstanceV1NicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroup">Securitygroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference">RdsInstanceV1SecuritygroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference">RdsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference">RdsInstanceV1VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzoneInput">AvailabilityzoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategyInput">BackupstrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastoreInput">DatastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbportInput">DbportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpdInput">DbrtpdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorrefInput">FlavorrefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.haInput">HaInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nicsInput">NicsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroupInput">SecuritygroupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tagInput">TagInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpcInput">VpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzone">Availabilityzone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbport">Dbport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpd">Dbrtpd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorref">Flavorref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tag">Tag</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpc">Vpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backupstrategy`<sup>Required</sup> <a name="Backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategy"></a>

```csharp
public RdsInstanceV1BackupstrategyOutputReference Backupstrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference">RdsInstanceV1BackupstrategyOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastore"></a>

```csharp
public RdsInstanceV1DatastoreOutputReference Datastore { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference">RdsInstanceV1DatastoreOutputReference</a>

---

##### `Ha`<sup>Required</sup> <a name="Ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.ha"></a>

```csharp
public RdsInstanceV1HaOutputReference Ha { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference">RdsInstanceV1HaOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Nics`<sup>Required</sup> <a name="Nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nics"></a>

```csharp
public RdsInstanceV1NicsOutputReference Nics { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference">RdsInstanceV1NicsOutputReference</a>

---

##### `Securitygroup`<sup>Required</sup> <a name="Securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroup"></a>

```csharp
public RdsInstanceV1SecuritygroupOutputReference Securitygroup { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference">RdsInstanceV1SecuritygroupOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeouts"></a>

```csharp
public RdsInstanceV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference">RdsInstanceV1TimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volume"></a>

```csharp
public RdsInstanceV1VolumeOutputReference Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference">RdsInstanceV1VolumeOutputReference</a>

---

##### `AvailabilityzoneInput`<sup>Optional</sup> <a name="AvailabilityzoneInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzoneInput"></a>

```csharp
public string AvailabilityzoneInput { get; }
```

- *Type:* string

---

##### `BackupstrategyInput`<sup>Optional</sup> <a name="BackupstrategyInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategyInput"></a>

```csharp
public RdsInstanceV1Backupstrategy BackupstrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastoreInput"></a>

```csharp
public RdsInstanceV1Datastore DatastoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

---

##### `DbportInput`<sup>Optional</sup> <a name="DbportInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbportInput"></a>

```csharp
public string DbportInput { get; }
```

- *Type:* string

---

##### `DbrtpdInput`<sup>Optional</sup> <a name="DbrtpdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpdInput"></a>

```csharp
public string DbrtpdInput { get; }
```

- *Type:* string

---

##### `FlavorrefInput`<sup>Optional</sup> <a name="FlavorrefInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorrefInput"></a>

```csharp
public string FlavorrefInput { get; }
```

- *Type:* string

---

##### `HaInput`<sup>Optional</sup> <a name="HaInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.haInput"></a>

```csharp
public RdsInstanceV1Ha HaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NicsInput`<sup>Optional</sup> <a name="NicsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nicsInput"></a>

```csharp
public RdsInstanceV1Nics NicsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecuritygroupInput`<sup>Optional</sup> <a name="SecuritygroupInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroupInput"></a>

```csharp
public RdsInstanceV1Securitygroup SecuritygroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tagInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volumeInput"></a>

```csharp
public RdsInstanceV1Volume VolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpcInput"></a>

```csharp
public string VpcInput { get; }
```

- *Type:* string

---

##### `Availabilityzone`<sup>Required</sup> <a name="Availabilityzone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzone"></a>

```csharp
public string Availabilityzone { get; }
```

- *Type:* string

---

##### `Dbport`<sup>Required</sup> <a name="Dbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbport"></a>

```csharp
public string Dbport { get; }
```

- *Type:* string

---

##### `Dbrtpd`<sup>Required</sup> <a name="Dbrtpd" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpd"></a>

```csharp
public string Dbrtpd { get; }
```

- *Type:* string

---

##### `Flavorref`<sup>Required</sup> <a name="Flavorref" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorref"></a>

```csharp
public string Flavorref { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tag"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tag { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpc"></a>

```csharp
public string Vpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsInstanceV1Backupstrategy <a name="RdsInstanceV1Backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Backupstrategy {
    double Keepdays = null,
    string Starttime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.keepdays">Keepdays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#keepdays RdsInstanceV1#keepdays}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.starttime">Starttime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#starttime RdsInstanceV1#starttime}. |

---

##### `Keepdays`<sup>Optional</sup> <a name="Keepdays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.keepdays"></a>

```csharp
public double Keepdays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#keepdays RdsInstanceV1#keepdays}.

---

##### `Starttime`<sup>Optional</sup> <a name="Starttime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.starttime"></a>

```csharp
public string Starttime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#starttime RdsInstanceV1#starttime}.

---

### RdsInstanceV1Config <a name="RdsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Availabilityzone,
    RdsInstanceV1Datastore Datastore,
    string Dbrtpd,
    string Flavorref,
    RdsInstanceV1Nics Nics,
    RdsInstanceV1Securitygroup Securitygroup,
    RdsInstanceV1Volume Volume,
    string Vpc,
    RdsInstanceV1Backupstrategy Backupstrategy = null,
    string Dbport = null,
    RdsInstanceV1Ha Ha = null,
    string Id = null,
    string Name = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tag = null,
    RdsInstanceV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.availabilityzone">Availabilityzone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbrtpd">Dbrtpd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.flavorref">Flavorref</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.nics">Nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | nics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.securitygroup">Securitygroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | securitygroup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.vpc">Vpc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.backupstrategy">Backupstrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | backupstrategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbport">Dbport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.ha">Ha</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | ha block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#id RdsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#name RdsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#region RdsInstanceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.tag">Tag</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#tag RdsInstanceV1#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Availabilityzone`<sup>Required</sup> <a name="Availabilityzone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.availabilityzone"></a>

```csharp
public string Availabilityzone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}.

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.datastore"></a>

```csharp
public RdsInstanceV1Datastore Datastore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#datastore RdsInstanceV1#datastore}

---

##### `Dbrtpd`<sup>Required</sup> <a name="Dbrtpd" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbrtpd"></a>

```csharp
public string Dbrtpd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}.

---

##### `Flavorref`<sup>Required</sup> <a name="Flavorref" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.flavorref"></a>

```csharp
public string Flavorref { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}.

---

##### `Nics`<sup>Required</sup> <a name="Nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.nics"></a>

```csharp
public RdsInstanceV1Nics Nics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#nics RdsInstanceV1#nics}

---

##### `Securitygroup`<sup>Required</sup> <a name="Securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.securitygroup"></a>

```csharp
public RdsInstanceV1Securitygroup Securitygroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

securitygroup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#securitygroup RdsInstanceV1#securitygroup}

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.volume"></a>

```csharp
public RdsInstanceV1Volume Volume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#volume RdsInstanceV1#volume}

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.vpc"></a>

```csharp
public string Vpc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}.

---

##### `Backupstrategy`<sup>Optional</sup> <a name="Backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.backupstrategy"></a>

```csharp
public RdsInstanceV1Backupstrategy Backupstrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

backupstrategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#backupstrategy RdsInstanceV1#backupstrategy}

---

##### `Dbport`<sup>Optional</sup> <a name="Dbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbport"></a>

```csharp
public string Dbport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}.

---

##### `Ha`<sup>Optional</sup> <a name="Ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.ha"></a>

```csharp
public RdsInstanceV1Ha Ha { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

ha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#ha RdsInstanceV1#ha}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#id RdsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#name RdsInstanceV1#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#region RdsInstanceV1#region}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.tag"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tag { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#tag RdsInstanceV1#tag}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.timeouts"></a>

```csharp
public RdsInstanceV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#timeouts RdsInstanceV1#timeouts}

---

### RdsInstanceV1Datastore <a name="RdsInstanceV1Datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Datastore {
    string Type,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#type RdsInstanceV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#version RdsInstanceV1#version}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#type RdsInstanceV1#type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#version RdsInstanceV1#version}.

---

### RdsInstanceV1Ha <a name="RdsInstanceV1Ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Ha {
    object Enable = null,
    string Replicationmode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#enable RdsInstanceV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.replicationmode">Replicationmode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#replicationmode RdsInstanceV1#replicationmode}. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#enable RdsInstanceV1#enable}.

---

##### `Replicationmode`<sup>Optional</sup> <a name="Replicationmode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.replicationmode"></a>

```csharp
public string Replicationmode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#replicationmode RdsInstanceV1#replicationmode}.

---

### RdsInstanceV1Nics <a name="RdsInstanceV1Nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Nics {
    string Subnetid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics.property.subnetid">Subnetid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#subnetid RdsInstanceV1#subnetid}. |

---

##### `Subnetid`<sup>Required</sup> <a name="Subnetid" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics.property.subnetid"></a>

```csharp
public string Subnetid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#subnetid RdsInstanceV1#subnetid}.

---

### RdsInstanceV1Securitygroup <a name="RdsInstanceV1Securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Securitygroup {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#id RdsInstanceV1#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#id RdsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RdsInstanceV1Timeouts <a name="RdsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#create RdsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#delete RdsInstanceV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#create RdsInstanceV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#delete RdsInstanceV1#delete}.

---

### RdsInstanceV1Volume <a name="RdsInstanceV1Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1Volume {
    double Size,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#size RdsInstanceV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#type RdsInstanceV1#type}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#size RdsInstanceV1#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/rds_instance_v1#type RdsInstanceV1#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsInstanceV1BackupstrategyOutputReference <a name="RdsInstanceV1BackupstrategyOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1BackupstrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetKeepdays">ResetKeepdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetStarttime">ResetStarttime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepdays` <a name="ResetKeepdays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetKeepdays"></a>

```csharp
private void ResetKeepdays()
```

##### `ResetStarttime` <a name="ResetStarttime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetStarttime"></a>

```csharp
private void ResetStarttime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdaysInput">KeepdaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttimeInput">StarttimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdays">Keepdays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttime">Starttime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeepdaysInput`<sup>Optional</sup> <a name="KeepdaysInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdaysInput"></a>

```csharp
public double KeepdaysInput { get; }
```

- *Type:* double

---

##### `StarttimeInput`<sup>Optional</sup> <a name="StarttimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttimeInput"></a>

```csharp
public string StarttimeInput { get; }
```

- *Type:* string

---

##### `Keepdays`<sup>Required</sup> <a name="Keepdays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdays"></a>

```csharp
public double Keepdays { get; }
```

- *Type:* double

---

##### `Starttime`<sup>Required</sup> <a name="Starttime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttime"></a>

```csharp
public string Starttime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV1Backupstrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

---


### RdsInstanceV1DatastoreOutputReference <a name="RdsInstanceV1DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1DatastoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV1Datastore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

---


### RdsInstanceV1HaOutputReference <a name="RdsInstanceV1HaOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1HaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetReplicationmode">ResetReplicationmode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetReplicationmode` <a name="ResetReplicationmode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetReplicationmode"></a>

```csharp
private void ResetReplicationmode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmodeInput">ReplicationmodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmode">Replicationmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `ReplicationmodeInput`<sup>Optional</sup> <a name="ReplicationmodeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmodeInput"></a>

```csharp
public string ReplicationmodeInput { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Replicationmode`<sup>Required</sup> <a name="Replicationmode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmode"></a>

```csharp
public string Replicationmode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV1Ha InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

---


### RdsInstanceV1NicsOutputReference <a name="RdsInstanceV1NicsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1NicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetidInput">SubnetidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetid">Subnetid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetidInput`<sup>Optional</sup> <a name="SubnetidInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetidInput"></a>

```csharp
public string SubnetidInput { get; }
```

- *Type:* string

---

##### `Subnetid`<sup>Required</sup> <a name="Subnetid" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetid"></a>

```csharp
public string Subnetid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV1Nics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

---


### RdsInstanceV1SecuritygroupOutputReference <a name="RdsInstanceV1SecuritygroupOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1SecuritygroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV1Securitygroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

---


### RdsInstanceV1TimeoutsOutputReference <a name="RdsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RdsInstanceV1VolumeOutputReference <a name="RdsInstanceV1VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsInstanceV1VolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.internalValue"></a>

```csharp
public RdsInstanceV1Volume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

---



