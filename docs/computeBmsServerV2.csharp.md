# `computeBmsServerV2` Submodule <a name="`computeBmsServerV2` Submodule" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBmsServerV2 <a name="ComputeBmsServerV2" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2 opentelekomcloud_compute_bms_server_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2(Construct Scope, string Id, ComputeBmsServerV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config">ComputeBmsServerV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config">ComputeBmsServerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice">PutBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetAdminPass">ResetAdminPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetBlockDevice">ResetBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorName">ResetFlavorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetStopBeforeDestroy">ResetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDevice` <a name="PutBlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice"></a>

```csharp
private void PutBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork"></a>

```csharp
private void PutNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeBmsServerV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

---

##### `ResetAdminPass` <a name="ResetAdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetAdminPass"></a>

```csharp
private void ResetAdminPass()
```

##### `ResetBlockDevice` <a name="ResetBlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetBlockDevice"></a>

```csharp
private void ResetBlockDevice()
```

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorId"></a>

```csharp
private void ResetFlavorId()
```

##### `ResetFlavorName` <a name="ResetFlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorName"></a>

```csharp
private void ResetFlavorName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageName"></a>

```csharp
private void ResetImageName()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetKeyPair"></a>

```csharp
private void ResetKeyPair()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetStopBeforeDestroy` <a name="ResetStopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetStopBeforeDestroy"></a>

```csharp
private void ResetStopBeforeDestroy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetUserData"></a>

```csharp
private void ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeBmsServerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ComputeBmsServerV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ComputeBmsServerV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ComputeBmsServerV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ComputeBmsServerV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeBmsServerV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeBmsServerV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeBmsServerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBmsServerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV4">AccessIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV6">AccessIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDevice">BlockDevice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList">ComputeBmsServerV2BlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.configDrive">ConfigDrive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostStatus">HostStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.kernelId">KernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.network">Network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList">ComputeBmsServerV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference">ComputeBmsServerV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPassInput">AdminPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDeviceInput">BlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorNameInput">FlavorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPairInput">KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.networkInput">NetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroyInput">StopBeforeDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPass">AdminPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorName">FlavorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userData">UserData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessIpV4`<sup>Required</sup> <a name="AccessIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV4"></a>

```csharp
public string AccessIpV4 { get; }
```

- *Type:* string

---

##### `AccessIpV6`<sup>Required</sup> <a name="AccessIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV6"></a>

```csharp
public string AccessIpV6 { get; }
```

- *Type:* string

---

##### `BlockDevice`<sup>Required</sup> <a name="BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDevice"></a>

