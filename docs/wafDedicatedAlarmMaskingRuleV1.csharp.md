# `wafDedicatedAlarmMaskingRuleV1` Submodule <a name="`wafDedicatedAlarmMaskingRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedAlarmMaskingRuleV1 <a name="WafDedicatedAlarmMaskingRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1 opentelekomcloud_waf_dedicated_alarm_masking_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1(Construct Scope, string Id, WafDedicatedAlarmMaskingRuleV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config">WafDedicatedAlarmMaskingRuleV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config">WafDedicatedAlarmMaskingRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings">PutAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetAdvancedSettings">ResetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedSettings` <a name="PutAdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings"></a>

```csharp
private void PutAdvancedSettings(WafDedicatedAlarmMaskingRuleV1AdvancedSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafDedicatedAlarmMaskingRuleV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

---

##### `ResetAdvancedSettings` <a name="ResetAdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetAdvancedSettings"></a>

```csharp
private void ResetAdvancedSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedAlarmMaskingRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedAlarmMaskingRuleV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedAlarmMaskingRuleV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedAlarmMaskingRuleV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedAlarmMaskingRuleV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafDedicatedAlarmMaskingRuleV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDedicatedAlarmMaskingRuleV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDedicatedAlarmMaskingRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedAlarmMaskingRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettings">AdvancedSettings</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference">WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList">WafDedicatedAlarmMaskingRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference">WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettingsInput">AdvancedSettingsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.rule">Rule</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedSettings`<sup>Required</sup> <a name="AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettings"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference AdvancedSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference">WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditions"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1ConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList">WafDedicatedAlarmMaskingRuleV1ConditionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeouts"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference">WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference</a>

---

##### `AdvancedSettingsInput`<sup>Optional</sup> <a name="AdvancedSettingsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettingsInput"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1AdvancedSettings AdvancedSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedAlarmMaskingRuleV1AdvancedSettings <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1AdvancedSettings {
    string[] Contents = null,
    string Index = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.contents">Contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.index">Index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}. |

---

##### `Contents`<sup>Optional</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.contents"></a>

```csharp
public string[] Contents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}.

---

### WafDedicatedAlarmMaskingRuleV1Conditions <a name="WafDedicatedAlarmMaskingRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1Conditions {
    string Category,
    string LogicOperation,
    string[] Contents = null,
    string Index = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#category WafDedicatedAlarmMaskingRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.logicOperation">LogicOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#logic_operation WafDedicatedAlarmMaskingRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.contents">Contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.index">Index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#category WafDedicatedAlarmMaskingRuleV1#category}.

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.logicOperation"></a>

```csharp
public string LogicOperation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#logic_operation WafDedicatedAlarmMaskingRuleV1#logic_operation}.

---

##### `Contents`<sup>Optional</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.contents"></a>

```csharp
public string[] Contents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}.

---

### WafDedicatedAlarmMaskingRuleV1Config <a name="WafDedicatedAlarmMaskingRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Conditions,
    string[] Domains,
    string PolicyId,
    string Rule,
    WafDedicatedAlarmMaskingRuleV1AdvancedSettings AdvancedSettings = null,
    string Description = null,
    string Id = null,
    WafDedicatedAlarmMaskingRuleV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.domains">Domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.rule">Rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.advancedSettings">AdvancedSettings</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#conditions WafDedicatedAlarmMaskingRuleV1#conditions}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}.

---

##### `AdvancedSettings`<sup>Optional</sup> <a name="AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.advancedSettings"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1AdvancedSettings AdvancedSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#advanced_settings WafDedicatedAlarmMaskingRuleV1#advanced_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.timeouts"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#timeouts WafDedicatedAlarmMaskingRuleV1#timeouts}

---

### WafDedicatedAlarmMaskingRuleV1Timeouts <a name="WafDedicatedAlarmMaskingRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#create WafDedicatedAlarmMaskingRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#delete WafDedicatedAlarmMaskingRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#update WafDedicatedAlarmMaskingRuleV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#create WafDedicatedAlarmMaskingRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#delete WafDedicatedAlarmMaskingRuleV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/waf_dedicated_alarm_masking_rule_v1#update WafDedicatedAlarmMaskingRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetContents">ResetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContents` <a name="ResetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetContents"></a>

```csharp
private void ResetContents()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetIndex"></a>

```csharp
private void ResetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contents">Contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contentsInput"></a>

```csharp
public string[] ContentsInput { get; }
```

- *Type:* string[]

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contents"></a>

```csharp
public string[] Contents { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.internalValue"></a>

```csharp
public WafDedicatedAlarmMaskingRuleV1AdvancedSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---


### WafDedicatedAlarmMaskingRuleV1ConditionsList <a name="WafDedicatedAlarmMaskingRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1ConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get"></a>

```csharp
private WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetContents">ResetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContents` <a name="ResetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetContents"></a>

```csharp
private void ResetContents()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetIndex"></a>

```csharp
private void ResetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperationInput">LogicOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contents">Contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperation">LogicOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contentsInput"></a>

```csharp
public string[] ContentsInput { get; }
```

- *Type:* string[]

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `LogicOperationInput`<sup>Optional</sup> <a name="LogicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```csharp
public string LogicOperationInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contents"></a>

```csharp
public string[] Contents { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperation"></a>

```csharp
public string LogicOperation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



