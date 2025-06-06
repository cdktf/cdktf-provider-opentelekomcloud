# `asLifecycleHookV1` Submodule <a name="`asLifecycleHookV1` Submodule" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsLifecycleHookV1 <a name="AsLifecycleHookV1" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1 opentelekomcloud_as_lifecycle_hook_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsLifecycleHookV1(Construct Scope, string Id, AsLifecycleHookV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config">AsLifecycleHookV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config">AsLifecycleHookV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult">ResetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout">ResetDefaultTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata">ResetNotificationMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultResult` <a name="ResetDefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult"></a>

```csharp
private void ResetDefaultResult()
```

##### `ResetDefaultTimeout` <a name="ResetDefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout"></a>

```csharp
private void ResetDefaultTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationMetadata` <a name="ResetNotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata"></a>

```csharp
private void ResetNotificationMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsLifecycleHookV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsLifecycleHookV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsLifecycleHookV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsLifecycleHookV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsLifecycleHookV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsLifecycleHookV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AsLifecycleHookV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName">NotificationTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput">DefaultResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput">DefaultTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput">NotificationMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput">NotificationTopicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput">ScalingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput">ScalingLifecycleHookNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput">ScalingLifecycleHookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult">DefaultResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout">DefaultTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata">NotificationMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn">NotificationTopicUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId">ScalingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName">ScalingLifecycleHookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType">ScalingLifecycleHookType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `NotificationTopicName`<sup>Required</sup> <a name="NotificationTopicName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName"></a>

```csharp
public string NotificationTopicName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `DefaultResultInput`<sup>Optional</sup> <a name="DefaultResultInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput"></a>

```csharp
public string DefaultResultInput { get; }
```

- *Type:* string

---

##### `DefaultTimeoutInput`<sup>Optional</sup> <a name="DefaultTimeoutInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput"></a>

```csharp
public double DefaultTimeoutInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationMetadataInput`<sup>Optional</sup> <a name="NotificationMetadataInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput"></a>

```csharp
public string NotificationMetadataInput { get; }
```

- *Type:* string

---

##### `NotificationTopicUrnInput`<sup>Optional</sup> <a name="NotificationTopicUrnInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput"></a>

```csharp
public string NotificationTopicUrnInput { get; }
```

- *Type:* string

---

##### `ScalingGroupIdInput`<sup>Optional</sup> <a name="ScalingGroupIdInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput"></a>

```csharp
public string ScalingGroupIdInput { get; }
```

- *Type:* string

---

##### `ScalingLifecycleHookNameInput`<sup>Optional</sup> <a name="ScalingLifecycleHookNameInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput"></a>

```csharp
public string ScalingLifecycleHookNameInput { get; }
```

- *Type:* string

---

##### `ScalingLifecycleHookTypeInput`<sup>Optional</sup> <a name="ScalingLifecycleHookTypeInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput"></a>

```csharp
public string ScalingLifecycleHookTypeInput { get; }
```

- *Type:* string

---

##### `DefaultResult`<sup>Required</sup> <a name="DefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult"></a>

```csharp
public string DefaultResult { get; }
```

- *Type:* string

---

##### `DefaultTimeout`<sup>Required</sup> <a name="DefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout"></a>

```csharp
public double DefaultTimeout { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationMetadata`<sup>Required</sup> <a name="NotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata"></a>

```csharp
public string NotificationMetadata { get; }
```

- *Type:* string

---

##### `NotificationTopicUrn`<sup>Required</sup> <a name="NotificationTopicUrn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn"></a>

```csharp
public string NotificationTopicUrn { get; }
```

- *Type:* string

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId"></a>

```csharp
public string ScalingGroupId { get; }
```

- *Type:* string

---

##### `ScalingLifecycleHookName`<sup>Required</sup> <a name="ScalingLifecycleHookName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName"></a>

```csharp
public string ScalingLifecycleHookName { get; }
```

- *Type:* string

---

##### `ScalingLifecycleHookType`<sup>Required</sup> <a name="ScalingLifecycleHookType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType"></a>

```csharp
public string ScalingLifecycleHookType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsLifecycleHookV1Config <a name="AsLifecycleHookV1Config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsLifecycleHookV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NotificationTopicUrn,
    string ScalingGroupId,
    string ScalingLifecycleHookName,
    string ScalingLifecycleHookType,
    string DefaultResult = null,
    double DefaultTimeout = null,
    string Id = null,
    string NotificationMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn">NotificationTopicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId">ScalingGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName">ScalingLifecycleHookName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType">ScalingLifecycleHookType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult">DefaultResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout">DefaultTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata">NotificationMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NotificationTopicUrn`<sup>Required</sup> <a name="NotificationTopicUrn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn"></a>

```csharp
public string NotificationTopicUrn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}.

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId"></a>

```csharp
public string ScalingGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}.

---

##### `ScalingLifecycleHookName`<sup>Required</sup> <a name="ScalingLifecycleHookName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName"></a>

```csharp
public string ScalingLifecycleHookName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}.

---

##### `ScalingLifecycleHookType`<sup>Required</sup> <a name="ScalingLifecycleHookType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType"></a>

```csharp
public string ScalingLifecycleHookType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}.

---

##### `DefaultResult`<sup>Optional</sup> <a name="DefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult"></a>

```csharp
public string DefaultResult { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}.

---

##### `DefaultTimeout`<sup>Optional</sup> <a name="DefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout"></a>

```csharp
public double DefaultTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationMetadata`<sup>Optional</sup> <a name="NotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata"></a>

```csharp
public string NotificationMetadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}.

---



