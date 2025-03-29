# `rmsResourceRecorderV1` Submodule <a name="`rmsResourceRecorderV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsResourceRecorderV1 <a name="RmsResourceRecorderV1" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1 opentelekomcloud_rms_resource_recorder_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1(Construct Scope, string Id, RmsResourceRecorderV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config">RmsResourceRecorderV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config">RmsResourceRecorderV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel">PutObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel">PutSmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel">ResetObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel">ResetSmnChannel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObsChannel` <a name="PutObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel"></a>

```csharp
private void PutObsChannel(RmsResourceRecorderV1ObsChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector"></a>

```csharp
private void PutSelector(RmsResourceRecorderV1Selector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `PutSmnChannel` <a name="PutSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel"></a>

```csharp
private void PutSmnChannel(RmsResourceRecorderV1SmnChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetObsChannel` <a name="ResetObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel"></a>

```csharp
private void ResetObsChannel()
```

##### `ResetSmnChannel` <a name="ResetSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel"></a>

```csharp
private void ResetSmnChannel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RmsResourceRecorderV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RmsResourceRecorderV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RmsResourceRecorderV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RmsResourceRecorderV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RmsResourceRecorderV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RmsResourceRecorderV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RmsResourceRecorderV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel">ObsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel">SmnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput">AgencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput">ObsChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput">SelectorInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput">SmnChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName">AgencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ObsChannel`<sup>Required</sup> <a name="ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel"></a>

```csharp
public RmsResourceRecorderV1ObsChannelOutputReference ObsChannel { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector"></a>

```csharp
public RmsResourceRecorderV1SelectorOutputReference Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a>

---

##### `SmnChannel`<sup>Required</sup> <a name="SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel"></a>

```csharp
public RmsResourceRecorderV1SmnChannelOutputReference SmnChannel { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a>

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput"></a>

```csharp
public string AgencyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ObsChannelInput`<sup>Optional</sup> <a name="ObsChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput"></a>

```csharp
public RmsResourceRecorderV1ObsChannel ObsChannelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput"></a>

```csharp
public RmsResourceRecorderV1Selector SelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `SmnChannelInput`<sup>Optional</sup> <a name="SmnChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput"></a>

```csharp
public RmsResourceRecorderV1SmnChannel SmnChannelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName"></a>

```csharp
public string AgencyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RmsResourceRecorderV1Config <a name="RmsResourceRecorderV1Config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgencyName,
    RmsResourceRecorderV1Selector Selector,
    string Id = null,
    RmsResourceRecorderV1ObsChannel ObsChannel = null,
    RmsResourceRecorderV1SmnChannel SmnChannel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName">AgencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel">ObsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | obs_channel block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel">SmnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | smn_channel block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName"></a>

```csharp
public string AgencyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector"></a>

```csharp
public RmsResourceRecorderV1Selector Selector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#selector RmsResourceRecorderV1#selector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObsChannel`<sup>Optional</sup> <a name="ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel"></a>

```csharp
public RmsResourceRecorderV1ObsChannel ObsChannel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

obs_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#obs_channel RmsResourceRecorderV1#obs_channel}

---

##### `SmnChannel`<sup>Optional</sup> <a name="SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel"></a>

```csharp
public RmsResourceRecorderV1SmnChannel SmnChannel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

smn_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#smn_channel RmsResourceRecorderV1#smn_channel}

---

### RmsResourceRecorderV1ObsChannel <a name="RmsResourceRecorderV1ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1ObsChannel {
    string Bucket,
    string Region,
    string BucketPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}.

---

### RmsResourceRecorderV1Selector <a name="RmsResourceRecorderV1Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1Selector {
    object AllSupported,
    string[] ResourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported">AllSupported</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}. |

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported"></a>

```csharp
public object AllSupported { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}.

---

### RmsResourceRecorderV1SmnChannel <a name="RmsResourceRecorderV1SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1SmnChannel {
    string TopicUrn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn">TopicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}. |

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn"></a>

```csharp
public string TopicUrn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsResourceRecorderV1ObsChannelOutputReference <a name="RmsResourceRecorderV1ObsChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1ObsChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue"></a>

```csharp
public RmsResourceRecorderV1ObsChannel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---


### RmsResourceRecorderV1SelectorOutputReference <a name="RmsResourceRecorderV1SelectorOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1SelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput">AllSupportedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported">AllSupported</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllSupportedInput`<sup>Optional</sup> <a name="AllSupportedInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput"></a>

```csharp
public object AllSupportedInput { get; }
```

- *Type:* object

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported"></a>

```csharp
public object AllSupported { get; }
```

- *Type:* object

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue"></a>

```csharp
public RmsResourceRecorderV1Selector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---


### RmsResourceRecorderV1SmnChannelOutputReference <a name="RmsResourceRecorderV1SmnChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RmsResourceRecorderV1SmnChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput">TopicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn">TopicUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TopicUrnInput`<sup>Optional</sup> <a name="TopicUrnInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput"></a>

```csharp
public string TopicUrnInput { get; }
```

- *Type:* string

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn"></a>

```csharp
public string TopicUrn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue"></a>

```csharp
public RmsResourceRecorderV1SmnChannel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---



