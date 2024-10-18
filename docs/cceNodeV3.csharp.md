# `cceNodeV3` Submodule <a name="`cceNodeV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodeV3 <a name="CceNodeV3" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3 opentelekomcloud_cce_node_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3(Construct Scope, string Id, CceNodeV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config">CceNodeV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config">CceNodeV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes">PutDataVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAgencyName">ResetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthChargeMode">ResetBandwidthChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthSize">ResetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDedicatedHostId">ResetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerBaseSize">ResetDockerBaseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerLvmConfigOverride">ResetDockerLvmConfigOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEcsPerformanceType">ResetEcsPerformanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipCount">ResetEipCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipIds">ResetEipIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetExtendParamChargingMode">ResetExtendParamChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetIptype">ResetIptype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetK8STags">ResetK8STags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOrderId">ResetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOs">ResetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPostinstall">ResetPostinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPreinstall">ResetPreinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSharetype">ResetSharetype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataVolumes` <a name="PutDataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes"></a>

```csharp
private void PutDataVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes.parameter.value"></a>

- *Type:* object

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume"></a>

```csharp
private void PutRootVolume(CceNodeV3RootVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints"></a>

```csharp
private void PutTaints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts"></a>

```csharp
private void PutTimeouts(CceNodeV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>

---

##### `ResetAgencyName` <a name="ResetAgencyName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAgencyName"></a>

```csharp
private void ResetAgencyName()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetBandwidthChargeMode` <a name="ResetBandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthChargeMode"></a>

```csharp
private void ResetBandwidthChargeMode()
```

##### `ResetBandwidthSize` <a name="ResetBandwidthSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthSize"></a>

```csharp
private void ResetBandwidthSize()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBillingMode"></a>

```csharp
private void ResetBillingMode()
```

##### `ResetDedicatedHostId` <a name="ResetDedicatedHostId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDedicatedHostId"></a>

```csharp
private void ResetDedicatedHostId()
```

##### `ResetDockerBaseSize` <a name="ResetDockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerBaseSize"></a>

```csharp
private void ResetDockerBaseSize()
```

##### `ResetDockerLvmConfigOverride` <a name="ResetDockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerLvmConfigOverride"></a>

```csharp
private void ResetDockerLvmConfigOverride()
```

##### `ResetEcsPerformanceType` <a name="ResetEcsPerformanceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEcsPerformanceType"></a>

```csharp
private void ResetEcsPerformanceType()
```

##### `ResetEipCount` <a name="ResetEipCount" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipCount"></a>

```csharp
private void ResetEipCount()
```

##### `ResetEipIds` <a name="ResetEipIds" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipIds"></a>

```csharp
private void ResetEipIds()
```

##### `ResetExtendParamChargingMode` <a name="ResetExtendParamChargingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetExtendParamChargingMode"></a>

```csharp
private void ResetExtendParamChargingMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIptype` <a name="ResetIptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetIptype"></a>

```csharp
private void ResetIptype()
```

##### `ResetK8STags` <a name="ResetK8STags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetK8STags"></a>

```csharp
private void ResetK8STags()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetMaxPods"></a>

```csharp
private void ResetMaxPods()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrderId` <a name="ResetOrderId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOrderId"></a>

```csharp
private void ResetOrderId()
```

##### `ResetOs` <a name="ResetOs" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOs"></a>

```csharp
private void ResetOs()
```

##### `ResetPostinstall` <a name="ResetPostinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPostinstall"></a>

```csharp
private void ResetPostinstall()
```

##### `ResetPreinstall` <a name="ResetPreinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPreinstall"></a>

```csharp
private void ResetPreinstall()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetSharetype` <a name="ResetSharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSharetype"></a>

```csharp
private void ResetSharetype()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTaints"></a>

```csharp
private void ResetTaints()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CceNodeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceNodeV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceNodeV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceNodeV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceNodeV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CceNodeV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CceNodeV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CceNodeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CceNodeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumes">DataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList">CceNodeV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference">CceNodeV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList">CceNodeV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference">CceNodeV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyNameInput">AgencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeModeInput">BandwidthChargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSizeInput">BandwidthSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingModeInput">BillingModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumesInput">DataVolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostIdInput">DedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSizeInput">DockerBaseSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverrideInput">DockerLvmConfigOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceTypeInput">EcsPerformanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCountInput">EipCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIdsInput">EipIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingModeInput">ExtendParamChargingModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptypeInput">IptypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STagsInput">K8STagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPairInput">KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPodsInput">MaxPodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderIdInput">OrderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.osInput">OsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstallInput">PostinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstallInput">PreinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetypeInput">SharetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taintsInput">TaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyName">AgencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeMode">BandwidthChargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSize">BandwidthSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingMode">BillingMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSize">DockerBaseSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverride">DockerLvmConfigOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceType">EcsPerformanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCount">EipCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIds">EipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingMode">ExtendParamChargingMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptype">Iptype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STags">K8STags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPods">MaxPods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstall">Postinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstall">Preinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetype">Sharetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataVolumes`<sup>Required</sup> <a name="DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumes"></a>

```csharp
public CceNodeV3DataVolumesList DataVolumes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList">CceNodeV3DataVolumesList</a>

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolume"></a>

```csharp
public CceNodeV3RootVolumeOutputReference RootVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference">CceNodeV3RootVolumeOutputReference</a>

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taints"></a>

```csharp
public CceNodeV3TaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList">CceNodeV3TaintsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeouts"></a>

```csharp
public CceNodeV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference">CceNodeV3TimeoutsOutputReference</a>

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyNameInput"></a>

```csharp
public string AgencyNameInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BandwidthChargeModeInput`<sup>Optional</sup> <a name="BandwidthChargeModeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeModeInput"></a>

```csharp
public string BandwidthChargeModeInput { get; }
```

- *Type:* string

---

##### `BandwidthSizeInput`<sup>Optional</sup> <a name="BandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSizeInput"></a>

```csharp
public double BandwidthSizeInput { get; }
```

- *Type:* double

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingModeInput"></a>

```csharp
public double BillingModeInput { get; }
```

- *Type:* double

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DataVolumesInput`<sup>Optional</sup> <a name="DataVolumesInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumesInput"></a>

```csharp
public object DataVolumesInput { get; }
```

- *Type:* object

---

##### `DedicatedHostIdInput`<sup>Optional</sup> <a name="DedicatedHostIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostIdInput"></a>

```csharp
public string DedicatedHostIdInput { get; }
```

- *Type:* string

---

##### `DockerBaseSizeInput`<sup>Optional</sup> <a name="DockerBaseSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSizeInput"></a>

```csharp
public double DockerBaseSizeInput { get; }
```

- *Type:* double

---

##### `DockerLvmConfigOverrideInput`<sup>Optional</sup> <a name="DockerLvmConfigOverrideInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverrideInput"></a>

```csharp
public string DockerLvmConfigOverrideInput { get; }
```

- *Type:* string

---

##### `EcsPerformanceTypeInput`<sup>Optional</sup> <a name="EcsPerformanceTypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceTypeInput"></a>

```csharp
public string EcsPerformanceTypeInput { get; }
```

- *Type:* string

---

##### `EipCountInput`<sup>Optional</sup> <a name="EipCountInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCountInput"></a>

```csharp
public double EipCountInput { get; }
```

- *Type:* double

---

##### `EipIdsInput`<sup>Optional</sup> <a name="EipIdsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIdsInput"></a>

```csharp
public string[] EipIdsInput { get; }
```

- *Type:* string[]

---

##### `ExtendParamChargingModeInput`<sup>Optional</sup> <a name="ExtendParamChargingModeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingModeInput"></a>

```csharp
public double ExtendParamChargingModeInput { get; }
```

- *Type:* double

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IptypeInput`<sup>Optional</sup> <a name="IptypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptypeInput"></a>

```csharp
public string IptypeInput { get; }
```

- *Type:* string

---

##### `K8STagsInput`<sup>Optional</sup> <a name="K8STagsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> K8STagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPairInput"></a>

```csharp
public string KeyPairInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPodsInput"></a>

```csharp
public double MaxPodsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderIdInput"></a>

```csharp
public string OrderIdInput { get; }
```

- *Type:* string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.osInput"></a>

```csharp
public string OsInput { get; }
```

- *Type:* string

---

##### `PostinstallInput`<sup>Optional</sup> <a name="PostinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstallInput"></a>

```csharp
public string PostinstallInput { get; }
```

- *Type:* string

---

##### `PreinstallInput`<sup>Optional</sup> <a name="PreinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstallInput"></a>

```csharp
public string PreinstallInput { get; }
```

- *Type:* string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolumeInput"></a>

```csharp
public CceNodeV3RootVolume RootVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `SharetypeInput`<sup>Optional</sup> <a name="SharetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetypeInput"></a>

```csharp
public string SharetypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taintsInput"></a>

```csharp
public object TaintsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyName"></a>

```csharp
public string AgencyName { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `BandwidthChargeMode`<sup>Required</sup> <a name="BandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeMode"></a>

```csharp
public string BandwidthChargeMode { get; }
```

- *Type:* string

---

##### `BandwidthSize`<sup>Required</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSize"></a>

```csharp
public double BandwidthSize { get; }
```

- *Type:* double

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingMode"></a>

```csharp
public double BillingMode { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; }
```

- *Type:* string

---

##### `DockerBaseSize`<sup>Required</sup> <a name="DockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSize"></a>

```csharp
public double DockerBaseSize { get; }
```

- *Type:* double

---

##### `DockerLvmConfigOverride`<sup>Required</sup> <a name="DockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverride"></a>

```csharp
public string DockerLvmConfigOverride { get; }
```

- *Type:* string

---

##### `EcsPerformanceType`<sup>Required</sup> <a name="EcsPerformanceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceType"></a>

```csharp
public string EcsPerformanceType { get; }
```

- *Type:* string

---

##### `EipCount`<sup>Required</sup> <a name="EipCount" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCount"></a>

```csharp
public double EipCount { get; }
```

- *Type:* double

---

##### `EipIds`<sup>Required</sup> <a name="EipIds" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIds"></a>

```csharp
public string[] EipIds { get; }
```

- *Type:* string[]

---

##### `ExtendParamChargingMode`<sup>Required</sup> <a name="ExtendParamChargingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingMode"></a>

```csharp
public double ExtendParamChargingMode { get; }
```

- *Type:* double

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Iptype`<sup>Required</sup> <a name="Iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptype"></a>

```csharp
public string Iptype { get; }
```

- *Type:* string

---

##### `K8STags`<sup>Required</sup> <a name="K8STags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> K8STags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPods"></a>

```csharp
public double MaxPods { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `Postinstall`<sup>Required</sup> <a name="Postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstall"></a>

```csharp
public string Postinstall { get; }
```

- *Type:* string

---

##### `Preinstall`<sup>Required</sup> <a name="Preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstall"></a>

```csharp
public string Preinstall { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Sharetype`<sup>Required</sup> <a name="Sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetype"></a>

```csharp
public string Sharetype { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodeV3Config <a name="CceNodeV3Config" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone,
    string ClusterId,
    object DataVolumes,
    string FlavorId,
    string KeyPair,
    CceNodeV3RootVolume RootVolume,
    string AgencyName = null,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string BandwidthChargeMode = null,
    double BandwidthSize = null,
    double BillingMode = null,
    string DedicatedHostId = null,
    double DockerBaseSize = null,
    string DockerLvmConfigOverride = null,
    string EcsPerformanceType = null,
    double EipCount = null,
    string[] EipIds = null,
    double ExtendParamChargingMode = null,
    string Id = null,
    string Iptype = null,
    System.Collections.Generic.IDictionary<string, string> K8STags = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MaxPods = null,
    string Name = null,
    string OrderId = null,
    string Os = null,
    string Postinstall = null,
    string Preinstall = null,
    string PrivateIp = null,
    string ProductId = null,
    string PublicKey = null,
    string Region = null,
    string Runtime = null,
    string Sharetype = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    object Taints = null,
    CceNodeV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dataVolumes">DataVolumes</a></code> | <code>object</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.keyPair">KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.agencyName">AgencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#agency_name CceNodeV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthChargeMode">BandwidthChargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthSize">BandwidthSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.billingMode">BillingMode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#dedicated_host_id CceNodeV3#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerBaseSize">DockerBaseSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerLvmConfigOverride">DockerLvmConfigOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.ecsPerformanceType">EcsPerformanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipCount">EipCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipIds">EipIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.extendParamChargingMode">ExtendParamChargingMode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#id CceNodeV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.iptype">Iptype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.k8STags">K8STags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#labels CceNodeV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.maxPods">MaxPods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#name CceNodeV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.orderId">OrderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.os">Os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#os CceNodeV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.postinstall">Postinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.preinstall">Preinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#region CceNodeV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.sharetype">Sharetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#tags CceNodeV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.taints">Taints</a></code> | <code>object</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}.

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}.

---

##### `DataVolumes`<sup>Required</sup> <a name="DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dataVolumes"></a>

```csharp
public object DataVolumes { get; set; }
```

- *Type:* object

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#data_volumes CceNodeV3#data_volumes}

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}.

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.keyPair"></a>

```csharp
public string KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}.

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.rootVolume"></a>

```csharp
public CceNodeV3RootVolume RootVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#root_volume CceNodeV3#root_volume}

---

##### `AgencyName`<sup>Optional</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.agencyName"></a>

```csharp
public string AgencyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#agency_name CceNodeV3#agency_name}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}.

---

##### `BandwidthChargeMode`<sup>Optional</sup> <a name="BandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthChargeMode"></a>

```csharp
public string BandwidthChargeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}.

---

##### `BandwidthSize`<sup>Optional</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthSize"></a>

```csharp
public double BandwidthSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}.

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.billingMode"></a>

```csharp
public double BillingMode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}.

---

##### `DedicatedHostId`<sup>Optional</sup> <a name="DedicatedHostId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#dedicated_host_id CceNodeV3#dedicated_host_id}.

---

##### `DockerBaseSize`<sup>Optional</sup> <a name="DockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerBaseSize"></a>

```csharp
public double DockerBaseSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}.

---

##### `DockerLvmConfigOverride`<sup>Optional</sup> <a name="DockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerLvmConfigOverride"></a>

```csharp
public string DockerLvmConfigOverride { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}.

---

##### `EcsPerformanceType`<sup>Optional</sup> <a name="EcsPerformanceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.ecsPerformanceType"></a>

```csharp
public string EcsPerformanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}.

