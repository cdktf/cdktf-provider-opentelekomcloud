# `fwPolicyV2` Submodule <a name="`fwPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.fwPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FwPolicyV2 <a name="FwPolicyV2" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2 opentelekomcloud_fw_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FwPolicyV2(Construct Scope, string Id, FwPolicyV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config">FwPolicyV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config">FwPolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetAudited">ResetAudited</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetShared">ResetShared</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetValueSpecs">ResetValueSpecs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.putTimeouts"></a>

```csharp
private void PutTimeouts(FwPolicyV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a>

---

##### `ResetAudited` <a name="ResetAudited" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetAudited"></a>

```csharp
private void ResetAudited()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetShared` <a name="ResetShared" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetShared"></a>

```csharp
private void ResetShared()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueSpecs` <a name="ResetValueSpecs" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.resetValueSpecs"></a>

```csharp
private void ResetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FwPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FwPolicyV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FwPolicyV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FwPolicyV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FwPolicyV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FwPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FwPolicyV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FwPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FwPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference">FwPolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.auditedInput">AuditedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.rulesInput">RulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.sharedInput">SharedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.valueSpecsInput">ValueSpecsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.audited">Audited</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.rules">Rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.shared">Shared</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.timeouts"></a>

```csharp
public FwPolicyV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference">FwPolicyV2TimeoutsOutputReference</a>

---

##### `AuditedInput`<sup>Optional</sup> <a name="AuditedInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.auditedInput"></a>

```csharp
public bool|IResolvable AuditedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.rulesInput"></a>

```csharp
public string[] RulesInput { get; }
```

- *Type:* string[]

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.sharedInput"></a>

```csharp
public bool|IResolvable SharedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.timeoutsInput"></a>

```csharp
public IResolvable|FwPolicyV2Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a>

---

##### `ValueSpecsInput`<sup>Optional</sup> <a name="ValueSpecsInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.valueSpecsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Audited`<sup>Required</sup> <a name="Audited" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.audited"></a>

```csharp
public bool|IResolvable Audited { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.rules"></a>

```csharp
public string[] Rules { get; }
```

- *Type:* string[]

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.shared"></a>

```csharp
public bool|IResolvable Shared { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValueSpecs`<sup>Required</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FwPolicyV2Config <a name="FwPolicyV2Config" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FwPolicyV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Audited = null,
    string Description = null,
    string Id = null,
    string Name = null,
    string Region = null,
    string[] Rules = null,
    bool|IResolvable Shared = null,
    string TenantId = null,
    FwPolicyV2Timeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> ValueSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.audited">Audited</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#audited FwPolicyV2#audited}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#description FwPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#id FwPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#name FwPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#region FwPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.rules">Rules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#rules FwPolicyV2#rules}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.shared">Shared</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#shared FwPolicyV2#shared}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#tenant_id FwPolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#value_specs FwPolicyV2#value_specs}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Audited`<sup>Optional</sup> <a name="Audited" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.audited"></a>

```csharp
public bool|IResolvable Audited { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#audited FwPolicyV2#audited}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#description FwPolicyV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#id FwPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#name FwPolicyV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#region FwPolicyV2#region}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.rules"></a>

```csharp
public string[] Rules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#rules FwPolicyV2#rules}.

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.shared"></a>

```csharp
public bool|IResolvable Shared { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#shared FwPolicyV2#shared}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#tenant_id FwPolicyV2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.timeouts"></a>

```csharp
public FwPolicyV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#timeouts FwPolicyV2#timeouts}

---

##### `ValueSpecs`<sup>Optional</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Config.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#value_specs FwPolicyV2#value_specs}.

---

### FwPolicyV2Timeouts <a name="FwPolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FwPolicyV2Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#create FwPolicyV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#delete FwPolicyV2#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#create FwPolicyV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fw_policy_v2#delete FwPolicyV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### FwPolicyV2TimeoutsOutputReference <a name="FwPolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FwPolicyV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FwPolicyV2Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fwPolicyV2.FwPolicyV2Timeouts">FwPolicyV2Timeouts</a>

---



