# `wafDedicatedDataMaskingRuleV1` Submodule <a name="`wafDedicatedDataMaskingRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedDataMaskingRuleV1 <a name="WafDedicatedDataMaskingRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1 opentelekomcloud_waf_dedicated_data_masking_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedDataMaskingRuleV1(Construct Scope, string Id, WafDedicatedDataMaskingRuleV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config">WafDedicatedDataMaskingRuleV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config">WafDedicatedDataMaskingRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafDedicatedDataMaskingRuleV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts">WafDedicatedDataMaskingRuleV1Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedDataMaskingRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedDataMaskingRuleV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedDataMaskingRuleV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedDataMaskingRuleV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDedicatedDataMaskingRuleV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafDedicatedDataMaskingRuleV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDedicatedDataMaskingRuleV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDedicatedDataMaskingRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedDataMaskingRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference">WafDedicatedDataMaskingRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.timeouts"></a>

```csharp
public WafDedicatedDataMaskingRuleV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference">WafDedicatedDataMaskingRuleV1TimeoutsOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedDataMaskingRuleV1Config <a name="WafDedicatedDataMaskingRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedDataMaskingRuleV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Category,
    string Name,
    string PolicyId,
    string Url,
    string Description = null,
    string Id = null,
    WafDedicatedDataMaskingRuleV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#category WafDedicatedDataMaskingRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#name WafDedicatedDataMaskingRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#policy_id WafDedicatedDataMaskingRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#url WafDedicatedDataMaskingRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#description WafDedicatedDataMaskingRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#id WafDedicatedDataMaskingRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts">WafDedicatedDataMaskingRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#category WafDedicatedDataMaskingRuleV1#category}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#name WafDedicatedDataMaskingRuleV1#name}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#policy_id WafDedicatedDataMaskingRuleV1#policy_id}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#url WafDedicatedDataMaskingRuleV1#url}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#description WafDedicatedDataMaskingRuleV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#id WafDedicatedDataMaskingRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Config.property.timeouts"></a>

```csharp
public WafDedicatedDataMaskingRuleV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts">WafDedicatedDataMaskingRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#timeouts WafDedicatedDataMaskingRuleV1#timeouts}

---

### WafDedicatedDataMaskingRuleV1Timeouts <a name="WafDedicatedDataMaskingRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedDataMaskingRuleV1Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#create WafDedicatedDataMaskingRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#delete WafDedicatedDataMaskingRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#update WafDedicatedDataMaskingRuleV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#create WafDedicatedDataMaskingRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#delete WafDedicatedDataMaskingRuleV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_data_masking_rule_v1#update WafDedicatedDataMaskingRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedDataMaskingRuleV1TimeoutsOutputReference <a name="WafDedicatedDataMaskingRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDedicatedDataMaskingRuleV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDataMaskingRuleV1.WafDedicatedDataMaskingRuleV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



