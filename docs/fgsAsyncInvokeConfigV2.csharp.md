# `fgsAsyncInvokeConfigV2` Submodule <a name="`fgsAsyncInvokeConfigV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsAsyncInvokeConfigV2 <a name="FgsAsyncInvokeConfigV2" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2 opentelekomcloud_fgs_async_invoke_config_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsAsyncInvokeConfigV2(Construct Scope, string Id, FgsAsyncInvokeConfigV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config">FgsAsyncInvokeConfigV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config">FgsAsyncInvokeConfigV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess">PutOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess">ResetOnSuccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure"></a>

```csharp
private void PutOnFailure(FgsAsyncInvokeConfigV2OnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `PutOnSuccess` <a name="PutOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess"></a>

```csharp
private void PutOnSuccess(FgsAsyncInvokeConfigV2OnSuccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetOnSuccess` <a name="ResetOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess"></a>

```csharp
private void ResetOnSuccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsAsyncInvokeConfigV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsAsyncInvokeConfigV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsAsyncInvokeConfigV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsAsyncInvokeConfigV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FgsAsyncInvokeConfigV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FgsAsyncInvokeConfigV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FgsAsyncInvokeConfigV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput">FunctionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput">MaxAsyncEventAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput">MaxAsyncRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput">OnFailureInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput">OnSuccessInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn">FunctionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds">MaxAsyncEventAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts">MaxAsyncRetryAttempts</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure"></a>

```csharp
public FgsAsyncInvokeConfigV2OnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a>

---

##### `OnSuccess`<sup>Required</sup> <a name="OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess"></a>

```csharp
public FgsAsyncInvokeConfigV2OnSuccessOutputReference OnSuccess { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput"></a>

```csharp
public string FunctionUrnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxAsyncEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAsyncEventAgeInSecondsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput"></a>

```csharp
public double MaxAsyncEventAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxAsyncRetryAttemptsInput`<sup>Optional</sup> <a name="MaxAsyncRetryAttemptsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput"></a>

```csharp
public double MaxAsyncRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput"></a>

```csharp
public FgsAsyncInvokeConfigV2OnFailure OnFailureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `OnSuccessInput`<sup>Optional</sup> <a name="OnSuccessInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput"></a>

```csharp
public FgsAsyncInvokeConfigV2OnSuccess OnSuccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn"></a>

```csharp
public string FunctionUrn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="MaxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds"></a>

```csharp
public double MaxAsyncEventAgeInSeconds { get; }
```

- *Type:* double

---

##### `MaxAsyncRetryAttempts`<sup>Required</sup> <a name="MaxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts"></a>

```csharp
public double MaxAsyncRetryAttempts { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FgsAsyncInvokeConfigV2Config <a name="FgsAsyncInvokeConfigV2Config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsAsyncInvokeConfigV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FunctionUrn,
    double MaxAsyncEventAgeInSeconds,
    double MaxAsyncRetryAttempts,
    string Id = null,
    FgsAsyncInvokeConfigV2OnFailure OnFailure = null,
    FgsAsyncInvokeConfigV2OnSuccess OnSuccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn">FunctionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds">MaxAsyncEventAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts">MaxAsyncRetryAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | on_success block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn"></a>

```csharp
public string FunctionUrn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}.

---

##### `MaxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="MaxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds"></a>

```csharp
public double MaxAsyncEventAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}.

---

##### `MaxAsyncRetryAttempts`<sup>Required</sup> <a name="MaxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts"></a>

```csharp
public double MaxAsyncRetryAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure"></a>

```csharp
public FgsAsyncInvokeConfigV2OnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#on_failure FgsAsyncInvokeConfigV2#on_failure}

---

##### `OnSuccess`<sup>Optional</sup> <a name="OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess"></a>

```csharp
public FgsAsyncInvokeConfigV2OnSuccess OnSuccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#on_success FgsAsyncInvokeConfigV2#on_success}

---

### FgsAsyncInvokeConfigV2OnFailure <a name="FgsAsyncInvokeConfigV2OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsAsyncInvokeConfigV2OnFailure {
    string Destination,
    string Param
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param">Param</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param"></a>

```csharp
public string Param { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

### FgsAsyncInvokeConfigV2OnSuccess <a name="FgsAsyncInvokeConfigV2OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsAsyncInvokeConfigV2OnSuccess {
    string Destination,
    string Param
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param">Param</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param"></a>

```csharp
public string Param { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsAsyncInvokeConfigV2OnFailureOutputReference <a name="FgsAsyncInvokeConfigV2OnFailureOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsAsyncInvokeConfigV2OnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput">ParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param">Param</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `ParamInput`<sup>Optional</sup> <a name="ParamInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput"></a>

```csharp
public string ParamInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param"></a>

```csharp
public string Param { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue"></a>

```csharp
public FgsAsyncInvokeConfigV2OnFailure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---


### FgsAsyncInvokeConfigV2OnSuccessOutputReference <a name="FgsAsyncInvokeConfigV2OnSuccessOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsAsyncInvokeConfigV2OnSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput">ParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param">Param</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `ParamInput`<sup>Optional</sup> <a name="ParamInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput"></a>

```csharp
public string ParamInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param"></a>

```csharp
public string Param { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue"></a>

```csharp
public FgsAsyncInvokeConfigV2OnSuccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---