```csharp
public ComputeBmsServerV2BlockDeviceList BlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList">ComputeBmsServerV2BlockDeviceList</a>

---

##### `ConfigDrive`<sup>Required</sup> <a name="ConfigDrive" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.configDrive"></a>

```csharp
public IResolvable ConfigDrive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HostStatus`<sup>Required</sup> <a name="HostStatus" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostStatus"></a>

```csharp
public string HostStatus { get; }
```

- *Type:* string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.kernelId"></a>

```csharp
public string KernelId { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.network"></a>

```csharp
public ComputeBmsServerV2NetworkList Network { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList">ComputeBmsServerV2NetworkList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeouts"></a>

```csharp
public ComputeBmsServerV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference">ComputeBmsServerV2TimeoutsOutputReference</a>

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `AdminPassInput`<sup>Optional</sup> <a name="AdminPassInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPassInput"></a>

```csharp
public string AdminPassInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BlockDeviceInput`<sup>Optional</sup> <a name="BlockDeviceInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDeviceInput"></a>

```csharp
public object BlockDeviceInput { get; }
```

- *Type:* object

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `FlavorNameInput`<sup>Optional</sup> <a name="FlavorNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorNameInput"></a>

```csharp
public string FlavorNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPairInput"></a>

```csharp
public string KeyPairInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.networkInput"></a>

```csharp
public object NetworkInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `StopBeforeDestroyInput`<sup>Optional</sup> <a name="StopBeforeDestroyInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroyInput"></a>

```csharp
public object StopBeforeDestroyInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `AdminPass`<sup>Required</sup> <a name="AdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPass"></a>

```csharp
public string AdminPass { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `FlavorName`<sup>Required</sup> <a name="FlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorName"></a>

```csharp
public string FlavorName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `StopBeforeDestroy`<sup>Required</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroy"></a>

```csharp
public object StopBeforeDestroy { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBmsServerV2BlockDevice <a name="ComputeBmsServerV2BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2BlockDevice {
    string SourceType,
    double BootIndex = null,
    object DeleteOnTermination = null,
    string DestinationType = null,
    string DeviceName = null,
    string GuestFormat = null,
    string Uuid = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#source_type ComputeBmsServerV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.bootIndex">BootIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#boot_index ComputeBmsServerV2#boot_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#delete_on_termination ComputeBmsServerV2#delete_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#destination_type ComputeBmsServerV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#device_name ComputeBmsServerV2#device_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.guestFormat">GuestFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#guest_format ComputeBmsServerV2#guest_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.uuid">Uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#volume_size ComputeBmsServerV2#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#volume_type ComputeBmsServerV2#volume_type}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#source_type ComputeBmsServerV2#source_type}.

---

##### `BootIndex`<sup>Optional</sup> <a name="BootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.bootIndex"></a>

```csharp
public double BootIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#boot_index ComputeBmsServerV2#boot_index}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#delete_on_termination ComputeBmsServerV2#delete_on_termination}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#destination_type ComputeBmsServerV2#destination_type}.

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#device_name ComputeBmsServerV2#device_name}.

---

##### `GuestFormat`<sup>Optional</sup> <a name="GuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.guestFormat"></a>

```csharp
public string GuestFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#guest_format ComputeBmsServerV2#guest_format}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#volume_size ComputeBmsServerV2#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#volume_type ComputeBmsServerV2#volume_type}.

---

### ComputeBmsServerV2Config <a name="ComputeBmsServerV2Config" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone,
    string Name,
    string AdminPass = null,
    object BlockDevice = null,
    string FlavorId = null,
    string FlavorName = null,
    string Id = null,
    string ImageId = null,
    string ImageName = null,
    string KeyPair = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    object Network = null,
    string Region = null,
    string[] SecurityGroups = null,
    object StopBeforeDestroy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ComputeBmsServerV2Timeouts Timeouts = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.adminPass">AdminPass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.blockDevice">BlockDevice</a></code> | <code>object</code> | block_device block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorName">FlavorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#id ComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.keyPair">KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.network">Network</a></code> | <code>object</code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#region ComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#tags ComputeBmsServerV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `AdminPass`<sup>Optional</sup> <a name="AdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.adminPass"></a>

```csharp
public string AdminPass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}.

---

##### `BlockDevice`<sup>Optional</sup> <a name="BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.blockDevice"></a>

```csharp
public object BlockDevice { get; set; }
```

- *Type:* object

block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#block_device ComputeBmsServerV2#block_device}

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}.

---

##### `FlavorName`<sup>Optional</sup> <a name="FlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorName"></a>

```csharp
public string FlavorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#id ComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}.

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.keyPair"></a>

```csharp
public string KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.network"></a>

```csharp
public object Network { get; set; }
```

- *Type:* object

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#network ComputeBmsServerV2#network}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#region ComputeBmsServerV2#region}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}.

---

##### `StopBeforeDestroy`<sup>Optional</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.stopBeforeDestroy"></a>

```csharp
public object StopBeforeDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#tags ComputeBmsServerV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.timeouts"></a>

```csharp
public ComputeBmsServerV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#timeouts ComputeBmsServerV2#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}.

---

### ComputeBmsServerV2Network <a name="ComputeBmsServerV2Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2Network {
    object AccessNetwork = null,
    string FixedIpV4 = null,
    string FixedIpV6 = null,
    string Name = null,
    string Port = null,
    string Uuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.accessNetwork">AccessNetwork</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#access_network ComputeBmsServerV2#access_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV4">FixedIpV4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#fixed_ip_v4 ComputeBmsServerV2#fixed_ip_v4}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV6">FixedIpV6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#fixed_ip_v6 ComputeBmsServerV2#fixed_ip_v6}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#port ComputeBmsServerV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.uuid">Uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}. |

---

##### `AccessNetwork`<sup>Optional</sup> <a name="AccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.accessNetwork"></a>

