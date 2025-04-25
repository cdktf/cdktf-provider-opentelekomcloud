# `wafDedicatedPolicyV1` Submodule <a name="`wafDedicatedPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPolicyV1 <a name="WafDedicatedPolicyV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1 opentelekomcloud_waf_dedicated_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1(Construct Scope, string Id, WafDedicatedPolicyV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config">WafDedicatedPolicyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config">WafDedicatedPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection">ResetDeepInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection">ResetFullDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection">ResetHeaderInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode">ResetProtectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck">ResetShiroDecryptionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions"></a>

```csharp
private void PutOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafDedicatedPolicyV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

---

##### `ResetDeepInspection` <a name="ResetDeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection"></a>

```csharp
private void ResetDeepInspection()
```

##### `ResetFullDetection` <a name="ResetFullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection"></a>

```csharp
private void ResetFullDetection()
```

##### `ResetHeaderInspection` <a name="ResetHeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection"></a>

```csharp
private void ResetHeaderInspection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetProtectionMode` <a name="ResetProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode"></a>

```csharp
private void ResetProtectionMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetShiroDecryptionCheck` <a name="ResetShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck"></a>

```csharp
private void ResetShiroDecryptionCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedPolicyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedPolicyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedPolicyV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedPolicyV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDedicatedPolicyV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDedicatedPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options">Options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput">DeepInspectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput">FullDetectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput">HeaderInspectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput">LevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput">OptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput">ProtectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput">ShiroDecryptionCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection">DeepInspection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection">FullDetection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection">HeaderInspection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level">Level</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck">ShiroDecryptionCheck</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options"></a>

```csharp
public WafDedicatedPolicyV1OptionsList Options { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts"></a>

```csharp
public WafDedicatedPolicyV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a>

---

##### `DeepInspectionInput`<sup>Optional</sup> <a name="DeepInspectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput"></a>

```csharp
public object DeepInspectionInput { get; }
```

- *Type:* object

---

##### `FullDetectionInput`<sup>Optional</sup> <a name="FullDetectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput"></a>

```csharp
public object FullDetectionInput { get; }
```

- *Type:* object

---

##### `HeaderInspectionInput`<sup>Optional</sup> <a name="HeaderInspectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput"></a>

```csharp
public object HeaderInspectionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput"></a>

```csharp
public double LevelInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput"></a>

```csharp
public object OptionsInput { get; }
```

- *Type:* object

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput"></a>

```csharp
public string ProtectionModeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ShiroDecryptionCheckInput`<sup>Optional</sup> <a name="ShiroDecryptionCheckInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput"></a>

```csharp
public object ShiroDecryptionCheckInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeepInspection`<sup>Required</sup> <a name="DeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection"></a>

```csharp
public object DeepInspection { get; }
```

- *Type:* object

---

##### `FullDetection`<sup>Required</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection"></a>

```csharp
public object FullDetection { get; }
```

- *Type:* object

---

##### `HeaderInspection`<sup>Required</sup> <a name="HeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection"></a>

```csharp
public object HeaderInspection { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level"></a>

```csharp
public double Level { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ShiroDecryptionCheck`<sup>Required</sup> <a name="ShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck"></a>

```csharp
public object ShiroDecryptionCheck { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPolicyV1Config <a name="WafDedicatedPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object DeepInspection = null,
    object FullDetection = null,
    object HeaderInspection = null,
    string Id = null,
    double Level = null,
    object Options = null,
    string ProtectionMode = null,
    string Region = null,
    object ShiroDecryptionCheck = null,
    WafDedicatedPolicyV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection">DeepInspection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection">FullDetection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection">HeaderInspection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level">Level</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options">Options</a></code> | <code>object</code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck">ShiroDecryptionCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}.

---

##### `DeepInspection`<sup>Optional</sup> <a name="DeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection"></a>

```csharp
public object DeepInspection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}.

---

##### `FullDetection`<sup>Optional</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection"></a>

```csharp
public object FullDetection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}.

---

##### `HeaderInspection`<sup>Optional</sup> <a name="HeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection"></a>

