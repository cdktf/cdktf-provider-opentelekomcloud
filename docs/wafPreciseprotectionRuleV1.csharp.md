# `wafPreciseprotectionRuleV1` Submodule <a name="`wafPreciseprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPreciseprotectionRuleV1 <a name="WafPreciseprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1 opentelekomcloud_waf_preciseprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1(Construct Scope, string Id, WafPreciseprotectionRuleV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config">WafPreciseprotectionRuleV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config">WafPreciseprotectionRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime">ResetTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafPreciseprotectionRuleV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart"></a>

```csharp
private void ResetStart()
```

##### `ResetTime` <a name="ResetTime" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime"></a>

```csharp
private void ResetTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafPreciseprotectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPreciseprotectionRuleV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPreciseprotectionRuleV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPreciseprotectionRuleV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPreciseprotectionRuleV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafPreciseprotectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafPreciseprotectionRuleV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafPreciseprotectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafPreciseprotectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput">ActionCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput">TimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory">ActionCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time">Time</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions"></a>

```csharp
public WafPreciseprotectionRuleV1ConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts"></a>

```csharp
public WafPreciseprotectionRuleV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a>

---

##### `ActionCategoryInput`<sup>Optional</sup> <a name="ActionCategoryInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput"></a>

```csharp
public string ActionCategoryInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput"></a>

```csharp
public object TimeInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActionCategory`<sup>Required</sup> <a name="ActionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory"></a>

```csharp
public string ActionCategory { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time"></a>

```csharp
public object Time { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafPreciseprotectionRuleV1Conditions <a name="WafPreciseprotectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1Conditions {
    string Category,
    string[] Contents,
    string Logic,
    string Index = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents">Contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic">Logic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index">Index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}.

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents"></a>

```csharp
public string[] Contents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}.

---

##### `Logic`<sup>Required</sup> <a name="Logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic"></a>

```csharp
public string Logic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}.

---

### WafPreciseprotectionRuleV1Config <a name="WafPreciseprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ActionCategory,
    object Conditions,
    string Name,
    string PolicyId,
    string End = null,
    string Id = null,
    double Priority = null,
    string Start = null,
    object Time = null,
    WafPreciseprotectionRuleV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory">ActionCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time">Time</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionCategory`<sup>Required</sup> <a name="ActionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory"></a>

```csharp
public string ActionCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}.

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#conditions WafPreciseprotectionRuleV1#conditions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}.

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}.

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}.

---

##### `Time`<sup>Optional</sup> <a name="Time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time"></a>

```csharp
public object Time { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts"></a>

```csharp
public WafPreciseprotectionRuleV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#timeouts WafPreciseprotectionRuleV1#timeouts}

---

### WafPreciseprotectionRuleV1Timeouts <a name="WafPreciseprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPreciseprotectionRuleV1ConditionsList <a name="WafPreciseprotectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1ConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get"></a>

```csharp
private WafPreciseprotectionRuleV1ConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafPreciseprotectionRuleV1ConditionsOutputReference <a name="WafPreciseprotectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1ConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex"></a>

```csharp
private void ResetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput">LogicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents">Contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic">Logic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```csharp
public string[] ContentsInput { get; }
```

- *Type:* string[]

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `LogicInput`<sup>Optional</sup> <a name="LogicInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput"></a>

```csharp
public string LogicInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents"></a>

```csharp
public string[] Contents { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Logic`<sup>Required</sup> <a name="Logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic"></a>

```csharp
public string Logic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafPreciseprotectionRuleV1TimeoutsOutputReference <a name="WafPreciseprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPreciseprotectionRuleV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



