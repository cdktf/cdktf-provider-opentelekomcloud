# `gaussdbMysqlInstanceV3` Submodule <a name="`gaussdbMysqlInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GaussdbMysqlInstanceV3 <a name="GaussdbMysqlInstanceV3" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3 opentelekomcloud_gaussdb_mysql_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3(Construct Scope, string Id, GaussdbMysqlInstanceV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config">GaussdbMysqlInstanceV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config">GaussdbMysqlInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putBackupStrategy">PutBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putDatastore">PutDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetAvailabilityZoneMode">ResetAvailabilityZoneMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetBackupStrategy">ResetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetConfigurationName">ResetConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetDedicatedResourceId">ResetDedicatedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetDedicatedResourceName">ResetDedicatedResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetMasterAvailabilityZone">ResetMasterAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetReadReplicas">ResetReadReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupStrategy` <a name="PutBackupStrategy" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putBackupStrategy"></a>

```csharp
private void PutBackupStrategy(GaussdbMysqlInstanceV3BackupStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a>

---

##### `PutDatastore` <a name="PutDatastore" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putDatastore"></a>

```csharp
private void PutDatastore(GaussdbMysqlInstanceV3Datastore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putTimeouts"></a>

```csharp
private void PutTimeouts(GaussdbMysqlInstanceV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts">GaussdbMysqlInstanceV3Timeouts</a>

---

##### `ResetAvailabilityZoneMode` <a name="ResetAvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetAvailabilityZoneMode"></a>

```csharp
private void ResetAvailabilityZoneMode()
```

##### `ResetBackupStrategy` <a name="ResetBackupStrategy" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetBackupStrategy"></a>

```csharp
private void ResetBackupStrategy()
```

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetConfigurationId"></a>

```csharp
private void ResetConfigurationId()
```

##### `ResetConfigurationName` <a name="ResetConfigurationName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetConfigurationName"></a>

```csharp
private void ResetConfigurationName()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetDatastore"></a>

```csharp
private void ResetDatastore()
```

##### `ResetDedicatedResourceId` <a name="ResetDedicatedResourceId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetDedicatedResourceId"></a>

```csharp
private void ResetDedicatedResourceId()
```

##### `ResetDedicatedResourceName` <a name="ResetDedicatedResourceName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetDedicatedResourceName"></a>

```csharp
private void ResetDedicatedResourceName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMasterAvailabilityZone` <a name="ResetMasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetMasterAvailabilityZone"></a>

```csharp
private void ResetMasterAvailabilityZone()
```

##### `ResetReadReplicas` <a name="ResetReadReplicas" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetReadReplicas"></a>

```csharp
private void ResetReadReplicas()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GaussdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

GaussdbMysqlInstanceV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

GaussdbMysqlInstanceV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

GaussdbMysqlInstanceV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

GaussdbMysqlInstanceV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GaussdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GaussdbMysqlInstanceV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GaussdbMysqlInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GaussdbMysqlInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference">GaussdbMysqlInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.chargingMode">ChargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference">GaussdbMysqlInstanceV3DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList">GaussdbMysqlInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.privateWriteIp">PrivateWriteIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference">GaussdbMysqlInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.availabilityZoneModeInput">AvailabilityZoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.backupStrategyInput">BackupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationNameInput">ConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.datastoreInput">DatastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceIdInput">DedicatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceNameInput">DedicatedResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.flavorInput">FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.masterAvailabilityZoneInput">MasterAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.readReplicasInput">ReadReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.availabilityZoneMode">AvailabilityZoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationName">ConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceId">DedicatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceName">DedicatedResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.flavor">Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.masterAvailabilityZone">MasterAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.readReplicas">ReadReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `BackupStrategy`<sup>Required</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.backupStrategy"></a>

```csharp
public GaussdbMysqlInstanceV3BackupStrategyOutputReference BackupStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference">GaussdbMysqlInstanceV3BackupStrategyOutputReference</a>

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.chargingMode"></a>

```csharp
public string ChargingMode { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.datastore"></a>

```csharp
public GaussdbMysqlInstanceV3DatastoreOutputReference Datastore { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference">GaussdbMysqlInstanceV3DatastoreOutputReference</a>

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.nodes"></a>

```csharp
public GaussdbMysqlInstanceV3NodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList">GaussdbMysqlInstanceV3NodesList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateWriteIp`<sup>Required</sup> <a name="PrivateWriteIp" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.privateWriteIp"></a>

```csharp
public string[] PrivateWriteIp { get; }
```

- *Type:* string[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeouts"></a>

```csharp
public GaussdbMysqlInstanceV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference">GaussdbMysqlInstanceV3TimeoutsOutputReference</a>

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `AvailabilityZoneModeInput`<sup>Optional</sup> <a name="AvailabilityZoneModeInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.availabilityZoneModeInput"></a>

```csharp
public string AvailabilityZoneModeInput { get; }
```

- *Type:* string

---

##### `BackupStrategyInput`<sup>Optional</sup> <a name="BackupStrategyInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.backupStrategyInput"></a>

```csharp
public GaussdbMysqlInstanceV3BackupStrategy BackupStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a>

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationNameInput`<sup>Optional</sup> <a name="ConfigurationNameInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationNameInput"></a>

```csharp
public string ConfigurationNameInput { get; }
```

- *Type:* string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.datastoreInput"></a>

```csharp
public GaussdbMysqlInstanceV3Datastore DatastoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a>

---

##### `DedicatedResourceIdInput`<sup>Optional</sup> <a name="DedicatedResourceIdInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceIdInput"></a>

```csharp
public string DedicatedResourceIdInput { get; }
```

- *Type:* string

---

##### `DedicatedResourceNameInput`<sup>Optional</sup> <a name="DedicatedResourceNameInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceNameInput"></a>

```csharp
public string DedicatedResourceNameInput { get; }
```

- *Type:* string

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.flavorInput"></a>

```csharp
public string FlavorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MasterAvailabilityZoneInput`<sup>Optional</sup> <a name="MasterAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.masterAvailabilityZoneInput"></a>

```csharp
public string MasterAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ReadReplicasInput`<sup>Optional</sup> <a name="ReadReplicasInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.readReplicasInput"></a>

```csharp
public double ReadReplicasInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneMode`<sup>Required</sup> <a name="AvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.availabilityZoneMode"></a>

```csharp
public string AvailabilityZoneMode { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.configurationName"></a>

```csharp
public string ConfigurationName { get; }
```

- *Type:* string

---

##### `DedicatedResourceId`<sup>Required</sup> <a name="DedicatedResourceId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceId"></a>

```csharp
public string DedicatedResourceId { get; }
```

- *Type:* string

---

##### `DedicatedResourceName`<sup>Required</sup> <a name="DedicatedResourceName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.dedicatedResourceName"></a>

```csharp
public string DedicatedResourceName { get; }
```

- *Type:* string

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.flavor"></a>

```csharp
public string Flavor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MasterAvailabilityZone`<sup>Required</sup> <a name="MasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.masterAvailabilityZone"></a>

```csharp
public string MasterAvailabilityZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ReadReplicas`<sup>Required</sup> <a name="ReadReplicas" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.readReplicas"></a>

```csharp
public double ReadReplicas { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GaussdbMysqlInstanceV3BackupStrategy <a name="GaussdbMysqlInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3BackupStrategy {
    string StartTime,
    double KeepDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#start_time GaussdbMysqlInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy.property.keepDays">KeepDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#keep_days GaussdbMysqlInstanceV3#keep_days}. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#start_time GaussdbMysqlInstanceV3#start_time}.

---

##### `KeepDays`<sup>Optional</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy.property.keepDays"></a>

```csharp
public double KeepDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#keep_days GaussdbMysqlInstanceV3#keep_days}.

---

### GaussdbMysqlInstanceV3Config <a name="GaussdbMysqlInstanceV3Config" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Flavor,
    string Name,
    string Password,
    string SubnetId,
    string VpcId,
    string AvailabilityZoneMode = null,
    GaussdbMysqlInstanceV3BackupStrategy BackupStrategy = null,
    string ConfigurationId = null,
    string ConfigurationName = null,
    GaussdbMysqlInstanceV3Datastore Datastore = null,
    string DedicatedResourceId = null,
    string DedicatedResourceName = null,
    string Id = null,
    string MasterAvailabilityZone = null,
    double ReadReplicas = null,
    string Region = null,
    string SecurityGroupId = null,
    GaussdbMysqlInstanceV3Timeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.flavor">Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#flavor GaussdbMysqlInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#name GaussdbMysqlInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#password GaussdbMysqlInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#subnet_id GaussdbMysqlInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#vpc_id GaussdbMysqlInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.availabilityZoneMode">AvailabilityZoneMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#availability_zone_mode GaussdbMysqlInstanceV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#configuration_id GaussdbMysqlInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.configurationName">ConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#configuration_name GaussdbMysqlInstanceV3#configuration_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.dedicatedResourceId">DedicatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#dedicated_resource_id GaussdbMysqlInstanceV3#dedicated_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.dedicatedResourceName">DedicatedResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#dedicated_resource_name GaussdbMysqlInstanceV3#dedicated_resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#id GaussdbMysqlInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.masterAvailabilityZone">MasterAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#master_availability_zone GaussdbMysqlInstanceV3#master_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.readReplicas">ReadReplicas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#read_replicas GaussdbMysqlInstanceV3#read_replicas}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#region GaussdbMysqlInstanceV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#security_group_id GaussdbMysqlInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts">GaussdbMysqlInstanceV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#time_zone GaussdbMysqlInstanceV3#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.flavor"></a>

```csharp
public string Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#flavor GaussdbMysqlInstanceV3#flavor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#name GaussdbMysqlInstanceV3#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#password GaussdbMysqlInstanceV3#password}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#subnet_id GaussdbMysqlInstanceV3#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#vpc_id GaussdbMysqlInstanceV3#vpc_id}.

---

##### `AvailabilityZoneMode`<sup>Optional</sup> <a name="AvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.availabilityZoneMode"></a>

```csharp
public string AvailabilityZoneMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#availability_zone_mode GaussdbMysqlInstanceV3#availability_zone_mode}.

---

##### `BackupStrategy`<sup>Optional</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.backupStrategy"></a>

```csharp
public GaussdbMysqlInstanceV3BackupStrategy BackupStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#backup_strategy GaussdbMysqlInstanceV3#backup_strategy}

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#configuration_id GaussdbMysqlInstanceV3#configuration_id}.

---

##### `ConfigurationName`<sup>Optional</sup> <a name="ConfigurationName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.configurationName"></a>

```csharp
public string ConfigurationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#configuration_name GaussdbMysqlInstanceV3#configuration_name}.

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.datastore"></a>

```csharp
public GaussdbMysqlInstanceV3Datastore Datastore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#datastore GaussdbMysqlInstanceV3#datastore}

---

##### `DedicatedResourceId`<sup>Optional</sup> <a name="DedicatedResourceId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.dedicatedResourceId"></a>

```csharp
public string DedicatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#dedicated_resource_id GaussdbMysqlInstanceV3#dedicated_resource_id}.

---

##### `DedicatedResourceName`<sup>Optional</sup> <a name="DedicatedResourceName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.dedicatedResourceName"></a>

```csharp
public string DedicatedResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#dedicated_resource_name GaussdbMysqlInstanceV3#dedicated_resource_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#id GaussdbMysqlInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MasterAvailabilityZone`<sup>Optional</sup> <a name="MasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.masterAvailabilityZone"></a>

```csharp
public string MasterAvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#master_availability_zone GaussdbMysqlInstanceV3#master_availability_zone}.

---

##### `ReadReplicas`<sup>Optional</sup> <a name="ReadReplicas" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.readReplicas"></a>

```csharp
public double ReadReplicas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#read_replicas GaussdbMysqlInstanceV3#read_replicas}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#region GaussdbMysqlInstanceV3#region}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#security_group_id GaussdbMysqlInstanceV3#security_group_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.timeouts"></a>

```csharp
public GaussdbMysqlInstanceV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts">GaussdbMysqlInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#timeouts GaussdbMysqlInstanceV3#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Config.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#time_zone GaussdbMysqlInstanceV3#time_zone}.

---

### GaussdbMysqlInstanceV3Datastore <a name="GaussdbMysqlInstanceV3Datastore" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3Datastore {
    string Engine,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#engine GaussdbMysqlInstanceV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#version GaussdbMysqlInstanceV3#version}. |

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#engine GaussdbMysqlInstanceV3#engine}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#version GaussdbMysqlInstanceV3#version}.

---

### GaussdbMysqlInstanceV3Nodes <a name="GaussdbMysqlInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Nodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3Nodes {

};
```


### GaussdbMysqlInstanceV3Timeouts <a name="GaussdbMysqlInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#create GaussdbMysqlInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#delete GaussdbMysqlInstanceV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#update GaussdbMysqlInstanceV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#create GaussdbMysqlInstanceV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#delete GaussdbMysqlInstanceV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/gaussdb_mysql_instance_v3#update GaussdbMysqlInstanceV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GaussdbMysqlInstanceV3BackupStrategyOutputReference <a name="GaussdbMysqlInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3BackupStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays">ResetKeepDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepDays` <a name="ResetKeepDays" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```csharp
private void ResetKeepDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput">KeepDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays">KeepDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeepDaysInput`<sup>Optional</sup> <a name="KeepDaysInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```csharp
public double KeepDaysInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `KeepDays`<sup>Required</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```csharp
public double KeepDays { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```csharp
public GaussdbMysqlInstanceV3BackupStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3BackupStrategy">GaussdbMysqlInstanceV3BackupStrategy</a>

---


### GaussdbMysqlInstanceV3DatastoreOutputReference <a name="GaussdbMysqlInstanceV3DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3DatastoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3DatastoreOutputReference.property.internalValue"></a>

```csharp
public GaussdbMysqlInstanceV3Datastore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Datastore">GaussdbMysqlInstanceV3Datastore</a>

---


### GaussdbMysqlInstanceV3NodesList <a name="GaussdbMysqlInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3NodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.get"></a>

```csharp
private GaussdbMysqlInstanceV3NodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GaussdbMysqlInstanceV3NodesOutputReference <a name="GaussdbMysqlInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3NodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.azCode">AzCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.flavorRef">FlavorRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.needRestart">NeedRestart</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.privateReadIps">PrivateReadIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.ram">Ram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.regionCode">RegionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.vcpus">Vcpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Nodes">GaussdbMysqlInstanceV3Nodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzCode`<sup>Required</sup> <a name="AzCode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.azCode"></a>

```csharp
public string AzCode { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `FlavorRef`<sup>Required</sup> <a name="FlavorRef" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.flavorRef"></a>

```csharp
public string FlavorRef { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.maxConnections"></a>

```csharp
public string MaxConnections { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NeedRestart`<sup>Required</sup> <a name="NeedRestart" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.needRestart"></a>

```csharp
public IResolvable NeedRestart { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `PrivateReadIps`<sup>Required</sup> <a name="PrivateReadIps" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.privateReadIps"></a>

```csharp
public string[] PrivateReadIps { get; }
```

- *Type:* string[]

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.ram"></a>

```csharp
public string Ram { get; }
```

- *Type:* string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.regionCode"></a>

```csharp
public string RegionCode { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.vcpus"></a>

```csharp
public string Vcpus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3NodesOutputReference.property.internalValue"></a>

```csharp
public GaussdbMysqlInstanceV3Nodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3Nodes">GaussdbMysqlInstanceV3Nodes</a>

---


### GaussdbMysqlInstanceV3TimeoutsOutputReference <a name="GaussdbMysqlInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new GaussdbMysqlInstanceV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.gaussdbMysqlInstanceV3.GaussdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



