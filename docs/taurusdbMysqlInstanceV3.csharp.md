# `taurusdbMysqlInstanceV3` Submodule <a name="`taurusdbMysqlInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlInstanceV3 <a name="TaurusdbMysqlInstanceV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3 opentelekomcloud_taurusdb_mysql_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3(Construct Scope, string Id, TaurusdbMysqlInstanceV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config">TaurusdbMysqlInstanceV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config">TaurusdbMysqlInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy">PutBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore">PutDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetAvailabilityZoneMode">ResetAvailabilityZoneMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetBackupStrategy">ResetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDedicatedResourceId">ResetDedicatedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetEnterpriseProjectId">ResetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetMasterAvailabilityZone">ResetMasterAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetReadReplicas">ResetReadReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringEnabled">ResetSecondsLevelMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringPeriod">ResetSecondsLevelMonitoringPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTableNameCaseSensitivity">ResetTableNameCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupStrategy` <a name="PutBackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy"></a>

```csharp
private void PutBackupStrategy(TaurusdbMysqlInstanceV3BackupStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---

##### `PutDatastore` <a name="PutDatastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore"></a>

```csharp
private void PutDatastore(TaurusdbMysqlInstanceV3Datastore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts"></a>

```csharp
private void PutTimeouts(TaurusdbMysqlInstanceV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---

##### `ResetAvailabilityZoneMode` <a name="ResetAvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetAvailabilityZoneMode"></a>

```csharp
private void ResetAvailabilityZoneMode()
```

##### `ResetBackupStrategy` <a name="ResetBackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetBackupStrategy"></a>

```csharp
private void ResetBackupStrategy()
```

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetConfigurationId"></a>

```csharp
private void ResetConfigurationId()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDatastore"></a>

```csharp
private void ResetDatastore()
```

##### `ResetDedicatedResourceId` <a name="ResetDedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDedicatedResourceId"></a>

```csharp
private void ResetDedicatedResourceId()
```

##### `ResetEnterpriseProjectId` <a name="ResetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetEnterpriseProjectId"></a>

```csharp
private void ResetEnterpriseProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMasterAvailabilityZone` <a name="ResetMasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetMasterAvailabilityZone"></a>

```csharp
private void ResetMasterAvailabilityZone()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetReadReplicas` <a name="ResetReadReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetReadReplicas"></a>

```csharp
private void ResetReadReplicas()
```

##### `ResetSecondsLevelMonitoringEnabled` <a name="ResetSecondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringEnabled"></a>

```csharp
private void ResetSecondsLevelMonitoringEnabled()
```

##### `ResetSecondsLevelMonitoringPeriod` <a name="ResetSecondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringPeriod"></a>

```csharp
private void ResetSecondsLevelMonitoringPeriod()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetTableNameCaseSensitivity` <a name="ResetTableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTableNameCaseSensitivity"></a>

```csharp
private void ResetTableNameCaseSensitivity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlInstanceV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlInstanceV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlInstanceV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlInstanceV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TaurusdbMysqlInstanceV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TaurusdbMysqlInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference">TaurusdbMysqlInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference">TaurusdbMysqlInstanceV3DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList">TaurusdbMysqlInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateDnsName">PrivateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateWriteIp">PrivateWriteIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference">TaurusdbMysqlInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneModeInput">AvailabilityZoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategyInput">BackupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastoreInput">DatastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceIdInput">DedicatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavorInput">FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZoneInput">MasterAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicasInput">ReadReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabledInput">SecondsLevelMonitoringEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriodInput">SecondsLevelMonitoringPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivityInput">TableNameCaseSensitivityInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneMode">AvailabilityZoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceId">DedicatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavor">Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZone">MasterAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicas">ReadReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabled">SecondsLevelMonitoringEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriod">SecondsLevelMonitoringPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivity">TableNameCaseSensitivity</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BackupStrategy`<sup>Required</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategy"></a>

```csharp
public TaurusdbMysqlInstanceV3BackupStrategyOutputReference BackupStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference">TaurusdbMysqlInstanceV3BackupStrategyOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastore"></a>

```csharp
public TaurusdbMysqlInstanceV3DatastoreOutputReference Datastore { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference">TaurusdbMysqlInstanceV3DatastoreOutputReference</a>

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nodes"></a>

```csharp
public TaurusdbMysqlInstanceV3NodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList">TaurusdbMysqlInstanceV3NodesList</a>

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateDnsName"></a>

```csharp
public string PrivateDnsName { get; }
```

- *Type:* string

---

##### `PrivateWriteIp`<sup>Required</sup> <a name="PrivateWriteIp" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateWriteIp"></a>

```csharp
public string PrivateWriteIp { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeouts"></a>

```csharp
public TaurusdbMysqlInstanceV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference">TaurusdbMysqlInstanceV3TimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AvailabilityZoneModeInput`<sup>Optional</sup> <a name="AvailabilityZoneModeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneModeInput"></a>

```csharp
public string AvailabilityZoneModeInput { get; }
```

- *Type:* string

---

##### `BackupStrategyInput`<sup>Optional</sup> <a name="BackupStrategyInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategyInput"></a>

```csharp
public TaurusdbMysqlInstanceV3BackupStrategy BackupStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastoreInput"></a>

```csharp
public TaurusdbMysqlInstanceV3Datastore DatastoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---

##### `DedicatedResourceIdInput`<sup>Optional</sup> <a name="DedicatedResourceIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceIdInput"></a>

```csharp
public string DedicatedResourceIdInput { get; }
```

- *Type:* string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectIdInput"></a>

```csharp
public string EnterpriseProjectIdInput { get; }
```

- *Type:* string

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavorInput"></a>

```csharp
public string FlavorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MasterAvailabilityZoneInput`<sup>Optional</sup> <a name="MasterAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZoneInput"></a>

```csharp
public string MasterAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ReadReplicasInput`<sup>Optional</sup> <a name="ReadReplicasInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicasInput"></a>

```csharp
public double ReadReplicasInput { get; }
```

- *Type:* double

---

##### `SecondsLevelMonitoringEnabledInput`<sup>Optional</sup> <a name="SecondsLevelMonitoringEnabledInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabledInput"></a>

```csharp
public bool|IResolvable SecondsLevelMonitoringEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecondsLevelMonitoringPeriodInput`<sup>Optional</sup> <a name="SecondsLevelMonitoringPeriodInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriodInput"></a>

```csharp
public double SecondsLevelMonitoringPeriodInput { get; }
```

- *Type:* double

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TableNameCaseSensitivityInput`<sup>Optional</sup> <a name="TableNameCaseSensitivityInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivityInput"></a>

```csharp
public bool|IResolvable TableNameCaseSensitivityInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeoutsInput"></a>

```csharp
public IResolvable|TaurusdbMysqlInstanceV3Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneMode`<sup>Required</sup> <a name="AvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneMode"></a>

```csharp
public string AvailabilityZoneMode { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `DedicatedResourceId`<sup>Required</sup> <a name="DedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceId"></a>

```csharp
public string DedicatedResourceId { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavor"></a>

```csharp
public string Flavor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MasterAvailabilityZone`<sup>Required</sup> <a name="MasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZone"></a>

```csharp
public string MasterAvailabilityZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ReadReplicas`<sup>Required</sup> <a name="ReadReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicas"></a>

```csharp
public double ReadReplicas { get; }
```

- *Type:* double

---

##### `SecondsLevelMonitoringEnabled`<sup>Required</sup> <a name="SecondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabled"></a>

```csharp
public bool|IResolvable SecondsLevelMonitoringEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecondsLevelMonitoringPeriod`<sup>Required</sup> <a name="SecondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriod"></a>

```csharp
public double SecondsLevelMonitoringPeriod { get; }
```

- *Type:* double

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TableNameCaseSensitivity`<sup>Required</sup> <a name="TableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivity"></a>

```csharp
public bool|IResolvable TableNameCaseSensitivity { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlInstanceV3BackupStrategy <a name="TaurusdbMysqlInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3BackupStrategy {
    string StartTime,
    double KeepDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.keepDays">KeepDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}.

---

##### `KeepDays`<sup>Optional</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.keepDays"></a>

```csharp
public double KeepDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}.

---

### TaurusdbMysqlInstanceV3Config <a name="TaurusdbMysqlInstanceV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Flavor,
    string Name,
    string Password,
    string SubnetId,
    string VpcId,
    string AvailabilityZoneMode = null,
    TaurusdbMysqlInstanceV3BackupStrategy BackupStrategy = null,
    string ConfigurationId = null,
    TaurusdbMysqlInstanceV3Datastore Datastore = null,
    string DedicatedResourceId = null,
    string EnterpriseProjectId = null,
    string Id = null,
    string MasterAvailabilityZone = null,
    double Port = null,
    double ReadReplicas = null,
    bool|IResolvable SecondsLevelMonitoringEnabled = null,
    double SecondsLevelMonitoringPeriod = null,
    string SecurityGroupId = null,
    bool|IResolvable TableNameCaseSensitivity = null,
    TaurusdbMysqlInstanceV3Timeouts Timeouts = null,
    string TimeZone = null,
    double VolumeSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.flavor">Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.availabilityZoneMode">AvailabilityZoneMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dedicatedResourceId">DedicatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.masterAvailabilityZone">MasterAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.readReplicas">ReadReplicas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringEnabled">SecondsLevelMonitoringEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringPeriod">SecondsLevelMonitoringPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.tableNameCaseSensitivity">TableNameCaseSensitivity</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.flavor"></a>

```csharp
public string Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}.

---

##### `AvailabilityZoneMode`<sup>Optional</sup> <a name="AvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.availabilityZoneMode"></a>

```csharp
public string AvailabilityZoneMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}.

---

##### `BackupStrategy`<sup>Optional</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.backupStrategy"></a>

```csharp
public TaurusdbMysqlInstanceV3BackupStrategy BackupStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#backup_strategy TaurusdbMysqlInstanceV3#backup_strategy}

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}.

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.datastore"></a>

```csharp
public TaurusdbMysqlInstanceV3Datastore Datastore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#datastore TaurusdbMysqlInstanceV3#datastore}

---

##### `DedicatedResourceId`<sup>Optional</sup> <a name="DedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dedicatedResourceId"></a>

```csharp
public string DedicatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}.

---

##### `EnterpriseProjectId`<sup>Optional</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MasterAvailabilityZone`<sup>Optional</sup> <a name="MasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.masterAvailabilityZone"></a>

```csharp
public string MasterAvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}.

---

##### `ReadReplicas`<sup>Optional</sup> <a name="ReadReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.readReplicas"></a>

```csharp
public double ReadReplicas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}.

---

##### `SecondsLevelMonitoringEnabled`<sup>Optional</sup> <a name="SecondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringEnabled"></a>

```csharp
public bool|IResolvable SecondsLevelMonitoringEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}.

---

##### `SecondsLevelMonitoringPeriod`<sup>Optional</sup> <a name="SecondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringPeriod"></a>

```csharp
public double SecondsLevelMonitoringPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}.