```csharp
public object HeaderInspection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level"></a>

```csharp
public double Level { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options"></a>

```csharp
public object Options { get; set; }
```

- *Type:* object

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#options WafDedicatedPolicyV1#options}

---

##### `ProtectionMode`<sup>Optional</sup> <a name="ProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}.

---

##### `ShiroDecryptionCheck`<sup>Optional</sup> <a name="ShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck"></a>

```csharp
public object ShiroDecryptionCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts"></a>

```csharp
public WafDedicatedPolicyV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#timeouts WafDedicatedPolicyV1#timeouts}

---

### WafDedicatedPolicyV1Options <a name="WafDedicatedPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1Options {
    object AntiCrawler = null,
    object AntiLeakage = null,
    object AntiTamper = null,
    object Blacklist = null,
    object Cc = null,
    object Common = null,
    object Crawler = null,
    object CrawlerEngine = null,
    object CrawlerOther = null,
    object CrawlerScanner = null,
    object CrawlerScript = null,
    object Custom = null,
    object FollowedAction = null,
    object GeolocationAccessControl = null,
    object Ignore = null,
    object Privacy = null,
    object WebAttack = null,
    object WebShell = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler">AntiCrawler</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage">AntiLeakage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper">AntiTamper</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist">Blacklist</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc">Cc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common">Common</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler">Crawler</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine">CrawlerEngine</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther">CrawlerOther</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner">CrawlerScanner</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript">CrawlerScript</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom">Custom</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction">FollowedAction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl">GeolocationAccessControl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore">Ignore</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy">Privacy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack">WebAttack</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell">WebShell</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}. |

---

##### `AntiCrawler`<sup>Optional</sup> <a name="AntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler"></a>

```csharp
public object AntiCrawler { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}.

---

##### `AntiLeakage`<sup>Optional</sup> <a name="AntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage"></a>

```csharp
public object AntiLeakage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}.

---

##### `AntiTamper`<sup>Optional</sup> <a name="AntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper"></a>

```csharp
public object AntiTamper { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}.

---

##### `Blacklist`<sup>Optional</sup> <a name="Blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist"></a>

```csharp
public object Blacklist { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}.

---

##### `Cc`<sup>Optional</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc"></a>

```csharp
public object Cc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}.

---

##### `Common`<sup>Optional</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common"></a>

```csharp
public object Common { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}.

---

##### `Crawler`<sup>Optional</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler"></a>

```csharp
public object Crawler { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}.

---

##### `CrawlerEngine`<sup>Optional</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine"></a>

```csharp
public object CrawlerEngine { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}.

---

##### `CrawlerOther`<sup>Optional</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther"></a>

```csharp
public object CrawlerOther { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}.

---

##### `CrawlerScanner`<sup>Optional</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner"></a>

```csharp
public object CrawlerScanner { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}.

---

##### `CrawlerScript`<sup>Optional</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript"></a>

```csharp
public object CrawlerScript { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom"></a>

```csharp
public object Custom { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}.

---

##### `FollowedAction`<sup>Optional</sup> <a name="FollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction"></a>

```csharp
public object FollowedAction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}.

---

##### `GeolocationAccessControl`<sup>Optional</sup> <a name="GeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl"></a>

```csharp
public object GeolocationAccessControl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}.

---

##### `Ignore`<sup>Optional</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore"></a>

```csharp
public object Ignore { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}.

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy"></a>

```csharp
public object Privacy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}.

---

##### `WebAttack`<sup>Optional</sup> <a name="WebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack"></a>

```csharp
public object WebAttack { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}.

---

##### `WebShell`<sup>Optional</sup> <a name="WebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell"></a>

```csharp
public object WebShell { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}.

---

### WafDedicatedPolicyV1Timeouts <a name="WafDedicatedPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPolicyV1OptionsList <a name="WafDedicatedPolicyV1OptionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1OptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get"></a>

```csharp
private WafDedicatedPolicyV1OptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedPolicyV1OptionsOutputReference <a name="WafDedicatedPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1OptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler">ResetAntiCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage">ResetAntiLeakage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper">ResetAntiTamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist">ResetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc">ResetCc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon">ResetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler">ResetCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine">ResetCrawlerEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther">ResetCrawlerOther</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner">ResetCrawlerScanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript">ResetCrawlerScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction">ResetFollowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl">ResetGeolocationAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore">ResetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy">ResetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack">ResetWebAttack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell">ResetWebShell</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAntiCrawler` <a name="ResetAntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler"></a>

