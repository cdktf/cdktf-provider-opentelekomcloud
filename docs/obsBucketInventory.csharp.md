# `obsBucketInventory` Submodule <a name="`obsBucketInventory` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketInventory <a name="ObsBucketInventory" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory opentelekomcloud_obs_bucket_inventory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketInventory(Construct Scope, string Id, ObsBucketInventoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig">ObsBucketInventoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig">ObsBucketInventoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetFilterPrefix">ResetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetOptionalFields">ResetOptionalFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.putDestination"></a>

```csharp
private void PutDestination(ObsBucketInventoryDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a>

---

##### `ResetFilterPrefix` <a name="ResetFilterPrefix" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetFilterPrefix"></a>

```csharp
private void ResetFilterPrefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptionalFields` <a name="ResetOptionalFields" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.resetOptionalFields"></a>

```csharp
private void ResetOptionalFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketInventory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketInventory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketInventory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketInventory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketInventory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObsBucketInventory resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucketInventory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucketInventory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketInventory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference">ObsBucketInventoryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.filterPrefixInput">FilterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.includedObjectVersionsInput">IncludedObjectVersionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.optionalFieldsInput">OptionalFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.optionalFields">OptionalFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.destination"></a>

```csharp
public ObsBucketInventoryDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference">ObsBucketInventoryDestinationOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.destinationInput"></a>

```csharp
public ObsBucketInventoryDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a>

---

##### `FilterPrefixInput`<sup>Optional</sup> <a name="FilterPrefixInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.filterPrefixInput"></a>

```csharp
public string FilterPrefixInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludedObjectVersionsInput`<sup>Optional</sup> <a name="IncludedObjectVersionsInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.includedObjectVersionsInput"></a>

```csharp
public string IncludedObjectVersionsInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `OptionalFieldsInput`<sup>Optional</sup> <a name="OptionalFieldsInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.optionalFieldsInput"></a>

```csharp
public string[] OptionalFieldsInput { get; }
```

- *Type:* string[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `FilterPrefix`<sup>Required</sup> <a name="FilterPrefix" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludedObjectVersions`<sup>Required</sup> <a name="IncludedObjectVersions" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.includedObjectVersions"></a>

```csharp
public string IncludedObjectVersions { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.optionalFields"></a>

```csharp
public string[] OptionalFields { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketInventoryConfig <a name="ObsBucketInventoryConfig" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketInventoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string ConfigurationId,
    ObsBucketInventoryDestination Destination,
    string Frequency,
    string IncludedObjectVersions,
    object IsEnabled,
    string FilterPrefix = null,
    string Id = null,
    string[] OptionalFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#bucket ObsBucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#configuration_id ObsBucketInventory#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#frequency ObsBucketInventory#frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#included_object_versions ObsBucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#is_enabled ObsBucketInventory#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#filter_prefix ObsBucketInventory#filter_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#id ObsBucketInventory#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.optionalFields">OptionalFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#optional_fields ObsBucketInventory#optional_fields}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#bucket ObsBucketInventory#bucket}.

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#configuration_id ObsBucketInventory#configuration_id}.

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.destination"></a>

```csharp
public ObsBucketInventoryDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#destination ObsBucketInventory#destination}

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#frequency ObsBucketInventory#frequency}.

---

##### `IncludedObjectVersions`<sup>Required</sup> <a name="IncludedObjectVersions" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.includedObjectVersions"></a>

```csharp
public string IncludedObjectVersions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#included_object_versions ObsBucketInventory#included_object_versions}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#is_enabled ObsBucketInventory#is_enabled}.

---

##### `FilterPrefix`<sup>Optional</sup> <a name="FilterPrefix" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#filter_prefix ObsBucketInventory#filter_prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#id ObsBucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OptionalFields`<sup>Optional</sup> <a name="OptionalFields" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryConfig.property.optionalFields"></a>

```csharp
public string[] OptionalFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#optional_fields ObsBucketInventory#optional_fields}.

---

### ObsBucketInventoryDestination <a name="ObsBucketInventoryDestination" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketInventoryDestination {
    string Bucket,
    string Format,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#bucket ObsBucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#format ObsBucketInventory#format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#prefix ObsBucketInventory#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#bucket ObsBucketInventory#bucket}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#format ObsBucketInventory#format}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_inventory#prefix ObsBucketInventory#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketInventoryDestinationOutputReference <a name="ObsBucketInventoryDestinationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketInventoryDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestinationOutputReference.property.internalValue"></a>

```csharp
public ObsBucketInventoryDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketInventory.ObsBucketInventoryDestination">ObsBucketInventoryDestination</a>

---



