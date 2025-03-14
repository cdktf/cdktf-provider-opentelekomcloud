# `vpnaasIkePolicyV2` Submodule <a name="`vpnaasIkePolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasIkePolicyV2 <a name="VpnaasIkePolicyV2" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2 opentelekomcloud_vpnaas_ike_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2(Construct Scope, string Id, VpnaasIkePolicyV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config">VpnaasIkePolicyV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config">VpnaasIkePolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.putLifetime">PutLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetAuthAlgorithm">ResetAuthAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetIkeVersion">ResetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetLifetime">ResetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetPfs">ResetPfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetPhase1NegotiationMode">ResetPhase1NegotiationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetValueSpecs">ResetValueSpecs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLifetime` <a name="PutLifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.putLifetime"></a>

```csharp
private void PutLifetime(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.putLifetime.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.putTimeouts"></a>

```csharp
private void PutTimeouts(VpnaasIkePolicyV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts">VpnaasIkePolicyV2Timeouts</a>

---

##### `ResetAuthAlgorithm` <a name="ResetAuthAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetAuthAlgorithm"></a>

```csharp
private void ResetAuthAlgorithm()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIkeVersion` <a name="ResetIkeVersion" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetIkeVersion"></a>

```csharp
private void ResetIkeVersion()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetLifetime"></a>

```csharp
private void ResetLifetime()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPfs` <a name="ResetPfs" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetPfs"></a>

```csharp
private void ResetPfs()
```

##### `ResetPhase1NegotiationMode` <a name="ResetPhase1NegotiationMode" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetPhase1NegotiationMode"></a>

```csharp
private void ResetPhase1NegotiationMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueSpecs` <a name="ResetValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.resetValueSpecs"></a>

```csharp
private void ResetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnaasIkePolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasIkePolicyV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasIkePolicyV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasIkePolicyV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasIkePolicyV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpnaasIkePolicyV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnaasIkePolicyV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnaasIkePolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpnaasIkePolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.lifetime">Lifetime</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList">VpnaasIkePolicyV2LifetimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference">VpnaasIkePolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.authAlgorithmInput">AuthAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.ikeVersionInput">IkeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.lifetimeInput">LifetimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.pfsInput">PfsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.phase1NegotiationModeInput">Phase1NegotiationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.valueSpecsInput">ValueSpecsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.authAlgorithm">AuthAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.ikeVersion">IkeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.pfs">Pfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.phase1NegotiationMode">Phase1NegotiationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.lifetime"></a>

```csharp
public VpnaasIkePolicyV2LifetimeList Lifetime { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList">VpnaasIkePolicyV2LifetimeList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.timeouts"></a>

```csharp
public VpnaasIkePolicyV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference">VpnaasIkePolicyV2TimeoutsOutputReference</a>

---

##### `AuthAlgorithmInput`<sup>Optional</sup> <a name="AuthAlgorithmInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.authAlgorithmInput"></a>

```csharp
public string AuthAlgorithmInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IkeVersionInput`<sup>Optional</sup> <a name="IkeVersionInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.ikeVersionInput"></a>

```csharp
public string IkeVersionInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.lifetimeInput"></a>

```csharp
public object LifetimeInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PfsInput`<sup>Optional</sup> <a name="PfsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.pfsInput"></a>

```csharp
public string PfsInput { get; }
```

- *Type:* string

---

##### `Phase1NegotiationModeInput`<sup>Optional</sup> <a name="Phase1NegotiationModeInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.phase1NegotiationModeInput"></a>

```csharp
public string Phase1NegotiationModeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueSpecsInput`<sup>Optional</sup> <a name="ValueSpecsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.valueSpecsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthAlgorithm`<sup>Required</sup> <a name="AuthAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.authAlgorithm"></a>

```csharp
public string AuthAlgorithm { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.ikeVersion"></a>

```csharp
public string IkeVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pfs`<sup>Required</sup> <a name="Pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.pfs"></a>

```csharp
public string Pfs { get; }
```

- *Type:* string

---

##### `Phase1NegotiationMode`<sup>Required</sup> <a name="Phase1NegotiationMode" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.phase1NegotiationMode"></a>

```csharp
public string Phase1NegotiationMode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValueSpecs`<sup>Required</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasIkePolicyV2Config <a name="VpnaasIkePolicyV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthAlgorithm = null,
    string Description = null,
    string EncryptionAlgorithm = null,
    string Id = null,
    string IkeVersion = null,
    object Lifetime = null,
    string Name = null,
    string Pfs = null,
    string Phase1NegotiationMode = null,
    string Region = null,
    string TenantId = null,
    VpnaasIkePolicyV2Timeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> ValueSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.authAlgorithm">AuthAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#auth_algorithm VpnaasIkePolicyV2#auth_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#description VpnaasIkePolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#encryption_algorithm VpnaasIkePolicyV2#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#id VpnaasIkePolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.ikeVersion">IkeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#ike_version VpnaasIkePolicyV2#ike_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.lifetime">Lifetime</a></code> | <code>object</code> | lifetime block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#name VpnaasIkePolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.pfs">Pfs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#pfs VpnaasIkePolicyV2#pfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.phase1NegotiationMode">Phase1NegotiationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#phase1_negotiation_mode VpnaasIkePolicyV2#phase1_negotiation_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#region VpnaasIkePolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#tenant_id VpnaasIkePolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts">VpnaasIkePolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#value_specs VpnaasIkePolicyV2#value_specs}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthAlgorithm`<sup>Optional</sup> <a name="AuthAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.authAlgorithm"></a>

```csharp
public string AuthAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#auth_algorithm VpnaasIkePolicyV2#auth_algorithm}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#description VpnaasIkePolicyV2#description}.

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#encryption_algorithm VpnaasIkePolicyV2#encryption_algorithm}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#id VpnaasIkePolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeVersion`<sup>Optional</sup> <a name="IkeVersion" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.ikeVersion"></a>

```csharp
public string IkeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#ike_version VpnaasIkePolicyV2#ike_version}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.lifetime"></a>

```csharp
public object Lifetime { get; set; }
```

- *Type:* object

lifetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#lifetime VpnaasIkePolicyV2#lifetime}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#name VpnaasIkePolicyV2#name}.

---

##### `Pfs`<sup>Optional</sup> <a name="Pfs" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.pfs"></a>

```csharp
public string Pfs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#pfs VpnaasIkePolicyV2#pfs}.

---

##### `Phase1NegotiationMode`<sup>Optional</sup> <a name="Phase1NegotiationMode" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.phase1NegotiationMode"></a>

```csharp
public string Phase1NegotiationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#phase1_negotiation_mode VpnaasIkePolicyV2#phase1_negotiation_mode}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#region VpnaasIkePolicyV2#region}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#tenant_id VpnaasIkePolicyV2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.timeouts"></a>

```csharp
public VpnaasIkePolicyV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts">VpnaasIkePolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#timeouts VpnaasIkePolicyV2#timeouts}

---

##### `ValueSpecs`<sup>Optional</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Config.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#value_specs VpnaasIkePolicyV2#value_specs}.

---

### VpnaasIkePolicyV2Lifetime <a name="VpnaasIkePolicyV2Lifetime" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Lifetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Lifetime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2Lifetime {
    string Units = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Lifetime.property.units">Units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#units VpnaasIkePolicyV2#units}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Lifetime.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#value VpnaasIkePolicyV2#value}. |

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Lifetime.property.units"></a>

```csharp
public string Units { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#units VpnaasIkePolicyV2#units}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Lifetime.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#value VpnaasIkePolicyV2#value}.

---

### VpnaasIkePolicyV2Timeouts <a name="VpnaasIkePolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2Timeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#create VpnaasIkePolicyV2#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/vpnaas_ike_policy_v2#create VpnaasIkePolicyV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasIkePolicyV2LifetimeList <a name="VpnaasIkePolicyV2LifetimeList" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2LifetimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.get"></a>

```csharp
private VpnaasIkePolicyV2LifetimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnaasIkePolicyV2LifetimeOutputReference <a name="VpnaasIkePolicyV2LifetimeOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2LifetimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resetUnits"></a>

```csharp
private void ResetUnits()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.unitsInput">UnitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.unitsInput"></a>

```csharp
public string UnitsInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2LifetimeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnaasIkePolicyV2TimeoutsOutputReference <a name="VpnaasIkePolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasIkePolicyV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpnaasIkePolicyV2.VpnaasIkePolicyV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