```csharp
private void ResetAntiCrawler()
```

##### `ResetAntiLeakage` <a name="ResetAntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage"></a>

```csharp
private void ResetAntiLeakage()
```

##### `ResetAntiTamper` <a name="ResetAntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper"></a>

```csharp
private void ResetAntiTamper()
```

##### `ResetBlacklist` <a name="ResetBlacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist"></a>

```csharp
private void ResetBlacklist()
```

##### `ResetCc` <a name="ResetCc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc"></a>

```csharp
private void ResetCc()
```

##### `ResetCommon` <a name="ResetCommon" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon"></a>

```csharp
private void ResetCommon()
```

##### `ResetCrawler` <a name="ResetCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler"></a>

```csharp
private void ResetCrawler()
```

##### `ResetCrawlerEngine` <a name="ResetCrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```csharp
private void ResetCrawlerEngine()
```

##### `ResetCrawlerOther` <a name="ResetCrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```csharp
private void ResetCrawlerOther()
```

##### `ResetCrawlerScanner` <a name="ResetCrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```csharp
private void ResetCrawlerScanner()
```

##### `ResetCrawlerScript` <a name="ResetCrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```csharp
private void ResetCrawlerScript()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetFollowedAction` <a name="ResetFollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction"></a>

```csharp
private void ResetFollowedAction()
```

##### `ResetGeolocationAccessControl` <a name="ResetGeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl"></a>

```csharp
private void ResetGeolocationAccessControl()
```

##### `ResetIgnore` <a name="ResetIgnore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore"></a>

```csharp
private void ResetIgnore()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy"></a>

```csharp
private void ResetPrivacy()
```

##### `ResetWebAttack` <a name="ResetWebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack"></a>

```csharp
private void ResetWebAttack()
```

##### `ResetWebShell` <a name="ResetWebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell"></a>

```csharp
private void ResetWebShell()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable">BotEnable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise">Precise</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput">AntiCrawlerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput">AntiLeakageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput">AntiTamperInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput">BlacklistInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput">CcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput">CommonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput">CrawlerEngineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput">CrawlerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput">CrawlerOtherInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput">CrawlerScannerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput">CrawlerScriptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput">CustomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput">FollowedActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput">GeolocationAccessControlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput">IgnoreInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput">WebAttackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput">WebShellInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler">AntiCrawler</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage">AntiLeakage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper">AntiTamper</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist">Blacklist</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc">Cc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common">Common</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler">Crawler</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine">CrawlerEngine</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther">CrawlerOther</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner">CrawlerScanner</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript">CrawlerScript</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom">Custom</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction">FollowedAction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl">GeolocationAccessControl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore">Ignore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy">Privacy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack">WebAttack</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell">WebShell</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BotEnable`<sup>Required</sup> <a name="BotEnable" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable"></a>

