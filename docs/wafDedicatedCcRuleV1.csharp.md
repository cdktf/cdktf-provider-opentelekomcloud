# `wafDedicatedCcRuleV1` Submodule <a name="`wafDedicatedCcRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedCcRuleV1 <a name="WafDedicatedCcRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1 opentelekomcloud_waf_dedicated_cc_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1(Construct Scope, string Id, WafDedicatedCcRuleV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config">WafDedicatedCcRuleV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config">WafDedicatedCcRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetLockTime">ResetLockTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagCategory">ResetTagCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagContents">ResetTagContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagIndex">ResetTagIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetUnlockNum">ResetUnlockNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction"></a>

```csharp
private void PutAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction.parameter.value"></a>

- *Type:* object

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafDedicatedCcRuleV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLockTime` <a name="ResetLockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetLockTime"></a>

```csharp
private void ResetLockTime()
```

##### `ResetTagCategory` <a name="ResetTagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagCategory"></a>

```csharp
private void ResetTagCategory()
```

##### `ResetTagContents` <a name="ResetTagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagContents"></a>

```csharp
private void ResetTagContents()
```

##### `ResetTagIndex` <a name="ResetTagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagIndex"></a>

```csharp
private void ResetTagIndex()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnlockNum` <a name="ResetUnlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetUnlockNum"></a>

```csharp
private void ResetUnlockNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedCcRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedCcRuleV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedCcRuleV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedCcRuleV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedCcRuleV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafDedicatedCcRuleV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDedicatedCcRuleV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDedicatedCcRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedCcRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.action">Action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList">WafDedicatedCcRuleV1ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList">WafDedicatedCcRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference">WafDedicatedCcRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.actionInput">ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNumInput">LimitNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriodInput">LimitPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTimeInput">LockTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.modeInput">ModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategoryInput">TagCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContentsInput">TagContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndexInput">TagIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagTypeInput">TagTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNumInput">UnlockNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNum">LimitNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriod">LimitPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTime">LockTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.mode">Mode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategory">TagCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContents">TagContents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndex">TagIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagType">TagType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNum">UnlockNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.action"></a>

```csharp
public WafDedicatedCcRuleV1ActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList">WafDedicatedCcRuleV1ActionList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditions"></a>

```csharp
public WafDedicatedCcRuleV1ConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList">WafDedicatedCcRuleV1ConditionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeouts"></a>

```csharp
public WafDedicatedCcRuleV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference">WafDedicatedCcRuleV1TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.actionInput"></a>

```csharp
public object ActionInput { get; }
```

- *Type:* object

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitNumInput`<sup>Optional</sup> <a name="LimitNumInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNumInput"></a>

```csharp
public double LimitNumInput { get; }
```

- *Type:* double

---

##### `LimitPeriodInput`<sup>Optional</sup> <a name="LimitPeriodInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriodInput"></a>

```csharp
public double LimitPeriodInput { get; }
```

- *Type:* double

---

##### `LockTimeInput`<sup>Optional</sup> <a name="LockTimeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTimeInput"></a>

```csharp
public double LockTimeInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.modeInput"></a>

```csharp
public double ModeInput { get; }
```

- *Type:* double

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `TagCategoryInput`<sup>Optional</sup> <a name="TagCategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategoryInput"></a>

```csharp
public string TagCategoryInput { get; }
```

- *Type:* string

---

##### `TagContentsInput`<sup>Optional</sup> <a name="TagContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContentsInput"></a>

```csharp
public string[] TagContentsInput { get; }
```

- *Type:* string[]

---

##### `TagIndexInput`<sup>Optional</sup> <a name="TagIndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndexInput"></a>

```csharp
public string TagIndexInput { get; }
```

- *Type:* string

---

##### `TagTypeInput`<sup>Optional</sup> <a name="TagTypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagTypeInput"></a>

```csharp
public string TagTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnlockNumInput`<sup>Optional</sup> <a name="UnlockNumInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNumInput"></a>

```csharp
public double UnlockNumInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LimitNum`<sup>Required</sup> <a name="LimitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNum"></a>

```csharp
public double LimitNum { get; }
```

- *Type:* double

---

##### `LimitPeriod`<sup>Required</sup> <a name="LimitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriod"></a>

```csharp
public double LimitPeriod { get; }
```

- *Type:* double

---

##### `LockTime`<sup>Required</sup> <a name="LockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTime"></a>