---

##### `EipCount`<sup>Optional</sup> <a name="EipCount" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipCount"></a>

```csharp
public double EipCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}.

---

##### `EipIds`<sup>Optional</sup> <a name="EipIds" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipIds"></a>

```csharp
public string[] EipIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}.

---

##### `ExtendParamChargingMode`<sup>Optional</sup> <a name="ExtendParamChargingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.extendParamChargingMode"></a>

```csharp
public double ExtendParamChargingMode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#id CceNodeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iptype`<sup>Optional</sup> <a name="Iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.iptype"></a>

```csharp
public string Iptype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}.

---

##### `K8STags`<sup>Optional</sup> <a name="K8STags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.k8STags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> K8STags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#labels CceNodeV3#labels}.

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.maxPods"></a>

```csharp
public double MaxPods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#name CceNodeV3#name}.

---

##### `OrderId`<sup>Optional</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.orderId"></a>

```csharp
public string OrderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}.

---

##### `Os`<sup>Optional</sup> <a name="Os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.os"></a>

```csharp
public string Os { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#os CceNodeV3#os}.

---

##### `Postinstall`<sup>Optional</sup> <a name="Postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.postinstall"></a>

```csharp
public string Postinstall { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}.

---

##### `Preinstall`<sup>Optional</sup> <a name="Preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.preinstall"></a>

```csharp
public string Preinstall { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#region CceNodeV3#region}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}.

---

##### `Sharetype`<sup>Optional</sup> <a name="Sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.sharetype"></a>

```csharp
public string Sharetype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#tags CceNodeV3#tags}.

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.taints"></a>

```csharp
public object Taints { get; set; }
```

- *Type:* object

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#taints CceNodeV3#taints}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.timeouts"></a>

```csharp
public CceNodeV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#timeouts CceNodeV3#timeouts}

---

### CceNodeV3DataVolumes <a name="CceNodeV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3DataVolumes {
    double Size,
    string Volumetype,
    string ExtendParam = null,
    System.Collections.Generic.IDictionary<string, string> ExtendParams = null,
    string KmsId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#size CceNodeV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.volumetype">Volumetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParam">ExtendParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParams">ExtendParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.kmsId">KmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.volumetype"></a>

```csharp
public string Volumetype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

##### `ExtendParam`<sup>Optional</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParam"></a>

```csharp
public string ExtendParam { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

##### `ExtendParams`<sup>Optional</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

##### `KmsId`<sup>Optional</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.kmsId"></a>

```csharp
public string KmsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

### CceNodeV3RootVolume <a name="CceNodeV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3RootVolume {
    double Size,
    string Volumetype,
    string ExtendParam = null,
    System.Collections.Generic.IDictionary<string, string> ExtendParams = null,
    string KmsId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#size CceNodeV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.volumetype">Volumetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParam">ExtendParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParams">ExtendParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.kmsId">KmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.volumetype"></a>

```csharp
public string Volumetype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

##### `ExtendParam`<sup>Optional</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParam"></a>

```csharp
public string ExtendParam { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

##### `ExtendParams`<sup>Optional</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

##### `KmsId`<sup>Optional</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.kmsId"></a>

```csharp
public string KmsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

### CceNodeV3Taints <a name="CceNodeV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3Taints {
    string Effect,
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#effect CceNodeV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#key CceNodeV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#value CceNodeV3#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#effect CceNodeV3#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#key CceNodeV3#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#value CceNodeV3#value}.

---

### CceNodeV3Timeouts <a name="CceNodeV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#create CceNodeV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#delete CceNodeV3#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#create CceNodeV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cce_node_v3#delete CceNodeV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodeV3DataVolumesList <a name="CceNodeV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3DataVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get"></a>

```csharp
private CceNodeV3DataVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CceNodeV3DataVolumesOutputReference <a name="CceNodeV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3DataVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParam">ResetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParams">ResetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetKmsId">ResetKmsId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtendParam` <a name="ResetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParam"></a>

```csharp
private void ResetExtendParam()
```

##### `ResetExtendParams` <a name="ResetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParams"></a>

```csharp
private void ResetExtendParams()
```

##### `ResetKmsId` <a name="ResetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetKmsId"></a>

```csharp
private void ResetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamInput">ExtendParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamsInput">ExtendParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsIdInput">KmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetypeInput">VolumetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParam">ExtendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParams">ExtendParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsId">KmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetype">Volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtendParamInput`<sup>Optional</sup> <a name="ExtendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamInput"></a>

```csharp
public string ExtendParamInput { get; }
```

- *Type:* string

---

##### `ExtendParamsInput`<sup>Optional</sup> <a name="ExtendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsIdInput`<sup>Optional</sup> <a name="KmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsIdInput"></a>

```csharp
public string KmsIdInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `VolumetypeInput`<sup>Optional</sup> <a name="VolumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetypeInput"></a>

```csharp
public string VolumetypeInput { get; }
```

- *Type:* string

---

##### `ExtendParam`<sup>Required</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParam"></a>

```csharp
public string ExtendParam { get; }
```

- *Type:* string

---

##### `ExtendParams`<sup>Required</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsId`<sup>Required</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsId"></a>

```csharp
public string KmsId { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetype"></a>

```csharp
public string Volumetype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CceNodeV3RootVolumeOutputReference <a name="CceNodeV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3RootVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParam">ResetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParams">ResetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetKmsId">ResetKmsId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtendParam` <a name="ResetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParam"></a>

```csharp
private void ResetExtendParam()
```

##### `ResetExtendParams` <a name="ResetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParams"></a>

```csharp
private void ResetExtendParams()
```

##### `ResetKmsId` <a name="ResetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetKmsId"></a>

```csharp
private void ResetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamInput">ExtendParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamsInput">ExtendParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsIdInput">KmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetypeInput">VolumetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParam">ExtendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParams">ExtendParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsId">KmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetype">Volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtendParamInput`<sup>Optional</sup> <a name="ExtendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamInput"></a>

```csharp
public string ExtendParamInput { get; }
```

- *Type:* string

---

##### `ExtendParamsInput`<sup>Optional</sup> <a name="ExtendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsIdInput`<sup>Optional</sup> <a name="KmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsIdInput"></a>

```csharp
public string KmsIdInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `VolumetypeInput`<sup>Optional</sup> <a name="VolumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetypeInput"></a>

```csharp
public string VolumetypeInput { get; }
```

- *Type:* string

---

##### `ExtendParam`<sup>Required</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParam"></a>

```csharp
public string ExtendParam { get; }
```

- *Type:* string

---

##### `ExtendParams`<sup>Required</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsId`<sup>Required</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsId"></a>

```csharp
public string KmsId { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetype"></a>

```csharp
public string Volumetype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.internalValue"></a>

```csharp
public CceNodeV3RootVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---


### CceNodeV3TaintsList <a name="CceNodeV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3TaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get"></a>

```csharp
private CceNodeV3TaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CceNodeV3TaintsOutputReference <a name="CceNodeV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3TaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CceNodeV3TimeoutsOutputReference <a name="CceNodeV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceNodeV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



