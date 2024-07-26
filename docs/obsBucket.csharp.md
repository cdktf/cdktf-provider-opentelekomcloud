# `obsBucket` Submodule <a name="`obsBucket` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucket <a name="ObsBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket opentelekomcloud_obs_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucket(Construct Scope, string Id, ObsBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig">ObsBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig">ObsBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications">PutEventNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule">PutLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption">PutServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite">PutWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy">PutWormPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetEventNotifications">ResetEventNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLifecycleRule">ResetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetParallelFs">ResetParallelFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetUserDomainNames">ResetUserDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetVersioning">ResetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWebsite">ResetWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWormPolicy">ResetWormPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule"></a>

```csharp
private void PutCorsRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule.parameter.value"></a>

- *Type:* object

---

##### `PutEventNotifications` <a name="PutEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications"></a>

```csharp
private void PutEventNotifications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications.parameter.value"></a>

- *Type:* object

---

##### `PutLifecycleRule` <a name="PutLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule"></a>

```csharp
private void PutLifecycleRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule.parameter.value"></a>

- *Type:* object

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging"></a>

```csharp
private void PutLogging(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging.parameter.value"></a>

- *Type:* object

---

##### `PutServerSideEncryption` <a name="PutServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption"></a>

```csharp
private void PutServerSideEncryption(ObsBucketServerSideEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---

##### `PutWebsite` <a name="PutWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite"></a>

```csharp
private void PutWebsite(ObsBucketWebsite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---

##### `PutWormPolicy` <a name="PutWormPolicy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy"></a>

```csharp
private void PutWormPolicy(ObsBucketWormPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetEventNotifications` <a name="ResetEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetEventNotifications"></a>

```csharp
private void ResetEventNotifications()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleRule` <a name="ResetLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLifecycleRule"></a>

```csharp
private void ResetLifecycleRule()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetParallelFs` <a name="ResetParallelFs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetParallelFs"></a>

```csharp
private void ResetParallelFs()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetServerSideEncryption"></a>

```csharp
private void ResetServerSideEncryption()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserDomainNames` <a name="ResetUserDomainNames" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetUserDomainNames"></a>

```csharp
private void ResetUserDomainNames()
```

##### `ResetVersioning` <a name="ResetVersioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetVersioning"></a>

```csharp
private void ResetVersioning()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWebsite"></a>

```csharp
private void ResetWebsite()
```

##### `ResetWormPolicy` <a name="ResetWormPolicy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWormPolicy"></a>

```csharp
private void ResetWormPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObsBucket resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketDomainName">BucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketVersion">BucketVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList">ObsBucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotifications">EventNotifications</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList">ObsBucketEventNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRule">LifecycleRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList">ObsBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList">ObsBucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryption">ServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference">ObsBucketServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.website">Website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference">ObsBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicy">WormPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference">ObsBucketWormPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRuleInput">CorsRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotificationsInput">EventNotificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRuleInput">LifecycleRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.loggingInput">LoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFsInput">ParallelFsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNamesInput">UserDomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioningInput">VersioningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.websiteInput">WebsiteInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicyInput">WormPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFs">ParallelFs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNames">UserDomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioning">Versioning</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BucketDomainName`<sup>Required</sup> <a name="BucketDomainName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketDomainName"></a>

```csharp
public string BucketDomainName { get; }
```

- *Type:* string

---

##### `BucketVersion`<sup>Required</sup> <a name="BucketVersion" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketVersion"></a>

```csharp
public string BucketVersion { get; }
```

- *Type:* string

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRule"></a>

```csharp
public ObsBucketCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList">ObsBucketCorsRuleList</a>

---

##### `EventNotifications`<sup>Required</sup> <a name="EventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotifications"></a>

```csharp
public ObsBucketEventNotificationsList EventNotifications { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList">ObsBucketEventNotificationsList</a>

---

##### `LifecycleRule`<sup>Required</sup> <a name="LifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRule"></a>

```csharp
public ObsBucketLifecycleRuleList LifecycleRule { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList">ObsBucketLifecycleRuleList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.logging"></a>

```csharp
public ObsBucketLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList">ObsBucketLoggingList</a>

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryption"></a>

```csharp
public ObsBucketServerSideEncryptionOutputReference ServerSideEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference">ObsBucketServerSideEncryptionOutputReference</a>

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.website"></a>

```csharp
public ObsBucketWebsiteOutputReference Website { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference">ObsBucketWebsiteOutputReference</a>

---

##### `WormPolicy`<sup>Required</sup> <a name="WormPolicy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicy"></a>

```csharp
public ObsBucketWormPolicyOutputReference WormPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference">ObsBucketWormPolicyOutputReference</a>

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRuleInput"></a>

```csharp
public object CorsRuleInput { get; }
```

- *Type:* object

---

##### `EventNotificationsInput`<sup>Optional</sup> <a name="EventNotificationsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotificationsInput"></a>

```csharp
public object EventNotificationsInput { get; }
```

- *Type:* object

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleRuleInput`<sup>Optional</sup> <a name="LifecycleRuleInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRuleInput"></a>

```csharp
public object LifecycleRuleInput { get; }
```

- *Type:* object

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.loggingInput"></a>

```csharp
public object LoggingInput { get; }
```

- *Type:* object

---

##### `ParallelFsInput`<sup>Optional</sup> <a name="ParallelFsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFsInput"></a>

```csharp
public object ParallelFsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryptionInput"></a>

```csharp
public ObsBucketServerSideEncryption ServerSideEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserDomainNamesInput`<sup>Optional</sup> <a name="UserDomainNamesInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNamesInput"></a>

```csharp
public string[] UserDomainNamesInput { get; }
```

- *Type:* string[]

---

##### `VersioningInput`<sup>Optional</sup> <a name="VersioningInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioningInput"></a>

```csharp
public object VersioningInput { get; }
```

- *Type:* object

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.websiteInput"></a>

```csharp
public ObsBucketWebsite WebsiteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---

##### `WormPolicyInput`<sup>Optional</sup> <a name="WormPolicyInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicyInput"></a>

```csharp
public ObsBucketWormPolicy WormPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParallelFs`<sup>Required</sup> <a name="ParallelFs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFs"></a>

```csharp
public object ParallelFs { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserDomainNames`<sup>Required</sup> <a name="UserDomainNames" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNames"></a>

```csharp
public string[] UserDomainNames { get; }
```

- *Type:* string[]

---

##### `Versioning`<sup>Required</sup> <a name="Versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioning"></a>

```csharp
public object Versioning { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketConfig <a name="ObsBucketConfig" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Acl = null,
    object CorsRule = null,
    object EventNotifications = null,
    object ForceDestroy = null,
    string Id = null,
    object LifecycleRule = null,
    object Logging = null,
    object ParallelFs = null,
    string Region = null,
    ObsBucketServerSideEncryption ServerSideEncryption = null,
    string StorageClass = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string[] UserDomainNames = null,
    object Versioning = null,
    ObsBucketWebsite Website = null,
    ObsBucketWormPolicy WormPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#bucket ObsBucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#acl ObsBucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.corsRule">CorsRule</a></code> | <code>object</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.eventNotifications">EventNotifications</a></code> | <code>object</code> | event_notifications block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#id ObsBucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycleRule">LifecycleRule</a></code> | <code>object</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.logging">Logging</a></code> | <code>object</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.parallelFs">ParallelFs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#region ObsBucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#tags ObsBucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.userDomainNames">UserDomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#user_domain_names ObsBucket#user_domain_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.versioning">Versioning</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#versioning ObsBucket#versioning}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.website">Website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.wormPolicy">WormPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | worm_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#bucket ObsBucket#bucket}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#acl ObsBucket#acl}.

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.corsRule"></a>

```csharp
public object CorsRule { get; set; }
```

- *Type:* object

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#cors_rule ObsBucket#cors_rule}

---

##### `EventNotifications`<sup>Optional</sup> <a name="EventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.eventNotifications"></a>

```csharp
public object EventNotifications { get; set; }
```

- *Type:* object

event_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#event_notifications ObsBucket#event_notifications}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleRule`<sup>Optional</sup> <a name="LifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycleRule"></a>

```csharp
public object LifecycleRule { get; set; }
```

- *Type:* object

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#lifecycle_rule ObsBucket#lifecycle_rule}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.logging"></a>

```csharp
public object Logging { get; set; }
```

- *Type:* object

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#logging ObsBucket#logging}

---

##### `ParallelFs`<sup>Optional</sup> <a name="ParallelFs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.parallelFs"></a>

```csharp
public object ParallelFs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#region ObsBucket#region}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.serverSideEncryption"></a>

```csharp
public ObsBucketServerSideEncryption ServerSideEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#server_side_encryption ObsBucket#server_side_encryption}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#tags ObsBucket#tags}.

---

##### `UserDomainNames`<sup>Optional</sup> <a name="UserDomainNames" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.userDomainNames"></a>

```csharp
public string[] UserDomainNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#user_domain_names ObsBucket#user_domain_names}.

---

##### `Versioning`<sup>Optional</sup> <a name="Versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.versioning"></a>

```csharp
public object Versioning { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#versioning ObsBucket#versioning}.

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.website"></a>

```csharp
public ObsBucketWebsite Website { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#website ObsBucket#website}

---

##### `WormPolicy`<sup>Optional</sup> <a name="WormPolicy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.wormPolicy"></a>

```csharp
public ObsBucketWormPolicy WormPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

worm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#worm_policy ObsBucket#worm_policy}

---

### ObsBucketCorsRule <a name="ObsBucketCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketCorsRule {
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] AllowedHeaders = null,
    string[] ExposeHeaders = null,
    double MaxAgeSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#allowed_methods ObsBucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#allowed_origins ObsBucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#allowed_headers ObsBucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#expose_headers ObsBucket#expose_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#max_age_seconds ObsBucket#max_age_seconds}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#allowed_methods ObsBucket#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#allowed_origins ObsBucket#allowed_origins}.

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#allowed_headers ObsBucket#allowed_headers}.

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#expose_headers ObsBucket#expose_headers}.

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#max_age_seconds ObsBucket#max_age_seconds}.

---

### ObsBucketEventNotifications <a name="ObsBucketEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketEventNotifications {
    string[] Events,
    string Topic,
    object FilterRule = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#events ObsBucket#events}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#topic ObsBucket#topic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.filterRule">FilterRule</a></code> | <code>object</code> | filter_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#id ObsBucket#id}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#events ObsBucket#events}.

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#topic ObsBucket#topic}.

---

##### `FilterRule`<sup>Optional</sup> <a name="FilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.filterRule"></a>

```csharp
public object FilterRule { get; set; }
```

- *Type:* object

filter_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#filter_rule ObsBucket#filter_rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ObsBucketEventNotificationsFilterRule <a name="ObsBucketEventNotificationsFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketEventNotificationsFilterRule {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#name ObsBucket#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#value ObsBucket#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#name ObsBucket#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#value ObsBucket#value}.

---

### ObsBucketLifecycleRule <a name="ObsBucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRule {
    object Enabled,
    string Name,
    object Expiration = null,
    object NoncurrentVersionExpiration = null,
    object NoncurrentVersionTransition = null,
    string Prefix = null,
    object Transition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#enabled ObsBucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#name ObsBucket#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.expiration">Expiration</a></code> | <code>object</code> | expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionExpiration">NoncurrentVersionExpiration</a></code> | <code>object</code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionTransition">NoncurrentVersionTransition</a></code> | <code>object</code> | noncurrent_version_transition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#prefix ObsBucket#prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.transition">Transition</a></code> | <code>object</code> | transition block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#enabled ObsBucket#enabled}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#name ObsBucket#name}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.expiration"></a>

```csharp
public object Expiration { get; set; }
```

- *Type:* object

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#expiration ObsBucket#expiration}

---

##### `NoncurrentVersionExpiration`<sup>Optional</sup> <a name="NoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```csharp
public object NoncurrentVersionExpiration { get; set; }
```

- *Type:* object

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#noncurrent_version_expiration ObsBucket#noncurrent_version_expiration}

---

##### `NoncurrentVersionTransition`<sup>Optional</sup> <a name="NoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionTransition"></a>

```csharp
public object NoncurrentVersionTransition { get; set; }
```

- *Type:* object

noncurrent_version_transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#noncurrent_version_transition ObsBucket#noncurrent_version_transition}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#prefix ObsBucket#prefix}.

---

##### `Transition`<sup>Optional</sup> <a name="Transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.transition"></a>

```csharp
public object Transition { get; set; }
```

- *Type:* object

transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#transition ObsBucket#transition}

---

### ObsBucketLifecycleRuleExpiration <a name="ObsBucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleExpiration {
    double Days
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}.

---

### ObsBucketLifecycleRuleNoncurrentVersionExpiration <a name="ObsBucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleNoncurrentVersionExpiration {
    double Days
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}.

---

### ObsBucketLifecycleRuleNoncurrentVersionTransition <a name="ObsBucketLifecycleRuleNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleNoncurrentVersionTransition {
    double Days,
    string StorageClass
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

### ObsBucketLifecycleRuleTransition <a name="ObsBucketLifecycleRuleTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleTransition {
    double Days,
    string StorageClass
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

### ObsBucketLogging <a name="ObsBucketLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLogging {
    string TargetBucket,
    string TargetPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetBucket">TargetBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#target_bucket ObsBucket#target_bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetPrefix">TargetPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#target_prefix ObsBucket#target_prefix}. |

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetBucket"></a>

```csharp
public string TargetBucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#target_bucket ObsBucket#target_bucket}.

---

##### `TargetPrefix`<sup>Optional</sup> <a name="TargetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetPrefix"></a>

```csharp
public string TargetPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#target_prefix ObsBucket#target_prefix}.

---

### ObsBucketServerSideEncryption <a name="ObsBucketServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketServerSideEncryption {
    string Algorithm,
    string KmsKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}.

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}.

---

### ObsBucketWebsite <a name="ObsBucketWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketWebsite {
    string ErrorDocument = null,
    string IndexDocument = null,
    string RedirectAllRequestsTo = null,
    string RoutingRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.errorDocument">ErrorDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#error_document ObsBucket#error_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.indexDocument">IndexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#index_document ObsBucket#index_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.redirectAllRequestsTo">RedirectAllRequestsTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.routingRules">RoutingRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}. |

---

##### `ErrorDocument`<sup>Optional</sup> <a name="ErrorDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.errorDocument"></a>

```csharp
public string ErrorDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#error_document ObsBucket#error_document}.

---

##### `IndexDocument`<sup>Optional</sup> <a name="IndexDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.indexDocument"></a>

```csharp
public string IndexDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#index_document ObsBucket#index_document}.

---

##### `RedirectAllRequestsTo`<sup>Optional</sup> <a name="RedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.redirectAllRequestsTo"></a>

```csharp
public string RedirectAllRequestsTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}.

---

##### `RoutingRules`<sup>Optional</sup> <a name="RoutingRules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.routingRules"></a>

```csharp
public string RoutingRules { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}.

---

### ObsBucketWormPolicy <a name="ObsBucketWormPolicy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketWormPolicy {
    double Days = null,
    double Years = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.years">Years</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#years ObsBucket#years}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `Years`<sup>Optional</sup> <a name="Years" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.years"></a>

```csharp
public double Years { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket#years ObsBucket#years}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketCorsRuleList <a name="ObsBucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get"></a>

```csharp
private ObsBucketCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketCorsRuleOutputReference <a name="ObsBucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```csharp
private void ResetAllowedHeaders()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetExposeHeaders"></a>

```csharp
private void ResetExposeHeaders()
```

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```csharp
private void ResetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```csharp
public string[] ExposeHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```csharp
public double MaxAgeSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketEventNotificationsFilterRuleList <a name="ObsBucketEventNotificationsFilterRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketEventNotificationsFilterRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get"></a>

```csharp
private ObsBucketEventNotificationsFilterRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketEventNotificationsFilterRuleOutputReference <a name="ObsBucketEventNotificationsFilterRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketEventNotificationsFilterRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketEventNotificationsList <a name="ObsBucketEventNotificationsList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketEventNotificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get"></a>

```csharp
private ObsBucketEventNotificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketEventNotificationsOutputReference <a name="ObsBucketEventNotificationsOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketEventNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule">PutFilterRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetFilterRule">ResetFilterRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterRule` <a name="PutFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule"></a>

```csharp
private void PutFilterRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule.parameter.value"></a>

- *Type:* object

---

##### `ResetFilterRule` <a name="ResetFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetFilterRule"></a>

```csharp
private void ResetFilterRule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRule">FilterRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList">ObsBucketEventNotificationsFilterRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRuleInput">FilterRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterRule`<sup>Required</sup> <a name="FilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRule"></a>

```csharp
public ObsBucketEventNotificationsFilterRuleList FilterRule { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList">ObsBucketEventNotificationsFilterRuleList</a>

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `FilterRuleInput`<sup>Optional</sup> <a name="FilterRuleInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRuleInput"></a>

```csharp
public object FilterRuleInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleExpirationList <a name="ObsBucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleExpirationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get"></a>

```csharp
private ObsBucketLifecycleRuleExpirationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleExpirationOutputReference <a name="ObsBucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleList <a name="ObsBucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get"></a>

```csharp
private ObsBucketLifecycleRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleNoncurrentVersionExpirationList <a name="ObsBucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleNoncurrentVersionExpirationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```csharp
private ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleNoncurrentVersionTransitionList <a name="ObsBucketLifecycleRuleNoncurrentVersionTransitionList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleNoncurrentVersionTransitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get"></a>

```csharp
private ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference <a name="ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleOutputReference <a name="ObsBucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">PutNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition">PutNoncurrentVersionTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition">PutTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">ResetNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition">ResetNoncurrentVersionTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetTransition">ResetTransition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration"></a>

```csharp
private void PutExpiration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* object

---

##### `PutNoncurrentVersionExpiration` <a name="PutNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```csharp
private void PutNoncurrentVersionExpiration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* object

---

##### `PutNoncurrentVersionTransition` <a name="PutNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition"></a>

```csharp
private void PutNoncurrentVersionTransition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition.parameter.value"></a>

- *Type:* object

---

##### `PutTransition` <a name="PutTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition"></a>

```csharp
private void PutTransition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition.parameter.value"></a>

- *Type:* object

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetNoncurrentVersionExpiration` <a name="ResetNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```csharp
private void ResetNoncurrentVersionExpiration()
```

##### `ResetNoncurrentVersionTransition` <a name="ResetNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition"></a>

```csharp
private void ResetNoncurrentVersionTransition()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetTransition` <a name="ResetTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetTransition"></a>

```csharp
private void ResetTransition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList">ObsBucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">NoncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList">ObsBucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition">NoncurrentVersionTransition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList">ObsBucketLifecycleRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transition">Transition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList">ObsBucketLifecycleRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">NoncurrentVersionExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput">NoncurrentVersionTransitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transitionInput">TransitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expiration"></a>

```csharp
public ObsBucketLifecycleRuleExpirationList Expiration { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList">ObsBucketLifecycleRuleExpirationList</a>

---

##### `NoncurrentVersionExpiration`<sup>Required</sup> <a name="NoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```csharp
public ObsBucketLifecycleRuleNoncurrentVersionExpirationList NoncurrentVersionExpiration { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList">ObsBucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `NoncurrentVersionTransition`<sup>Required</sup> <a name="NoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition"></a>

```csharp
public ObsBucketLifecycleRuleNoncurrentVersionTransitionList NoncurrentVersionTransition { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList">ObsBucketLifecycleRuleNoncurrentVersionTransitionList</a>

---

##### `Transition`<sup>Required</sup> <a name="Transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transition"></a>

```csharp
public ObsBucketLifecycleRuleTransitionList Transition { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList">ObsBucketLifecycleRuleTransitionList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expirationInput"></a>

```csharp
public object ExpirationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NoncurrentVersionExpirationInput`<sup>Optional</sup> <a name="NoncurrentVersionExpirationInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```csharp
public object NoncurrentVersionExpirationInput { get; }
```

- *Type:* object

---

##### `NoncurrentVersionTransitionInput`<sup>Optional</sup> <a name="NoncurrentVersionTransitionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput"></a>

```csharp
public object NoncurrentVersionTransitionInput { get; }
```

- *Type:* object

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TransitionInput`<sup>Optional</sup> <a name="TransitionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transitionInput"></a>

```csharp
public object TransitionInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleTransitionList <a name="ObsBucketLifecycleRuleTransitionList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleTransitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get"></a>

```csharp
private ObsBucketLifecycleRuleTransitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLifecycleRuleTransitionOutputReference <a name="ObsBucketLifecycleRuleTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLifecycleRuleTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLoggingList <a name="ObsBucketLoggingList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get"></a>

```csharp
private ObsBucketLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketLoggingOutputReference <a name="ObsBucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resetTargetPrefix">ResetTargetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetPrefix` <a name="ResetTargetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resetTargetPrefix"></a>

```csharp
private void ResetTargetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucketInput">TargetBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefixInput">TargetPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucket">TargetBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefix">TargetPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetBucketInput`<sup>Optional</sup> <a name="TargetBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucketInput"></a>

```csharp
public string TargetBucketInput { get; }
```

- *Type:* string

---

##### `TargetPrefixInput`<sup>Optional</sup> <a name="TargetPrefixInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefixInput"></a>

```csharp
public string TargetPrefixInput { get; }
```

- *Type:* string

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucket"></a>

```csharp
public string TargetBucket { get; }
```

- *Type:* string

---

##### `TargetPrefix`<sup>Required</sup> <a name="TargetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefix"></a>

```csharp
public string TargetPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketServerSideEncryptionOutputReference <a name="ObsBucketServerSideEncryptionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketServerSideEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.internalValue"></a>

```csharp
public ObsBucketServerSideEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---


### ObsBucketWebsiteOutputReference <a name="ObsBucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketWebsiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetErrorDocument">ResetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetIndexDocument">ResetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRedirectAllRequestsTo">ResetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRoutingRules">ResetRoutingRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorDocument` <a name="ResetErrorDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetErrorDocument"></a>

```csharp
private void ResetErrorDocument()
```

##### `ResetIndexDocument` <a name="ResetIndexDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetIndexDocument"></a>

```csharp
private void ResetIndexDocument()
```

##### `ResetRedirectAllRequestsTo` <a name="ResetRedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```csharp
private void ResetRedirectAllRequestsTo()
```

##### `ResetRoutingRules` <a name="ResetRoutingRules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRoutingRules"></a>

```csharp
private void ResetRoutingRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocumentInput">ErrorDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocumentInput">IndexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsToInput">RedirectAllRequestsToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRulesInput">RoutingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocument">ErrorDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocument">IndexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsTo">RedirectAllRequestsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRules">RoutingRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDocumentInput`<sup>Optional</sup> <a name="ErrorDocumentInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocumentInput"></a>

```csharp
public string ErrorDocumentInput { get; }
```

- *Type:* string

---

##### `IndexDocumentInput`<sup>Optional</sup> <a name="IndexDocumentInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocumentInput"></a>

```csharp
public string IndexDocumentInput { get; }
```

- *Type:* string

---

##### `RedirectAllRequestsToInput`<sup>Optional</sup> <a name="RedirectAllRequestsToInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```csharp
public string RedirectAllRequestsToInput { get; }
```

- *Type:* string

---

##### `RoutingRulesInput`<sup>Optional</sup> <a name="RoutingRulesInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRulesInput"></a>

```csharp
public string RoutingRulesInput { get; }
```

- *Type:* string

---

##### `ErrorDocument`<sup>Required</sup> <a name="ErrorDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocument"></a>

```csharp
public string ErrorDocument { get; }
```

- *Type:* string

---

##### `IndexDocument`<sup>Required</sup> <a name="IndexDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocument"></a>

```csharp
public string IndexDocument { get; }
```

- *Type:* string

---

##### `RedirectAllRequestsTo`<sup>Required</sup> <a name="RedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```csharp
public string RedirectAllRequestsTo { get; }
```

- *Type:* string

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRules"></a>

```csharp
public string RoutingRules { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.internalValue"></a>

```csharp
public ObsBucketWebsite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---


### ObsBucketWormPolicyOutputReference <a name="ObsBucketWormPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketWormPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetYears">ResetYears</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetYears` <a name="ResetYears" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetYears"></a>

```csharp
private void ResetYears()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.yearsInput">YearsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.years">Years</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `YearsInput`<sup>Optional</sup> <a name="YearsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.yearsInput"></a>

```csharp
public double YearsInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Years`<sup>Required</sup> <a name="Years" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.years"></a>

```csharp
public double Years { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.internalValue"></a>

```csharp
public ObsBucketWormPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

---