```csharp
public double LockTime { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.mode"></a>

```csharp
public double Mode { get; }
```

- *Type:* double

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `TagCategory`<sup>Required</sup> <a name="TagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategory"></a>

```csharp
public string TagCategory { get; }
```

- *Type:* string

---

##### `TagContents`<sup>Required</sup> <a name="TagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContents"></a>

```csharp
public string[] TagContents { get; }
```

- *Type:* string[]

---

##### `TagIndex`<sup>Required</sup> <a name="TagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndex"></a>

```csharp
public string TagIndex { get; }
```

- *Type:* string

---

##### `TagType`<sup>Required</sup> <a name="TagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagType"></a>

```csharp
public string TagType { get; }
```

- *Type:* string

---

##### `UnlockNum`<sup>Required</sup> <a name="UnlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNum"></a>

```csharp
public double UnlockNum { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedCcRuleV1Action <a name="WafDedicatedCcRuleV1Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1Action {
    string Category,
    string Content = null,
    string ContentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#content WafDedicatedCcRuleV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#content_type WafDedicatedCcRuleV1#content_type}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#content WafDedicatedCcRuleV1#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#content_type WafDedicatedCcRuleV1#content_type}.

---

### WafDedicatedCcRuleV1Conditions <a name="WafDedicatedCcRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1Conditions {
    string Category,
    string LogicOperation,
    string[] Contents = null,
    string Index = null,
    string ValueListId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.logicOperation">LogicOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#logic_operation WafDedicatedCcRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.contents">Contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#contents WafDedicatedCcRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.index">Index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#index WafDedicatedCcRuleV1#index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.valueListId">ValueListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#value_list_id WafDedicatedCcRuleV1#value_list_id}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}.

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.logicOperation"></a>

```csharp
public string LogicOperation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#logic_operation WafDedicatedCcRuleV1#logic_operation}.

---

##### `Contents`<sup>Optional</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.contents"></a>

```csharp
public string[] Contents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#contents WafDedicatedCcRuleV1#contents}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#index WafDedicatedCcRuleV1#index}.

---

##### `ValueListId`<sup>Optional</sup> <a name="ValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.valueListId"></a>

```csharp
public string ValueListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#value_list_id WafDedicatedCcRuleV1#value_list_id}.

---

### WafDedicatedCcRuleV1Config <a name="WafDedicatedCcRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Action,
    double LimitNum,
    double LimitPeriod,
    double Mode,
    string PolicyId,
    string TagType,
    string Url,
    object Conditions = null,
    string Description = null,
    string Id = null,
    double LockTime = null,
    string TagCategory = null,
    string[] TagContents = null,
    string TagIndex = null,
    WafDedicatedCcRuleV1Timeouts Timeouts = null,
    double UnlockNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.action">Action</a></code> | <code>object</code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitNum">LimitNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitPeriod">LimitPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.mode">Mode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagType">TagType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lockTime">LockTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagCategory">TagCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagContents">TagContents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagIndex">TagIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.unlockNum">UnlockNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.action"></a>

```csharp
public object Action { get; set; }
```

- *Type:* object

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#action WafDedicatedCcRuleV1#action}

---

##### `LimitNum`<sup>Required</sup> <a name="LimitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitNum"></a>

```csharp
public double LimitNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}.

---

##### `LimitPeriod`<sup>Required</sup> <a name="LimitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitPeriod"></a>

```csharp
public double LimitPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}.

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.mode"></a>

```csharp
public double Mode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}.

---

##### `TagType`<sup>Required</sup> <a name="TagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagType"></a>

```csharp
public string TagType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#conditions WafDedicatedCcRuleV1#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockTime`<sup>Optional</sup> <a name="LockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lockTime"></a>

```csharp
public double LockTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}.

---

##### `TagCategory`<sup>Optional</sup> <a name="TagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagCategory"></a>

```csharp
public string TagCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}.

---

##### `TagContents`<sup>Optional</sup> <a name="TagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagContents"></a>

```csharp
public string[] TagContents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}.

---

##### `TagIndex`<sup>Optional</sup> <a name="TagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagIndex"></a>

```csharp
public string TagIndex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.timeouts"></a>

```csharp
public WafDedicatedCcRuleV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#timeouts WafDedicatedCcRuleV1#timeouts}

---

##### `UnlockNum`<sup>Optional</sup> <a name="UnlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.unlockNum"></a>

```csharp
public double UnlockNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}.

---

### WafDedicatedCcRuleV1Timeouts <a name="WafDedicatedCcRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#create WafDedicatedCcRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#delete WafDedicatedCcRuleV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#create WafDedicatedCcRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/waf_dedicated_cc_rule_v1#delete WafDedicatedCcRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedCcRuleV1ActionList <a name="WafDedicatedCcRuleV1ActionList" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1ActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get"></a>

```csharp
private WafDedicatedCcRuleV1ActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedCcRuleV1ActionOutputReference <a name="WafDedicatedCcRuleV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1ActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedCcRuleV1ConditionsList <a name="WafDedicatedCcRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1ConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get"></a>

```csharp
private WafDedicatedCcRuleV1ConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedCcRuleV1ConditionsOutputReference <a name="WafDedicatedCcRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1ConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetContents">ResetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetValueListId">ResetValueListId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContents` <a name="ResetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetContents"></a>

```csharp
private void ResetContents()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetIndex"></a>

```csharp
private void ResetIndex()
```

##### `ResetValueListId` <a name="ResetValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetValueListId"></a>

```csharp
private void ResetValueListId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperationInput">LogicOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListIdInput">ValueListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contents">Contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperation">LogicOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListId">ValueListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contentsInput"></a>

```csharp
public string[] ContentsInput { get; }
```

- *Type:* string[]

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `LogicOperationInput`<sup>Optional</sup> <a name="LogicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```csharp
public string LogicOperationInput { get; }
```

- *Type:* string

---

##### `ValueListIdInput`<sup>Optional</sup> <a name="ValueListIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListIdInput"></a>

```csharp
public string ValueListIdInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contents"></a>

```csharp
public string[] Contents { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperation"></a>

```csharp
public string LogicOperation { get; }
```

- *Type:* string

---

##### `ValueListId`<sup>Required</sup> <a name="ValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListId"></a>

```csharp
public string ValueListId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedCcRuleV1TimeoutsOutputReference <a name="WafDedicatedCcRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedCcRuleV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



