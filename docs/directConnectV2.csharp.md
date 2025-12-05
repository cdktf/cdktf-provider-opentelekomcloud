# `directConnectV2` Submodule <a name="`directConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.directConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectConnectV2 <a name="DirectConnectV2" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DirectConnectV2(Construct Scope, string Id, DirectConnectV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config">DirectConnectV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config">DirectConnectV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode">ResetChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId">ResetHostingId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId">ResetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation">ResetPeerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType">ResetPortType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus">ResetProviderStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId">ResetRedundantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan">ResetVlan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts"></a>

```csharp
private void PutTimeouts(DirectConnectV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp"></a>

```csharp
private void ResetAdminStateUp()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth"></a>

```csharp
private void ResetBandwidth()
```

##### `ResetChargeMode` <a name="ResetChargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode"></a>

```csharp
private void ResetChargeMode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId"></a>

```csharp
private void ResetDeviceId()
```

##### `ResetHostingId` <a name="ResetHostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId"></a>

```csharp
private void ResetHostingId()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrderId` <a name="ResetOrderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId"></a>

```csharp
private void ResetOrderId()
```

##### `ResetPeerLocation` <a name="ResetPeerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation"></a>

```csharp
private void ResetPeerLocation()
```

##### `ResetPortType` <a name="ResetPortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType"></a>

```csharp
private void ResetPortType()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetProviderStatus` <a name="ResetProviderStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus"></a>

```csharp
private void ResetProviderStatus()
```

##### `ResetRedundantId` <a name="ResetRedundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId"></a>

```csharp
private void ResetRedundantId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVlan` <a name="ResetVlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan"></a>

```csharp
private void ResetVlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DirectConnectV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DirectConnectV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DirectConnectV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DirectConnectV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectConnectV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant">Applicant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime">ApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId">BuildingLineProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel">CableLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId">LagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId">LastOnestopProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile">Mobile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId">OnestopProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType">PeerPortType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider">PeerProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum">PeriodNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType">PeriodType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId">RegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey">ServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode">SpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType">VgwType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput">BandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput">ChargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput">HostingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput">OrderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput">PeerLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput">PortTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput">ProviderStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput">RedundantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp">AdminStateUp</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth">Bandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode">ChargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId">HostingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation">PeerLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType">PortType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus">ProviderStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId">RedundantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Applicant`<sup>Required</sup> <a name="Applicant" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant"></a>

```csharp
public string Applicant { get; }
```

- *Type:* string

---

##### `ApplyTime`<sup>Required</sup> <a name="ApplyTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime"></a>

```csharp
public string ApplyTime { get; }
```

- *Type:* string

---

##### `BuildingLineProductId`<sup>Required</sup> <a name="BuildingLineProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId"></a>

```csharp
public string BuildingLineProductId { get; }
```

- *Type:* string

---

##### `CableLabel`<sup>Required</sup> <a name="CableLabel" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel"></a>

```csharp
public string CableLabel { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LagId`<sup>Required</sup> <a name="LagId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId"></a>

```csharp
public string LagId { get; }
```

- *Type:* string

---

##### `LastOnestopProductId`<sup>Required</sup> <a name="LastOnestopProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId"></a>

```csharp
public string LastOnestopProductId { get; }
```

- *Type:* string

---

##### `Mobile`<sup>Required</sup> <a name="Mobile" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile"></a>

```csharp
public string Mobile { get; }
```

- *Type:* string

---

##### `OnestopProductId`<sup>Required</sup> <a name="OnestopProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId"></a>

```csharp
public string OnestopProductId { get; }
```

- *Type:* string

---

##### `PeerPortType`<sup>Required</sup> <a name="PeerPortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType"></a>

```csharp
public string PeerPortType { get; }
```

- *Type:* string

---

##### `PeerProvider`<sup>Required</sup> <a name="PeerProvider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider"></a>

```csharp
public string PeerProvider { get; }
```

- *Type:* string

---

##### `PeriodNum`<sup>Required</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum"></a>

```csharp
public double PeriodNum { get; }
```

- *Type:* double

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType"></a>

```csharp
public double PeriodType { get; }
```

- *Type:* double

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId"></a>

```csharp
public string RegionId { get; }
```

- *Type:* string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey"></a>

```csharp
public string ServiceKey { get; }
```

- *Type:* string

---

##### `SpecCode`<sup>Required</sup> <a name="SpecCode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode"></a>

```csharp
public string SpecCode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts"></a>

```csharp
public DirectConnectV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a>

---

##### `VgwType`<sup>Required</sup> <a name="VgwType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType"></a>

```csharp
public string VgwType { get; }
```

- *Type:* string

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput"></a>

```csharp
public bool|IResolvable AdminStateUpInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput"></a>

```csharp
public double BandwidthInput { get; }
```

- *Type:* double

---

##### `ChargeModeInput`<sup>Optional</sup> <a name="ChargeModeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput"></a>

```csharp
public string ChargeModeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `HostingIdInput`<sup>Optional</sup> <a name="HostingIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput"></a>

```csharp
public string HostingIdInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput"></a>

```csharp
public string OrderIdInput { get; }
```

- *Type:* string

---

##### `PeerLocationInput`<sup>Optional</sup> <a name="PeerLocationInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput"></a>

```csharp
public string PeerLocationInput { get; }
```

- *Type:* string

---

##### `PortTypeInput`<sup>Optional</sup> <a name="PortTypeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput"></a>

```csharp
public string PortTypeInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `ProviderStatusInput`<sup>Optional</sup> <a name="ProviderStatusInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput"></a>

```csharp
public string ProviderStatusInput { get; }
```

- *Type:* string

---

##### `RedundantIdInput`<sup>Optional</sup> <a name="RedundantIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput"></a>

```csharp
public string RedundantIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput"></a>

```csharp
public IResolvable|DirectConnectV2Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp"></a>

```csharp
public bool|IResolvable AdminStateUp { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth"></a>

```csharp
public double Bandwidth { get; }
```

- *Type:* double

---

##### `ChargeMode`<sup>Required</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode"></a>

```csharp
public string ChargeMode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `HostingId`<sup>Required</sup> <a name="HostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId"></a>

```csharp
public string HostingId { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `PeerLocation`<sup>Required</sup> <a name="PeerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation"></a>

```csharp
public string PeerLocation { get; }
```

- *Type:* string

---

##### `PortType`<sup>Required</sup> <a name="PortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType"></a>

```csharp
public string PortType { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ProviderStatus`<sup>Required</sup> <a name="ProviderStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus"></a>

```csharp
public string ProviderStatus { get; }
```

- *Type:* string

---

##### `RedundantId`<sup>Required</sup> <a name="RedundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId"></a>

```csharp
public string RedundantId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectConnectV2Config <a name="DirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DirectConnectV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProviderName,
    bool|IResolvable AdminStateUp = null,
    double Bandwidth = null,
    string ChargeMode = null,
    string Description = null,
    string DeviceId = null,
    string HostingId = null,
    string InterfaceName = null,
    string Location = null,
    string Name = null,
    string OrderId = null,
    string PeerLocation = null,
    string PortType = null,
    string ProductId = null,
    string ProviderStatus = null,
    string RedundantId = null,
    string Status = null,
    string TenantId = null,
    DirectConnectV2Timeouts Timeouts = null,
    string Type = null,
    double Vlan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName">ProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp">AdminStateUp</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth">Bandwidth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode">ChargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#description DirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId">DeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId">HostingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName">InterfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#location DirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#name DirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId">OrderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation">PeerLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType">PortType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus">ProviderStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId">RedundantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#status DirectConnectV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#type DirectConnectV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan">Vlan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp"></a>

```csharp
public bool|IResolvable AdminStateUp { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}.

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth"></a>

```csharp
public double Bandwidth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}.

---

##### `ChargeMode`<sup>Optional</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode"></a>

```csharp
public string ChargeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#description DirectConnectV2#description}.

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}.

---

##### `HostingId`<sup>Optional</sup> <a name="HostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId"></a>

```csharp
public string HostingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}.

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#location DirectConnectV2#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#name DirectConnectV2#name}.

---

##### `OrderId`<sup>Optional</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId"></a>

```csharp
public string OrderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}.

---

##### `PeerLocation`<sup>Optional</sup> <a name="PeerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation"></a>

```csharp
public string PeerLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}.

---

##### `PortType`<sup>Optional</sup> <a name="PortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType"></a>

```csharp
public string PortType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}.

---

##### `ProviderStatus`<sup>Optional</sup> <a name="ProviderStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus"></a>

```csharp
public string ProviderStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}.

---

##### `RedundantId`<sup>Optional</sup> <a name="RedundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId"></a>

```csharp
public string RedundantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#status DirectConnectV2#status}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts"></a>

```csharp
public DirectConnectV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#timeouts DirectConnectV2#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#type DirectConnectV2#type}.

---

##### `Vlan`<sup>Optional</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}.

---

### DirectConnectV2Timeouts <a name="DirectConnectV2Timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DirectConnectV2Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#create DirectConnectV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#update DirectConnectV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#create DirectConnectV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/direct_connect_v2#update DirectConnectV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectConnectV2TimeoutsOutputReference <a name="DirectConnectV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DirectConnectV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectConnectV2Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---