```csharp
public object AccessNetwork { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#access_network ComputeBmsServerV2#access_network}.

---

##### `FixedIpV4`<sup>Optional</sup> <a name="FixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV4"></a>

```csharp
public string FixedIpV4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#fixed_ip_v4 ComputeBmsServerV2#fixed_ip_v4}.

---

##### `FixedIpV6`<sup>Optional</sup> <a name="FixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV6"></a>

```csharp
public string FixedIpV6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#fixed_ip_v6 ComputeBmsServerV2#fixed_ip_v6}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#port ComputeBmsServerV2#port}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}.

---

### ComputeBmsServerV2Timeouts <a name="ComputeBmsServerV2Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#create ComputeBmsServerV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#delete ComputeBmsServerV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#update ComputeBmsServerV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#create ComputeBmsServerV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#delete ComputeBmsServerV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/compute_bms_server_v2#update ComputeBmsServerV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBmsServerV2BlockDeviceList <a name="ComputeBmsServerV2BlockDeviceList" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2BlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get"></a>

```csharp
private ComputeBmsServerV2BlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeBmsServerV2BlockDeviceOutputReference <a name="ComputeBmsServerV2BlockDeviceOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2BlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetBootIndex">ResetBootIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetGuestFormat">ResetGuestFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootIndex` <a name="ResetBootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetBootIndex"></a>

```csharp
private void ResetBootIndex()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetGuestFormat` <a name="ResetGuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetGuestFormat"></a>

```csharp
private void ResetGuestFormat()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndexInput">BootIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormatInput">GuestFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndex">BootIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormat">GuestFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootIndexInput`<sup>Optional</sup> <a name="BootIndexInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndexInput"></a>

```csharp
public double BootIndexInput { get; }
```

- *Type:* double

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `GuestFormatInput`<sup>Optional</sup> <a name="GuestFormatInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormatInput"></a>

```csharp
public string GuestFormatInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `BootIndex`<sup>Required</sup> <a name="BootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndex"></a>

```csharp
public double BootIndex { get; }
```

- *Type:* double

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `GuestFormat`<sup>Required</sup> <a name="GuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormat"></a>

```csharp
public string GuestFormat { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeBmsServerV2NetworkList <a name="ComputeBmsServerV2NetworkList" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2NetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get"></a>

```csharp
private ComputeBmsServerV2NetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeBmsServerV2NetworkOutputReference <a name="ComputeBmsServerV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2NetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetAccessNetwork">ResetAccessNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV4">ResetFixedIpV4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV6">ResetFixedIpV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessNetwork` <a name="ResetAccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetAccessNetwork"></a>

```csharp
private void ResetAccessNetwork()
```

##### `ResetFixedIpV4` <a name="ResetFixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV4"></a>

```csharp
private void ResetFixedIpV4()
```

##### `ResetFixedIpV6` <a name="ResetFixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV6"></a>

```csharp
private void ResetFixedIpV6()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.mac">Mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetworkInput">AccessNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4Input">FixedIpV4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6Input">FixedIpV6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetwork">AccessNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4">FixedIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6">FixedIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.mac"></a>

```csharp
public string Mac { get; }
```

- *Type:* string

---

##### `AccessNetworkInput`<sup>Optional</sup> <a name="AccessNetworkInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetworkInput"></a>

```csharp
public object AccessNetworkInput { get; }
```

- *Type:* object

---

##### `FixedIpV4Input`<sup>Optional</sup> <a name="FixedIpV4Input" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4Input"></a>

```csharp
public string FixedIpV4Input { get; }
```

- *Type:* string

---

##### `FixedIpV6Input`<sup>Optional</sup> <a name="FixedIpV6Input" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6Input"></a>

```csharp
public string FixedIpV6Input { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `AccessNetwork`<sup>Required</sup> <a name="AccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetwork"></a>

```csharp
public object AccessNetwork { get; }
```

- *Type:* object

---

##### `FixedIpV4`<sup>Required</sup> <a name="FixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4"></a>

```csharp
public string FixedIpV4 { get; }
```

- *Type:* string

---

##### `FixedIpV6`<sup>Required</sup> <a name="FixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6"></a>

```csharp
public string FixedIpV6 { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeBmsServerV2TimeoutsOutputReference <a name="ComputeBmsServerV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ComputeBmsServerV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



