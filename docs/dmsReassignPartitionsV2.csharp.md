# `dmsReassignPartitionsV2` Submodule <a name="`dmsReassignPartitionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReassignPartitionsV2 <a name="DmsReassignPartitionsV2" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2 opentelekomcloud_dms_reassign_partitions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2(Construct Scope, string Id, DmsReassignPartitionsV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config">DmsReassignPartitionsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config">DmsReassignPartitionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments">PutReassignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetExecuteAt">ResetExecuteAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetIsSchedule">ResetIsSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetThrottle">ResetThrottle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetTimeEstimate">ResetTimeEstimate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReassignments` <a name="PutReassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments"></a>

```csharp
private void PutReassignments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments.parameter.value"></a>

- *Type:* object

---

##### `ResetExecuteAt` <a name="ResetExecuteAt" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetExecuteAt"></a>

```csharp
private void ResetExecuteAt()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSchedule` <a name="ResetIsSchedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetIsSchedule"></a>

```csharp
private void ResetIsSchedule()
```

##### `ResetThrottle` <a name="ResetThrottle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetThrottle"></a>

```csharp
private void ResetThrottle()
```

##### `ResetTimeEstimate` <a name="ResetTimeEstimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetTimeEstimate"></a>

```csharp
private void ResetTimeEstimate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsReassignPartitionsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsReassignPartitionsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsReassignPartitionsV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsReassignPartitionsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReassignPartitionsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReassignPartitionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DmsReassignPartitionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignments">Reassignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList">DmsReassignPartitionsV2ReassignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentTime">ReassignmentTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAtInput">ExecuteAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isScheduleInput">IsScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentsInput">ReassignmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttleInput">ThrottleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimateInput">TimeEstimateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAt">ExecuteAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isSchedule">IsSchedule</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttle">Throttle</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimate">TimeEstimate</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Reassignments`<sup>Required</sup> <a name="Reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignments"></a>

```csharp
public DmsReassignPartitionsV2ReassignmentsList Reassignments { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList">DmsReassignPartitionsV2ReassignmentsList</a>

---

##### `ReassignmentTime`<sup>Required</sup> <a name="ReassignmentTime" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentTime"></a>

```csharp
public double ReassignmentTime { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ExecuteAtInput`<sup>Optional</sup> <a name="ExecuteAtInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAtInput"></a>

```csharp
public double ExecuteAtInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `IsScheduleInput`<sup>Optional</sup> <a name="IsScheduleInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isScheduleInput"></a>

```csharp
public object IsScheduleInput { get; }
```

- *Type:* object

---

##### `ReassignmentsInput`<sup>Optional</sup> <a name="ReassignmentsInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentsInput"></a>

```csharp
public object ReassignmentsInput { get; }
```

- *Type:* object

---

##### `ThrottleInput`<sup>Optional</sup> <a name="ThrottleInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttleInput"></a>

```csharp
public double ThrottleInput { get; }
```

- *Type:* double

---

##### `TimeEstimateInput`<sup>Optional</sup> <a name="TimeEstimateInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimateInput"></a>

```csharp
public object TimeEstimateInput { get; }
```

- *Type:* object

---

##### `ExecuteAt`<sup>Required</sup> <a name="ExecuteAt" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAt"></a>

```csharp
public double ExecuteAt { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `IsSchedule`<sup>Required</sup> <a name="IsSchedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isSchedule"></a>

```csharp
public object IsSchedule { get; }
```

- *Type:* object

---

##### `Throttle`<sup>Required</sup> <a name="Throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttle"></a>

```csharp
public double Throttle { get; }
```

- *Type:* double

---

##### `TimeEstimate`<sup>Required</sup> <a name="TimeEstimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimate"></a>

```csharp
public object TimeEstimate { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReassignPartitionsV2Config <a name="DmsReassignPartitionsV2Config" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    object Reassignments,
    double ExecuteAt = null,
    string Id = null,
    object IsSchedule = null,
    double Throttle = null,
    object TimeEstimate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.reassignments">Reassignments</a></code> | <code>object</code> | reassignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.executeAt">ExecuteAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.isSchedule">IsSchedule</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.throttle">Throttle</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.timeEstimate">TimeEstimate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}.

---

##### `Reassignments`<sup>Required</sup> <a name="Reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.reassignments"></a>

```csharp
public object Reassignments { get; set; }
```

- *Type:* object

reassignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#reassignments DmsReassignPartitionsV2#reassignments}

---

##### `ExecuteAt`<sup>Optional</sup> <a name="ExecuteAt" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.executeAt"></a>

```csharp
public double ExecuteAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSchedule`<sup>Optional</sup> <a name="IsSchedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.isSchedule"></a>

```csharp
public object IsSchedule { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}.

---

##### `Throttle`<sup>Optional</sup> <a name="Throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.throttle"></a>

```csharp
public double Throttle { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}.

---

##### `TimeEstimate`<sup>Optional</sup> <a name="TimeEstimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.timeEstimate"></a>

```csharp
public object TimeEstimate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}.

---

### DmsReassignPartitionsV2Reassignments <a name="DmsReassignPartitionsV2Reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2Reassignments {
    string Topic,
    object Assignments = null,
    double[] Brokers = null,
    double ReplicationFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.assignments">Assignments</a></code> | <code>object</code> | assignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.brokers">Brokers</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}.

