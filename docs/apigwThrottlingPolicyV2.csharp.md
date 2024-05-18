# `apigwThrottlingPolicyV2` Submodule <a name="`apigwThrottlingPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwThrottlingPolicyV2 <a name="ApigwThrottlingPolicyV2" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2 opentelekomcloud_apigw_throttling_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2(Construct Scope, string Id, ApigwThrottlingPolicyV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config">ApigwThrottlingPolicyV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config">ApigwThrottlingPolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles">PutAppThrottles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles">PutUserThrottles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetAppThrottles">ResetAppThrottles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxAppRequests">ResetMaxAppRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxIpRequests">ResetMaxIpRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxUserRequests">ResetMaxUserRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetPeriodUnit">ResetPeriodUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetUserThrottles">ResetUserThrottles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppThrottles` <a name="PutAppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles"></a>

```csharp
private void PutAppThrottles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles.parameter.value"></a>

- *Type:* object

---

##### `PutUserThrottles` <a name="PutUserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles"></a>

```csharp
private void PutUserThrottles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles.parameter.value"></a>

- *Type:* object

---

##### `ResetAppThrottles` <a name="ResetAppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetAppThrottles"></a>

```csharp
private void ResetAppThrottles()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxAppRequests` <a name="ResetMaxAppRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxAppRequests"></a>

```csharp
private void ResetMaxAppRequests()
```

##### `ResetMaxIpRequests` <a name="ResetMaxIpRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxIpRequests"></a>

```csharp
private void ResetMaxIpRequests()
```

##### `ResetMaxUserRequests` <a name="ResetMaxUserRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxUserRequests"></a>

```csharp
private void ResetMaxUserRequests()
```

##### `ResetPeriodUnit` <a name="ResetPeriodUnit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetPeriodUnit"></a>

```csharp
private void ResetPeriodUnit()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserThrottles` <a name="ResetUserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetUserThrottles"></a>

```csharp
private void ResetUserThrottles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwThrottlingPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwThrottlingPolicyV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwThrottlingPolicyV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwThrottlingPolicyV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwThrottlingPolicyV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigwThrottlingPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwThrottlingPolicyV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwThrottlingPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigwThrottlingPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottles">AppThrottles</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList">ApigwThrottlingPolicyV2AppThrottlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottles">UserThrottles</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList">ApigwThrottlingPolicyV2UserThrottlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottlesInput">AppThrottlesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequestsInput">MaxApiRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequestsInput">MaxAppRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequestsInput">MaxIpRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequestsInput">MaxUserRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnitInput">PeriodUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottlesInput">UserThrottlesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequests">MaxApiRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequests">MaxAppRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequests">MaxIpRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequests">MaxUserRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnit">PeriodUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppThrottles`<sup>Required</sup> <a name="AppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottles"></a>

```csharp
public ApigwThrottlingPolicyV2AppThrottlesList AppThrottles { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList">ApigwThrottlingPolicyV2AppThrottlesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserThrottles`<sup>Required</sup> <a name="UserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottles"></a>

```csharp
public ApigwThrottlingPolicyV2UserThrottlesList UserThrottles { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList">ApigwThrottlingPolicyV2UserThrottlesList</a>

---

##### `AppThrottlesInput`<sup>Optional</sup> <a name="AppThrottlesInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottlesInput"></a>

```csharp
public object AppThrottlesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `MaxApiRequestsInput`<sup>Optional</sup> <a name="MaxApiRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequestsInput"></a>

```csharp
public double MaxApiRequestsInput { get; }
```

- *Type:* double

---

##### `MaxAppRequestsInput`<sup>Optional</sup> <a name="MaxAppRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequestsInput"></a>

```csharp
public double MaxAppRequestsInput { get; }
```

- *Type:* double

---

##### `MaxIpRequestsInput`<sup>Optional</sup> <a name="MaxIpRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequestsInput"></a>

```csharp
public double MaxIpRequestsInput { get; }
```

- *Type:* double

---

##### `MaxUserRequestsInput`<sup>Optional</sup> <a name="MaxUserRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequestsInput"></a>

```csharp
public double MaxUserRequestsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `PeriodUnitInput`<sup>Optional</sup> <a name="PeriodUnitInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnitInput"></a>

```csharp
public string PeriodUnitInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserThrottlesInput`<sup>Optional</sup> <a name="UserThrottlesInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottlesInput"></a>

```csharp
public object UserThrottlesInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `MaxApiRequests`<sup>Required</sup> <a name="MaxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequests"></a>

```csharp
public double MaxApiRequests { get; }
```

- *Type:* double

---

##### `MaxAppRequests`<sup>Required</sup> <a name="MaxAppRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequests"></a>

```csharp
public double MaxAppRequests { get; }
```

- *Type:* double

---

##### `MaxIpRequests`<sup>Required</sup> <a name="MaxIpRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequests"></a>

```csharp
public double MaxIpRequests { get; }
```

- *Type:* double

---

##### `MaxUserRequests`<sup>Required</sup> <a name="MaxUserRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequests"></a>

```csharp
public double MaxUserRequests { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `PeriodUnit`<sup>Required</sup> <a name="PeriodUnit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnit"></a>

```csharp
public string PeriodUnit { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwThrottlingPolicyV2AppThrottles <a name="ApigwThrottlingPolicyV2AppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2AppThrottles {
    double MaxApiRequests,
    string ThrottlingObjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.maxApiRequests">MaxApiRequests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.throttlingObjectId">ThrottlingObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}. |

---

##### `MaxApiRequests`<sup>Required</sup> <a name="MaxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.maxApiRequests"></a>

```csharp
public double MaxApiRequests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `ThrottlingObjectId`<sup>Required</sup> <a name="ThrottlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.throttlingObjectId"></a>

```csharp
public string ThrottlingObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}.