---

##### `TableNameCaseSensitivity`<sup>Optional</sup> <a name="TableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.tableNameCaseSensitivity"></a>

```csharp
public bool|IResolvable TableNameCaseSensitivity { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeouts"></a>

```csharp
public TaurusdbMysqlInstanceV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#timeouts TaurusdbMysqlInstanceV3#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}.

---

### TaurusdbMysqlInstanceV3Datastore <a name="TaurusdbMysqlInstanceV3Datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3Datastore {
    string Engine,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}. |

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}.

---

### TaurusdbMysqlInstanceV3Nodes <a name="TaurusdbMysqlInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3Nodes {

};
```


### TaurusdbMysqlInstanceV3Timeouts <a name="TaurusdbMysqlInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlInstanceV3BackupStrategyOutputReference <a name="TaurusdbMysqlInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3BackupStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays">ResetKeepDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepDays` <a name="ResetKeepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```csharp
private void ResetKeepDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput">KeepDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays">KeepDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeepDaysInput`<sup>Optional</sup> <a name="KeepDaysInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```csharp
public double KeepDaysInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `KeepDays`<sup>Required</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```csharp
public double KeepDays { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```csharp
public TaurusdbMysqlInstanceV3BackupStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---


### TaurusdbMysqlInstanceV3DatastoreOutputReference <a name="TaurusdbMysqlInstanceV3DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3DatastoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.internalValue"></a>

```csharp
public TaurusdbMysqlInstanceV3Datastore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---


### TaurusdbMysqlInstanceV3NodesList <a name="TaurusdbMysqlInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3NodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get"></a>

```csharp
private TaurusdbMysqlInstanceV3NodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### TaurusdbMysqlInstanceV3NodesOutputReference <a name="TaurusdbMysqlInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3NodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.privateReadIp">PrivateReadIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes">TaurusdbMysqlInstanceV3Nodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateReadIp`<sup>Required</sup> <a name="PrivateReadIp" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.privateReadIp"></a>

```csharp
public string PrivateReadIp { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.internalValue"></a>

```csharp
public TaurusdbMysqlInstanceV3Nodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes">TaurusdbMysqlInstanceV3Nodes</a>

---


### TaurusdbMysqlInstanceV3TimeoutsOutputReference <a name="TaurusdbMysqlInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlInstanceV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TaurusdbMysqlInstanceV3Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---