```csharp
public IResolvable BotEnable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise"></a>

```csharp
public IResolvable Precise { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AntiCrawlerInput`<sup>Optional</sup> <a name="AntiCrawlerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput"></a>

```csharp
public object AntiCrawlerInput { get; }
```

- *Type:* object

---

##### `AntiLeakageInput`<sup>Optional</sup> <a name="AntiLeakageInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput"></a>

```csharp
public object AntiLeakageInput { get; }
```

- *Type:* object

---

##### `AntiTamperInput`<sup>Optional</sup> <a name="AntiTamperInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput"></a>

```csharp
public object AntiTamperInput { get; }
```

- *Type:* object

---

##### `BlacklistInput`<sup>Optional</sup> <a name="BlacklistInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput"></a>

```csharp
public object BlacklistInput { get; }
```

- *Type:* object

---

##### `CcInput`<sup>Optional</sup> <a name="CcInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput"></a>

```csharp
public object CcInput { get; }
```

- *Type:* object

---

##### `CommonInput`<sup>Optional</sup> <a name="CommonInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput"></a>

```csharp
public object CommonInput { get; }
```

- *Type:* object

---

##### `CrawlerEngineInput`<sup>Optional</sup> <a name="CrawlerEngineInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```csharp
public object CrawlerEngineInput { get; }
```

- *Type:* object

---

##### `CrawlerInput`<sup>Optional</sup> <a name="CrawlerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```csharp
public object CrawlerInput { get; }
```

- *Type:* object

---

##### `CrawlerOtherInput`<sup>Optional</sup> <a name="CrawlerOtherInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```csharp
public object CrawlerOtherInput { get; }
```

- *Type:* object

---

##### `CrawlerScannerInput`<sup>Optional</sup> <a name="CrawlerScannerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```csharp
public object CrawlerScannerInput { get; }
```

- *Type:* object

---

##### `CrawlerScriptInput`<sup>Optional</sup> <a name="CrawlerScriptInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```csharp
public object CrawlerScriptInput { get; }
```

- *Type:* object

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput"></a>

```csharp
public object CustomInput { get; }
```

- *Type:* object

---

##### `FollowedActionInput`<sup>Optional</sup> <a name="FollowedActionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput"></a>

```csharp
public object FollowedActionInput { get; }
```

- *Type:* object

---

##### `GeolocationAccessControlInput`<sup>Optional</sup> <a name="GeolocationAccessControlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput"></a>

```csharp
public object GeolocationAccessControlInput { get; }
```

- *Type:* object

---

##### `IgnoreInput`<sup>Optional</sup> <a name="IgnoreInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```csharp
public object IgnoreInput { get; }
```

- *Type:* object

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput"></a>

```csharp
public object PrivacyInput { get; }
```

- *Type:* object

---

##### `WebAttackInput`<sup>Optional</sup> <a name="WebAttackInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput"></a>

```csharp
public object WebAttackInput { get; }
```

- *Type:* object

---

##### `WebShellInput`<sup>Optional</sup> <a name="WebShellInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput"></a>

```csharp
public object WebShellInput { get; }
```

- *Type:* object

---

##### `AntiCrawler`<sup>Required</sup> <a name="AntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler"></a>

```csharp
public object AntiCrawler { get; }
```

- *Type:* object

---

##### `AntiLeakage`<sup>Required</sup> <a name="AntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage"></a>

```csharp
public object AntiLeakage { get; }
```

- *Type:* object

---

##### `AntiTamper`<sup>Required</sup> <a name="AntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper"></a>

```csharp
public object AntiTamper { get; }
```

- *Type:* object

---

##### `Blacklist`<sup>Required</sup> <a name="Blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist"></a>

```csharp
public object Blacklist { get; }
```

- *Type:* object

---

##### `Cc`<sup>Required</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc"></a>

```csharp
public object Cc { get; }
```

- *Type:* object

---

##### `Common`<sup>Required</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common"></a>

```csharp
public object Common { get; }
```

- *Type:* object

---

##### `Crawler`<sup>Required</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler"></a>

```csharp
public object Crawler { get; }
```

- *Type:* object

---

##### `CrawlerEngine`<sup>Required</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```csharp
public object CrawlerEngine { get; }
```

- *Type:* object

---

##### `CrawlerOther`<sup>Required</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```csharp
public object CrawlerOther { get; }
```

- *Type:* object

---

##### `CrawlerScanner`<sup>Required</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```csharp
public object CrawlerScanner { get; }
```

- *Type:* object

---

##### `CrawlerScript`<sup>Required</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```csharp
public object CrawlerScript { get; }
```

- *Type:* object

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom"></a>

```csharp
public object Custom { get; }
```

- *Type:* object

---

##### `FollowedAction`<sup>Required</sup> <a name="FollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction"></a>

```csharp
public object FollowedAction { get; }
```

- *Type:* object

---

##### `GeolocationAccessControl`<sup>Required</sup> <a name="GeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl"></a>

```csharp
public object GeolocationAccessControl { get; }
```

- *Type:* object

---

##### `Ignore`<sup>Required</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore"></a>

```csharp
public object Ignore { get; }
```

- *Type:* object

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy"></a>

```csharp
public object Privacy { get; }
```

- *Type:* object

---

##### `WebAttack`<sup>Required</sup> <a name="WebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack"></a>

```csharp
public object WebAttack { get; }
```

- *Type:* object

---

##### `WebShell`<sup>Required</sup> <a name="WebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell"></a>

```csharp
public object WebShell { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedPolicyV1TimeoutsOutputReference <a name="WafDedicatedPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedPolicyV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