---

### ApigwThrottlingPolicyV2Config <a name="ApigwThrottlingPolicyV2Config" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    double MaxApiRequests,
    string Name,
    double Period,
    object AppThrottles = null,
    string Description = null,
    string Id = null,
    double MaxAppRequests = null,
    double MaxIpRequests = null,
    double MaxUserRequests = null,
    string PeriodUnit = null,
    string Type = null,
    object UserThrottles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxApiRequests">MaxApiRequests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.appThrottles">AppThrottles</a></code> | <code>object</code> | app_throttles block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxAppRequests">MaxAppRequests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxIpRequests">MaxIpRequests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxUserRequests">MaxUserRequests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.periodUnit">PeriodUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.userThrottles">UserThrottles</a></code> | <code>object</code> | user_throttles block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}.

---

##### `MaxApiRequests`<sup>Required</sup> <a name="MaxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxApiRequests"></a>

```csharp
public double MaxApiRequests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}.

---

##### `AppThrottles`<sup>Optional</sup> <a name="AppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.appThrottles"></a>

```csharp
public object AppThrottles { get; set; }
```

- *Type:* object

app_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#app_throttles ApigwThrottlingPolicyV2#app_throttles}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxAppRequests`<sup>Optional</sup> <a name="MaxAppRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxAppRequests"></a>

```csharp
public double MaxAppRequests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}.

---

##### `MaxIpRequests`<sup>Optional</sup> <a name="MaxIpRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxIpRequests"></a>

```csharp
public double MaxIpRequests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}.

---

##### `MaxUserRequests`<sup>Optional</sup> <a name="MaxUserRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxUserRequests"></a>

```csharp
public double MaxUserRequests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}.

---

##### `PeriodUnit`<sup>Optional</sup> <a name="PeriodUnit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.periodUnit"></a>

```csharp
public string PeriodUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}.

---

##### `UserThrottles`<sup>Optional</sup> <a name="UserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.userThrottles"></a>

```csharp
public object UserThrottles { get; set; }
```

- *Type:* object

user_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#user_throttles ApigwThrottlingPolicyV2#user_throttles}

---

### ApigwThrottlingPolicyV2UserThrottles <a name="ApigwThrottlingPolicyV2UserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2UserThrottles {
    double MaxApiRequests,
    string ThrottlingObjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.maxApiRequests">MaxApiRequests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.throttlingObjectId">ThrottlingObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}. |

---

##### `MaxApiRequests`<sup>Required</sup> <a name="MaxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.maxApiRequests"></a>

```csharp
public double MaxApiRequests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `ThrottlingObjectId`<sup>Required</sup> <a name="ThrottlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.throttlingObjectId"></a>

```csharp
public string ThrottlingObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwThrottlingPolicyV2AppThrottlesList <a name="ApigwThrottlingPolicyV2AppThrottlesList" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2AppThrottlesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get"></a>

```csharp
private ApigwThrottlingPolicyV2AppThrottlesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwThrottlingPolicyV2AppThrottlesOutputReference <a name="ApigwThrottlingPolicyV2AppThrottlesOutputReference" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2AppThrottlesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectName">ThrottlingObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequestsInput">MaxApiRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectIdInput">ThrottlingObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequests">MaxApiRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectId">ThrottlingObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ThrottlingObjectName`<sup>Required</sup> <a name="ThrottlingObjectName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectName"></a>

```csharp
public string ThrottlingObjectName { get; }
```

- *Type:* string

---

##### `MaxApiRequestsInput`<sup>Optional</sup> <a name="MaxApiRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequestsInput"></a>

```csharp
public double MaxApiRequestsInput { get; }
```

- *Type:* double

---

##### `ThrottlingObjectIdInput`<sup>Optional</sup> <a name="ThrottlingObjectIdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectIdInput"></a>

```csharp
public string ThrottlingObjectIdInput { get; }
```

- *Type:* string

---

##### `MaxApiRequests`<sup>Required</sup> <a name="MaxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequests"></a>

```csharp
public double MaxApiRequests { get; }
```

- *Type:* double

---

##### `ThrottlingObjectId`<sup>Required</sup> <a name="ThrottlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectId"></a>

```csharp
public string ThrottlingObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwThrottlingPolicyV2UserThrottlesList <a name="ApigwThrottlingPolicyV2UserThrottlesList" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2UserThrottlesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get"></a>

```csharp
private ApigwThrottlingPolicyV2UserThrottlesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwThrottlingPolicyV2UserThrottlesOutputReference <a name="ApigwThrottlingPolicyV2UserThrottlesOutputReference" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwThrottlingPolicyV2UserThrottlesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectName">ThrottlingObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequestsInput">MaxApiRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectIdInput">ThrottlingObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequests">MaxApiRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectId">ThrottlingObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ThrottlingObjectName`<sup>Required</sup> <a name="ThrottlingObjectName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectName"></a>

```csharp
public string ThrottlingObjectName { get; }
```

- *Type:* string

---

##### `MaxApiRequestsInput`<sup>Optional</sup> <a name="MaxApiRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequestsInput"></a>

```csharp
public double MaxApiRequestsInput { get; }
```

- *Type:* double

---

##### `ThrottlingObjectIdInput`<sup>Optional</sup> <a name="ThrottlingObjectIdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectIdInput"></a>

```csharp
public string ThrottlingObjectIdInput { get; }
```

- *Type:* string

---

##### `MaxApiRequests`<sup>Required</sup> <a name="MaxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequests"></a>

```csharp
public double MaxApiRequests { get; }
```

- *Type:* double

---

##### `ThrottlingObjectId`<sup>Required</sup> <a name="ThrottlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectId"></a>

```csharp
public string ThrottlingObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



