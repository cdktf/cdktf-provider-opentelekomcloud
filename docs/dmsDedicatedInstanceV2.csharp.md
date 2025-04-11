# `dmsDedicatedInstanceV2` Submodule <a name="`dmsDedicatedInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDedicatedInstanceV2 <a name="DmsDedicatedInstanceV2" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2 opentelekomcloud_dms_dedicated_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2(Construct Scope, string Id, DmsDedicatedInstanceV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config">DmsDedicatedInstanceV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config">DmsDedicatedInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses">PutCrossVpcAccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAccessUser">ResetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetArchType">ResetArchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAvailableZones">ResetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetCrossVpcAccesses">ResetCrossVpcAccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedEnable">ResetDiskEncryptedEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedKey">ResetDiskEncryptedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnabledMechanisms">ResetEnabledMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnablePublicip">ResetEnablePublicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetIpv6Enable">ResetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainBegin">ResetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainEnd">ResetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetNewTenantIps">ResetNewTenantIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPublicipId">ResetPublicipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSslEnable">ResetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCrossVpcAccesses` <a name="PutCrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses"></a>

```csharp
private void PutCrossVpcAccesses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts"></a>

```csharp
private void PutTimeouts(DmsDedicatedInstanceV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

---

##### `ResetAccessUser` <a name="ResetAccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAccessUser"></a>

```csharp
private void ResetAccessUser()
```

##### `ResetArchType` <a name="ResetArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetArchType"></a>

```csharp
private void ResetArchType()
```

##### `ResetAvailableZones` <a name="ResetAvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAvailableZones"></a>

```csharp
private void ResetAvailableZones()
```

##### `ResetCrossVpcAccesses` <a name="ResetCrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetCrossVpcAccesses"></a>

```csharp
private void ResetCrossVpcAccesses()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiskEncryptedEnable` <a name="ResetDiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedEnable"></a>

```csharp
private void ResetDiskEncryptedEnable()
```

##### `ResetDiskEncryptedKey` <a name="ResetDiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedKey"></a>

```csharp
private void ResetDiskEncryptedKey()
```

##### `ResetEnabledMechanisms` <a name="ResetEnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnabledMechanisms"></a>

```csharp
private void ResetEnabledMechanisms()
```

##### `ResetEnablePublicip` <a name="ResetEnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnablePublicip"></a>

```csharp
private void ResetEnablePublicip()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6Enable` <a name="ResetIpv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetIpv6Enable"></a>

```csharp
private void ResetIpv6Enable()
```

##### `ResetMaintainBegin` <a name="ResetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainBegin"></a>

```csharp
private void ResetMaintainBegin()
```

##### `ResetMaintainEnd` <a name="ResetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainEnd"></a>

```csharp
private void ResetMaintainEnd()
```

##### `ResetNewTenantIps` <a name="ResetNewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetNewTenantIps"></a>

```csharp
private void ResetNewTenantIps()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPublicipId` <a name="ResetPublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPublicipId"></a>

```csharp
private void ResetPublicipId()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSecurityProtocol"></a>

```csharp
private void ResetSecurityProtocol()
```

##### `ResetSslEnable` <a name="ResetSslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSslEnable"></a>

```csharp
private void ResetSslEnable()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsDedicatedInstanceV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsDedicatedInstanceV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsDedicatedInstanceV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsDedicatedInstanceV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsDedicatedInstanceV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsDedicatedInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DmsDedicatedInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.bandwidth">Bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.certReplaced">CertReplaced</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectAddress">ConnectAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectorNodeNum">ConnectorNodeNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccesses">CrossVpcAccesses</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList">DmsDedicatedInstanceV2CrossVpcAccessesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dumping">Dumping</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nodeNum">NodeNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.partitionNum">PartitionNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.podConnectAddress">PodConnectAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicBandwidth">PublicBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.resourceSpecCode">ResourceSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslTwoWayEnable">SslTwoWayEnable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference">DmsDedicatedInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.usedStorageSpace">UsedStorageSpace</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUserInput">AccessUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archTypeInput">ArchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZonesInput">AvailableZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNumInput">BrokerNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccessesInput">CrossVpcAccessesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnableInput">DiskEncryptedEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKeyInput">DiskEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanismsInput">EnabledMechanismsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicipInput">EnablePublicipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6EnableInput">Ipv6EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBeginInput">MaintainBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEndInput">MaintainEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIpsInput">NewTenantIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipIdInput">PublicipIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnableInput">SslEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpaceInput">StorageSpaceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCodeInput">StorageSpecCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUser">AccessUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZones">AvailableZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNum">BrokerNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnable">DiskEncryptedEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKey">DiskEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanisms">EnabledMechanisms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicip">EnablePublicip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6Enable">Ipv6Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBegin">MaintainBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEnd">MaintainEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIps">NewTenantIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipId">PublicipId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicy">RetentionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnable">SslEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpace">StorageSpace</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCode">StorageSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.bandwidth"></a>

```csharp
public string Bandwidth { get; }
```

- *Type:* string

---

##### `CertReplaced`<sup>Required</sup> <a name="CertReplaced" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.certReplaced"></a>

```csharp
public IResolvable CertReplaced { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConnectAddress`<sup>Required</sup> <a name="ConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectAddress"></a>

```csharp
public string ConnectAddress { get; }
```

- *Type:* string

---

##### `ConnectorNodeNum`<sup>Required</sup> <a name="ConnectorNodeNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectorNodeNum"></a>

```csharp
public double ConnectorNodeNum { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CrossVpcAccesses`<sup>Required</sup> <a name="CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccesses"></a>

```csharp
public DmsDedicatedInstanceV2CrossVpcAccessesList CrossVpcAccesses { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList">DmsDedicatedInstanceV2CrossVpcAccessesList</a>

---

##### `Dumping`<sup>Required</sup> <a name="Dumping" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dumping"></a>

```csharp
public IResolvable Dumping { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nodeNum"></a>

```csharp
public double NodeNum { get; }
```

- *Type:* double

---

##### `PartitionNum`<sup>Required</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.partitionNum"></a>

```csharp
public double PartitionNum { get; }
```

- *Type:* double

---

##### `PodConnectAddress`<sup>Required</sup> <a name="PodConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.podConnectAddress"></a>

```csharp
public string PodConnectAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PublicBandwidth`<sup>Required</sup> <a name="PublicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicBandwidth"></a>

```csharp
public double PublicBandwidth { get; }
```

- *Type:* double

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceSpecCode`<sup>Required</sup> <a name="ResourceSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.resourceSpecCode"></a>

```csharp
public string ResourceSpecCode { get; }
```

- *Type:* string

---

##### `SslTwoWayEnable`<sup>Required</sup> <a name="SslTwoWayEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslTwoWayEnable"></a>

```csharp
public IResolvable SslTwoWayEnable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeouts"></a>

```csharp
public DmsDedicatedInstanceV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference">DmsDedicatedInstanceV2TimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsedStorageSpace`<sup>Required</sup> <a name="UsedStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.usedStorageSpace"></a>

```csharp
public double UsedStorageSpace { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `AccessUserInput`<sup>Optional</sup> <a name="AccessUserInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUserInput"></a>

```csharp
public string AccessUserInput { get; }
```

- *Type:* string

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archTypeInput"></a>

```csharp
public string ArchTypeInput { get; }
```

- *Type:* string

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZonesInput"></a>

```csharp
public string[] AvailableZonesInput { get; }
```

- *Type:* string[]

---

##### `BrokerNumInput`<sup>Optional</sup> <a name="BrokerNumInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNumInput"></a>

```csharp
public double BrokerNumInput { get; }
```

- *Type:* double

---

##### `CrossVpcAccessesInput`<sup>Optional</sup> <a name="CrossVpcAccessesInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccessesInput"></a>

```csharp
public object CrossVpcAccessesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskEncryptedEnableInput`<sup>Optional</sup> <a name="DiskEncryptedEnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnableInput"></a>

```csharp
public object DiskEncryptedEnableInput { get; }
```

- *Type:* object

---

##### `DiskEncryptedKeyInput`<sup>Optional</sup> <a name="DiskEncryptedKeyInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKeyInput"></a>

```csharp
public string DiskEncryptedKeyInput { get; }
```

- *Type:* string

---

##### `EnabledMechanismsInput`<sup>Optional</sup> <a name="EnabledMechanismsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanismsInput"></a>

```csharp
public string[] EnabledMechanismsInput { get; }
```

- *Type:* string[]

---

##### `EnablePublicipInput`<sup>Optional</sup> <a name="EnablePublicipInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicipInput"></a>

```csharp
public object EnablePublicipInput { get; }
```

- *Type:* object

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6EnableInput`<sup>Optional</sup> <a name="Ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6EnableInput"></a>

```csharp
public object Ipv6EnableInput { get; }
```

- *Type:* object

---

##### `MaintainBeginInput`<sup>Optional</sup> <a name="MaintainBeginInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBeginInput"></a>

```csharp
public string MaintainBeginInput { get; }
```

- *Type:* string

---

##### `MaintainEndInput`<sup>Optional</sup> <a name="MaintainEndInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEndInput"></a>

```csharp
public string MaintainEndInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `NewTenantIpsInput`<sup>Optional</sup> <a name="NewTenantIpsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIpsInput"></a>

```csharp
public string[] NewTenantIpsInput { get; }
```

- *Type:* string[]

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PublicipIdInput`<sup>Optional</sup> <a name="PublicipIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipIdInput"></a>

```csharp
public string[] PublicipIdInput { get; }
```

- *Type:* string[]

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicyInput"></a>

```csharp
public string RetentionPolicyInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocolInput"></a>

```csharp
public string SecurityProtocolInput { get; }
```

- *Type:* string

---

##### `SslEnableInput`<sup>Optional</sup> <a name="SslEnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnableInput"></a>

```csharp
public object SslEnableInput { get; }
```

- *Type:* object

---

##### `StorageSpaceInput`<sup>Optional</sup> <a name="StorageSpaceInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpaceInput"></a>

```csharp
public double StorageSpaceInput { get; }
```

- *Type:* double

---

##### `StorageSpecCodeInput`<sup>Optional</sup> <a name="StorageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCodeInput"></a>

```csharp
public string StorageSpecCodeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AccessUser`<sup>Required</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUser"></a>

```csharp
public string AccessUser { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZones"></a>

```csharp
public string[] AvailableZones { get; }
```

- *Type:* string[]

---

##### `BrokerNum`<sup>Required</sup> <a name="BrokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNum"></a>

```csharp
public double BrokerNum { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiskEncryptedEnable`<sup>Required</sup> <a name="DiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnable"></a>

```csharp
public object DiskEncryptedEnable { get; }
```

- *Type:* object

---

##### `DiskEncryptedKey`<sup>Required</sup> <a name="DiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKey"></a>

```csharp
public string DiskEncryptedKey { get; }
```

- *Type:* string

---

##### `EnabledMechanisms`<sup>Required</sup> <a name="EnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanisms"></a>

```csharp
public string[] EnabledMechanisms { get; }
```

- *Type:* string[]

---

##### `EnablePublicip`<sup>Required</sup> <a name="EnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicip"></a>

```csharp
public object EnablePublicip { get; }
```

- *Type:* object

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6Enable`<sup>Required</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6Enable"></a>

```csharp
public object Ipv6Enable { get; }
```

- *Type:* object

---

##### `MaintainBegin`<sup>Required</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBegin"></a>

```csharp
public string MaintainBegin { get; }
```

- *Type:* string

---

##### `MaintainEnd`<sup>Required</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEnd"></a>

```csharp
public string MaintainEnd { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `NewTenantIps`<sup>Required</sup> <a name="NewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIps"></a>

```csharp
public string[] NewTenantIps { get; }
```

- *Type:* string[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PublicipId`<sup>Required</sup> <a name="PublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipId"></a>

```csharp
public string[] PublicipId { get; }
```

- *Type:* string[]

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicy"></a>

```csharp
public string RetentionPolicy { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SslEnable`<sup>Required</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnable"></a>

```csharp
public object SslEnable { get; }
```

- *Type:* object

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpace"></a>

```csharp
public double StorageSpace { get; }
```

- *Type:* double

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCode"></a>

```csharp
public string StorageSpecCode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDedicatedInstanceV2Config <a name="DmsDedicatedInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double BrokerNum,
    string EngineVersion,
    string FlavorId,
    string Name,
    string NetworkId,
    string SecurityGroupId,
    double StorageSpace,
    string StorageSpecCode,
    string VpcId,
    string AccessUser = null,
    string ArchType = null,
    string[] AvailableZones = null,
    object CrossVpcAccesses = null,
    string Description = null,
    object DiskEncryptedEnable = null,
    string DiskEncryptedKey = null,
    string[] EnabledMechanisms = null,
    object EnablePublicip = null,
    string Id = null,
    object Ipv6Enable = null,
    string MaintainBegin = null,
    string MaintainEnd = null,
    string[] NewTenantIps = null,
    string Password = null,
    string[] PublicipId = null,
    string RetentionPolicy = null,
    string SecurityProtocol = null,
    object SslEnable = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DmsDedicatedInstanceV2Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.brokerNum">BrokerNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.networkId">NetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpace">StorageSpace</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpecCode">StorageSpecCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.accessUser">AccessUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.archType">ArchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.availableZones">AvailableZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.crossVpcAccesses">CrossVpcAccesses</a></code> | <code>object</code> | cross_vpc_accesses block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedEnable">DiskEncryptedEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedKey">DiskEncryptedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enabledMechanisms">EnabledMechanisms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enablePublicip">EnablePublicip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.ipv6Enable">Ipv6Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainBegin">MaintainBegin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainEnd">MaintainEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.newTenantIps">NewTenantIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.publicipId">PublicipId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.retentionPolicy">RetentionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.sslEnable">SslEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrokerNum`<sup>Required</sup> <a name="BrokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.brokerNum"></a>

```csharp
public double BrokerNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}.

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}.

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}.

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}.

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpace"></a>

```csharp
public double StorageSpace { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}.

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpecCode"></a>

```csharp
public string StorageSpecCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}.

---

##### `AccessUser`<sup>Optional</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.accessUser"></a>

```csharp
public string AccessUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}.

---

##### `ArchType`<sup>Optional</sup> <a name="ArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.archType"></a>

```csharp
public string ArchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}.

---

##### `AvailableZones`<sup>Optional</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.availableZones"></a>

```csharp
public string[] AvailableZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}.

---

##### `CrossVpcAccesses`<sup>Optional</sup> <a name="CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.crossVpcAccesses"></a>

```csharp
public object CrossVpcAccesses { get; set; }
```

- *Type:* object

cross_vpc_accesses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#cross_vpc_accesses DmsDedicatedInstanceV2#cross_vpc_accesses}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}.

---

##### `DiskEncryptedEnable`<sup>Optional</sup> <a name="DiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedEnable"></a>

```csharp
public object DiskEncryptedEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}.

---

##### `DiskEncryptedKey`<sup>Optional</sup> <a name="DiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedKey"></a>

```csharp
public string DiskEncryptedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}.

---

##### `EnabledMechanisms`<sup>Optional</sup> <a name="EnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enabledMechanisms"></a>

```csharp
public string[] EnabledMechanisms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}.

---

##### `EnablePublicip`<sup>Optional</sup> <a name="EnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enablePublicip"></a>

```csharp
public object EnablePublicip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6Enable`<sup>Optional</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.ipv6Enable"></a>

```csharp
public object Ipv6Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}.

---

##### `MaintainBegin`<sup>Optional</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainBegin"></a>

```csharp
public string MaintainBegin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}.

---

##### `MaintainEnd`<sup>Optional</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainEnd"></a>

```csharp
public string MaintainEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}.

---

##### `NewTenantIps`<sup>Optional</sup> <a name="NewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.newTenantIps"></a>

```csharp
public string[] NewTenantIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}.

---

##### `PublicipId`<sup>Optional</sup> <a name="PublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.publicipId"></a>

```csharp
public string[] PublicipId { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.retentionPolicy"></a>

```csharp
public string RetentionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}.

---

##### `SslEnable`<sup>Optional</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.sslEnable"></a>

```csharp
public object SslEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.timeouts"></a>

```csharp
public DmsDedicatedInstanceV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#timeouts DmsDedicatedInstanceV2#timeouts}

---

### DmsDedicatedInstanceV2CrossVpcAccesses <a name="DmsDedicatedInstanceV2CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2CrossVpcAccesses {
    string AdvertisedIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.property.advertisedIp">AdvertisedIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}. |

---

##### `AdvertisedIp`<sup>Optional</sup> <a name="AdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.property.advertisedIp"></a>

```csharp
public string AdvertisedIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}.

---

### DmsDedicatedInstanceV2Timeouts <a name="DmsDedicatedInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDedicatedInstanceV2CrossVpcAccessesList <a name="DmsDedicatedInstanceV2CrossVpcAccessesList" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2CrossVpcAccessesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get"></a>

```csharp
private DmsDedicatedInstanceV2CrossVpcAccessesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DmsDedicatedInstanceV2CrossVpcAccessesOutputReference <a name="DmsDedicatedInstanceV2CrossVpcAccessesOutputReference" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2CrossVpcAccessesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resetAdvertisedIp">ResetAdvertisedIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertisedIp` <a name="ResetAdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resetAdvertisedIp"></a>

```csharp
private void ResetAdvertisedIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.listenerIp">ListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.portId">PortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIpInput">AdvertisedIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIp">AdvertisedIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.listenerIp"></a>

```csharp
public string ListenerIp { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortId`<sup>Required</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.portId"></a>

```csharp
public string PortId { get; }
```

- *Type:* string

---

##### `AdvertisedIpInput`<sup>Optional</sup> <a name="AdvertisedIpInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIpInput"></a>

```csharp
public string AdvertisedIpInput { get; }
```

- *Type:* string

---

##### `AdvertisedIp`<sup>Required</sup> <a name="AdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIp"></a>

```csharp
public string AdvertisedIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DmsDedicatedInstanceV2TimeoutsOutputReference <a name="DmsDedicatedInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsDedicatedInstanceV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