---

##### `Assignments`<sup>Optional</sup> <a name="Assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.assignments"></a>

```csharp
public object Assignments { get; set; }
```

- *Type:* object

assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#assignments DmsReassignPartitionsV2#assignments}

---

##### `Brokers`<sup>Optional</sup> <a name="Brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.brokers"></a>

```csharp
public double[] Brokers { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}.

---

##### `ReplicationFactor`<sup>Optional</sup> <a name="ReplicationFactor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}.

---

### DmsReassignPartitionsV2ReassignmentsAssignments <a name="DmsReassignPartitionsV2ReassignmentsAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2ReassignmentsAssignments {
    double Partition = null,
    double[] PartitionBrokers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partition">Partition</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partitionBrokers">PartitionBrokers</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}. |

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partition"></a>

```csharp
public double Partition { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}.

---

##### `PartitionBrokers`<sup>Optional</sup> <a name="PartitionBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partitionBrokers"></a>

```csharp
public double[] PartitionBrokers { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReassignPartitionsV2ReassignmentsAssignmentsList <a name="DmsReassignPartitionsV2ReassignmentsAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2ReassignmentsAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get"></a>

```csharp
private DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference <a name="DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartitionBrokers">ResetPartitionBrokers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPartitionBrokers` <a name="ResetPartitionBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartitionBrokers"></a>

```csharp
private void ResetPartitionBrokers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokersInput">PartitionBrokersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokers">PartitionBrokers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionBrokersInput`<sup>Optional</sup> <a name="PartitionBrokersInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokersInput"></a>

```csharp
public double[] PartitionBrokersInput { get; }
```

- *Type:* double[]

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionInput"></a>

```csharp
public double PartitionInput { get; }
```

- *Type:* double

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `PartitionBrokers`<sup>Required</sup> <a name="PartitionBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokers"></a>

```csharp
public double[] PartitionBrokers { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DmsReassignPartitionsV2ReassignmentsList <a name="DmsReassignPartitionsV2ReassignmentsList" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2ReassignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get"></a>

```csharp
private DmsReassignPartitionsV2ReassignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DmsReassignPartitionsV2ReassignmentsOutputReference <a name="DmsReassignPartitionsV2ReassignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsReassignPartitionsV2ReassignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments">PutAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetAssignments">ResetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetBrokers">ResetBrokers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetReplicationFactor">ResetReplicationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssignments` <a name="PutAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments"></a>

```csharp
private void PutAssignments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments.parameter.value"></a>

- *Type:* object

---

##### `ResetAssignments` <a name="ResetAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetAssignments"></a>

```csharp
private void ResetAssignments()
```

##### `ResetBrokers` <a name="ResetBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetBrokers"></a>

```csharp
private void ResetBrokers()
```

##### `ResetReplicationFactor` <a name="ResetReplicationFactor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetReplicationFactor"></a>

```csharp
private void ResetReplicationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignments">Assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList">DmsReassignPartitionsV2ReassignmentsAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignmentsInput">AssignmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokersInput">BrokersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokers">Brokers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Assignments`<sup>Required</sup> <a name="Assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignments"></a>

```csharp
public DmsReassignPartitionsV2ReassignmentsAssignmentsList Assignments { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList">DmsReassignPartitionsV2ReassignmentsAssignmentsList</a>

---

##### `AssignmentsInput`<sup>Optional</sup> <a name="AssignmentsInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignmentsInput"></a>

```csharp
public object AssignmentsInput { get; }
```

- *Type:* object

---

##### `BrokersInput`<sup>Optional</sup> <a name="BrokersInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokersInput"></a>

```csharp
public double[] BrokersInput { get; }
```

- *Type:* double[]

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactorInput"></a>

```csharp
public double ReplicationFactorInput { get; }
```

- *Type:* double

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Brokers`<sup>Required</sup> <a name="Brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokers"></a>

```csharp
public double[] Brokers { get; }
```

- *Type:* double[]

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



