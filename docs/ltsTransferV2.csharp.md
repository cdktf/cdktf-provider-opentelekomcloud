# `ltsTransferV2` Submodule <a name="`ltsTransferV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsTransferV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsTransferV2 <a name="LtsTransferV2" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2 opentelekomcloud_lts_transfer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2(Construct Scope, string Id, LtsTransferV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config">LtsTransferV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config">LtsTransferV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogTransferInfo">PutLogTransferInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogStreams"></a>

```csharp
private void PutLogStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogStreams.parameter.value"></a>

- *Type:* object

---

##### `PutLogTransferInfo` <a name="PutLogTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogTransferInfo"></a>

```csharp
private void PutLogTransferInfo(LtsTransferV2LogTransferInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogTransferInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsTransferV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsTransferV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsTransferV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsTransferV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsTransferV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LtsTransferV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LtsTransferV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LtsTransferV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LtsTransferV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList">LtsTransferV2LogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfo">LogTransferInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference">LtsTransferV2LogTransferInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreamsInput">LogStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfoInput">LogTransferInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreams"></a>

```csharp
public LtsTransferV2LogStreamsList LogStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList">LtsTransferV2LogStreamsList</a>

---

##### `LogTransferInfo`<sup>Required</sup> <a name="LogTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfo"></a>

```csharp
public LtsTransferV2LogTransferInfoOutputReference LogTransferInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference">LtsTransferV2LogTransferInfoOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreamsInput"></a>

```csharp
public object LogStreamsInput { get; }
```

- *Type:* object

---

##### `LogTransferInfoInput`<sup>Optional</sup> <a name="LogTransferInfoInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfoInput"></a>

```csharp
public LtsTransferV2LogTransferInfo LogTransferInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsTransferV2Config <a name="LtsTransferV2Config" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogGroupId,
    object LogStreams,
    LtsTransferV2LogTransferInfo LogTransferInfo,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_group_id LtsTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logStreams">LogStreams</a></code> | <code>object</code> | log_streams block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logTransferInfo">LogTransferInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | log_transfer_info block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#id LtsTransferV2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_group_id LtsTransferV2#log_group_id}.

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logStreams"></a>

```csharp
public object LogStreams { get; set; }
```

- *Type:* object

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_streams LtsTransferV2#log_streams}

---

##### `LogTransferInfo`<sup>Required</sup> <a name="LogTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logTransferInfo"></a>

```csharp
public LtsTransferV2LogTransferInfo LogTransferInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

log_transfer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_info LtsTransferV2#log_transfer_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#id LtsTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LtsTransferV2LogStreams <a name="LtsTransferV2LogStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogStreams {
    string LogStreamId,
    string LogStreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamId">LogStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_id LtsTransferV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamName">LogStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_name LtsTransferV2#log_stream_name}. |

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamId"></a>

```csharp
public string LogStreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_id LtsTransferV2#log_stream_id}.

---

##### `LogStreamName`<sup>Optional</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamName"></a>

```csharp
public string LogStreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_name LtsTransferV2#log_stream_name}.

---

### LtsTransferV2LogTransferInfo <a name="LtsTransferV2LogTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogTransferInfo {
    string LogStorageFormat,
    LtsTransferV2LogTransferInfoLogTransferDetail LogTransferDetail,
    string LogTransferMode,
    string LogTransferStatus,
    string LogTransferType,
    LtsTransferV2LogTransferInfoLogAgencyTransfer LogAgencyTransfer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logStorageFormat">LogStorageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_storage_format LtsTransferV2#log_storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferDetail">LogTransferDetail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a></code> | log_transfer_detail block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferMode">LogTransferMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_mode LtsTransferV2#log_transfer_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferStatus">LogTransferStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_status LtsTransferV2#log_transfer_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferType">LogTransferType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_type LtsTransferV2#log_transfer_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logAgencyTransfer">LogAgencyTransfer</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a></code> | log_agency_transfer block. |

---

##### `LogStorageFormat`<sup>Required</sup> <a name="LogStorageFormat" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logStorageFormat"></a>

```csharp
public string LogStorageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_storage_format LtsTransferV2#log_storage_format}.

---

##### `LogTransferDetail`<sup>Required</sup> <a name="LogTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferDetail"></a>

```csharp
public LtsTransferV2LogTransferInfoLogTransferDetail LogTransferDetail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

log_transfer_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_detail LtsTransferV2#log_transfer_detail}

---

##### `LogTransferMode`<sup>Required</sup> <a name="LogTransferMode" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferMode"></a>

```csharp
public string LogTransferMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_mode LtsTransferV2#log_transfer_mode}.

---

##### `LogTransferStatus`<sup>Required</sup> <a name="LogTransferStatus" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferStatus"></a>

```csharp
public string LogTransferStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_status LtsTransferV2#log_transfer_status}.

---

##### `LogTransferType`<sup>Required</sup> <a name="LogTransferType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferType"></a>

```csharp
public string LogTransferType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_type LtsTransferV2#log_transfer_type}.

---

##### `LogAgencyTransfer`<sup>Optional</sup> <a name="LogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logAgencyTransfer"></a>

```csharp
public LtsTransferV2LogTransferInfoLogAgencyTransfer LogAgencyTransfer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

log_agency_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_agency_transfer LtsTransferV2#log_agency_transfer}

---

### LtsTransferV2LogTransferInfoLogAgencyTransfer <a name="LtsTransferV2LogTransferInfoLogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogTransferInfoLogAgencyTransfer {
    string AgencyDomainId,
    string AgencyDomainName,
    string AgencyName,
    string AgencyProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainId">AgencyDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_id LtsTransferV2#agency_domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainName">AgencyDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_name LtsTransferV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyName">AgencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_name LtsTransferV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyProjectId">AgencyProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_project_id LtsTransferV2#agency_project_id}. |

---

##### `AgencyDomainId`<sup>Required</sup> <a name="AgencyDomainId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainId"></a>

```csharp
public string AgencyDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_id LtsTransferV2#agency_domain_id}.

---

##### `AgencyDomainName`<sup>Required</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainName"></a>

```csharp
public string AgencyDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_name LtsTransferV2#agency_domain_name}.

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyName"></a>

```csharp
public string AgencyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_name LtsTransferV2#agency_name}.

---

##### `AgencyProjectId`<sup>Required</sup> <a name="AgencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyProjectId"></a>

```csharp
public string AgencyProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_project_id LtsTransferV2#agency_project_id}.

---

### LtsTransferV2LogTransferInfoLogTransferDetail <a name="LtsTransferV2LogTransferInfoLogTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogTransferInfoLogTransferDetail {
    string ObsBucketName = null,
    string ObsDirPrefixName = null,
    object ObsEncryptedEnable = null,
    string ObsEncryptedId = null,
    string ObsEpsId = null,
    double ObsPeriod = null,
    string ObsPeriodUnit = null,
    string ObsPrefixName = null,
    string ObsTimeZone = null,
    string ObsTimeZoneId = null,
    string ObsTransferPath = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsBucketName">ObsBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_bucket_name LtsTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsDirPrefixName">ObsDirPrefixName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_dir_prefix_name LtsTransferV2#obs_dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedEnable">ObsEncryptedEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_enable LtsTransferV2#obs_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedId">ObsEncryptedId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_id LtsTransferV2#obs_encrypted_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEpsId">ObsEpsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_eps_id LtsTransferV2#obs_eps_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriod">ObsPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period LtsTransferV2#obs_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriodUnit">ObsPeriodUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period_unit LtsTransferV2#obs_period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPrefixName">ObsPrefixName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_prefix_name LtsTransferV2#obs_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZone">ObsTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone LtsTransferV2#obs_time_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZoneId">ObsTimeZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone_id LtsTransferV2#obs_time_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTransferPath">ObsTransferPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_transfer_path LtsTransferV2#obs_transfer_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#tags LtsTransferV2#tags}. |

---

##### `ObsBucketName`<sup>Optional</sup> <a name="ObsBucketName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsBucketName"></a>

```csharp
public string ObsBucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_bucket_name LtsTransferV2#obs_bucket_name}.

---

##### `ObsDirPrefixName`<sup>Optional</sup> <a name="ObsDirPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsDirPrefixName"></a>

```csharp
public string ObsDirPrefixName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_dir_prefix_name LtsTransferV2#obs_dir_prefix_name}.

---

##### `ObsEncryptedEnable`<sup>Optional</sup> <a name="ObsEncryptedEnable" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedEnable"></a>

```csharp
public object ObsEncryptedEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_enable LtsTransferV2#obs_encrypted_enable}.

---

##### `ObsEncryptedId`<sup>Optional</sup> <a name="ObsEncryptedId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedId"></a>

```csharp
public string ObsEncryptedId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_id LtsTransferV2#obs_encrypted_id}.

---

##### `ObsEpsId`<sup>Optional</sup> <a name="ObsEpsId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEpsId"></a>

```csharp
public string ObsEpsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_eps_id LtsTransferV2#obs_eps_id}.

---

##### `ObsPeriod`<sup>Optional</sup> <a name="ObsPeriod" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriod"></a>

```csharp
public double ObsPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period LtsTransferV2#obs_period}.

---

##### `ObsPeriodUnit`<sup>Optional</sup> <a name="ObsPeriodUnit" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriodUnit"></a>

```csharp
public string ObsPeriodUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period_unit LtsTransferV2#obs_period_unit}.

---

##### `ObsPrefixName`<sup>Optional</sup> <a name="ObsPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPrefixName"></a>

```csharp
public string ObsPrefixName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_prefix_name LtsTransferV2#obs_prefix_name}.

---

##### `ObsTimeZone`<sup>Optional</sup> <a name="ObsTimeZone" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZone"></a>

```csharp
public string ObsTimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone LtsTransferV2#obs_time_zone}.

---

##### `ObsTimeZoneId`<sup>Optional</sup> <a name="ObsTimeZoneId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZoneId"></a>

```csharp
public string ObsTimeZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone_id LtsTransferV2#obs_time_zone_id}.

---

##### `ObsTransferPath`<sup>Optional</sup> <a name="ObsTransferPath" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTransferPath"></a>

```csharp
public string ObsTransferPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_transfer_path LtsTransferV2#obs_transfer_path}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#tags LtsTransferV2#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsTransferV2LogStreamsList <a name="LtsTransferV2LogStreamsList" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.get"></a>

```csharp
private LtsTransferV2LogStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LtsTransferV2LogStreamsOutputReference <a name="LtsTransferV2LogStreamsOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resetLogStreamName">ResetLogStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogStreamName` <a name="ResetLogStreamName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resetLogStreamName"></a>

```csharp
private void ResetLogStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamNameInput">LogStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamName">LogStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamIdInput"></a>

```csharp
public string LogStreamIdInput { get; }
```

- *Type:* string

---

##### `LogStreamNameInput`<sup>Optional</sup> <a name="LogStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamNameInput"></a>

```csharp
public string LogStreamNameInput { get; }
```

- *Type:* string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamName"></a>

```csharp
public string LogStreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference <a name="LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainIdInput">AgencyDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainNameInput">AgencyDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyNameInput">AgencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectIdInput">AgencyProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainId">AgencyDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainName">AgencyDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyName">AgencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectId">AgencyProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgencyDomainIdInput`<sup>Optional</sup> <a name="AgencyDomainIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainIdInput"></a>

```csharp
public string AgencyDomainIdInput { get; }
```

- *Type:* string

---

##### `AgencyDomainNameInput`<sup>Optional</sup> <a name="AgencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainNameInput"></a>

```csharp
public string AgencyDomainNameInput { get; }
```

- *Type:* string

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyNameInput"></a>

```csharp
public string AgencyNameInput { get; }
```

- *Type:* string

---

##### `AgencyProjectIdInput`<sup>Optional</sup> <a name="AgencyProjectIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectIdInput"></a>

```csharp
public string AgencyProjectIdInput { get; }
```

- *Type:* string

---

##### `AgencyDomainId`<sup>Required</sup> <a name="AgencyDomainId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainId"></a>

```csharp
public string AgencyDomainId { get; }
```

- *Type:* string

---

##### `AgencyDomainName`<sup>Required</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainName"></a>

```csharp
public string AgencyDomainName { get; }
```

- *Type:* string

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyName"></a>

```csharp
public string AgencyName { get; }
```

- *Type:* string

---

##### `AgencyProjectId`<sup>Required</sup> <a name="AgencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectId"></a>

```csharp
public string AgencyProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.internalValue"></a>

```csharp
public LtsTransferV2LogTransferInfoLogAgencyTransfer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

---


### LtsTransferV2LogTransferInfoLogTransferDetailOutputReference <a name="LtsTransferV2LogTransferInfoLogTransferDetailOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogTransferInfoLogTransferDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsBucketName">ResetObsBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsDirPrefixName">ResetObsDirPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedEnable">ResetObsEncryptedEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedId">ResetObsEncryptedId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEpsId">ResetObsEpsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriod">ResetObsPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriodUnit">ResetObsPeriodUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPrefixName">ResetObsPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZone">ResetObsTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZoneId">ResetObsTimeZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTransferPath">ResetObsTransferPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObsBucketName` <a name="ResetObsBucketName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsBucketName"></a>

```csharp
private void ResetObsBucketName()
```

##### `ResetObsDirPrefixName` <a name="ResetObsDirPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsDirPrefixName"></a>

```csharp
private void ResetObsDirPrefixName()
```

##### `ResetObsEncryptedEnable` <a name="ResetObsEncryptedEnable" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedEnable"></a>

```csharp
private void ResetObsEncryptedEnable()
```

##### `ResetObsEncryptedId` <a name="ResetObsEncryptedId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedId"></a>

```csharp
private void ResetObsEncryptedId()
```

##### `ResetObsEpsId` <a name="ResetObsEpsId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEpsId"></a>

```csharp
private void ResetObsEpsId()
```

##### `ResetObsPeriod` <a name="ResetObsPeriod" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriod"></a>

```csharp
private void ResetObsPeriod()
```

##### `ResetObsPeriodUnit` <a name="ResetObsPeriodUnit" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriodUnit"></a>

```csharp
private void ResetObsPeriodUnit()
```

##### `ResetObsPrefixName` <a name="ResetObsPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPrefixName"></a>

```csharp
private void ResetObsPrefixName()
```

##### `ResetObsTimeZone` <a name="ResetObsTimeZone" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZone"></a>

```csharp
private void ResetObsTimeZone()
```

##### `ResetObsTimeZoneId` <a name="ResetObsTimeZoneId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZoneId"></a>

```csharp
private void ResetObsTimeZoneId()
```

##### `ResetObsTransferPath` <a name="ResetObsTransferPath" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTransferPath"></a>

```csharp
private void ResetObsTransferPath()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketNameInput">ObsBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixNameInput">ObsDirPrefixNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnableInput">ObsEncryptedEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedIdInput">ObsEncryptedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsIdInput">ObsEpsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodInput">ObsPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnitInput">ObsPeriodUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixNameInput">ObsPrefixNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneIdInput">ObsTimeZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneInput">ObsTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPathInput">ObsTransferPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketName">ObsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixName">ObsDirPrefixName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnable">ObsEncryptedEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedId">ObsEncryptedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsId">ObsEpsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriod">ObsPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnit">ObsPeriodUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixName">ObsPrefixName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZone">ObsTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneId">ObsTimeZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPath">ObsTransferPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObsBucketNameInput`<sup>Optional</sup> <a name="ObsBucketNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketNameInput"></a>

```csharp
public string ObsBucketNameInput { get; }
```

- *Type:* string

---

##### `ObsDirPrefixNameInput`<sup>Optional</sup> <a name="ObsDirPrefixNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixNameInput"></a>

```csharp
public string ObsDirPrefixNameInput { get; }
```

- *Type:* string

---

##### `ObsEncryptedEnableInput`<sup>Optional</sup> <a name="ObsEncryptedEnableInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnableInput"></a>

```csharp
public object ObsEncryptedEnableInput { get; }
```

- *Type:* object

---

##### `ObsEncryptedIdInput`<sup>Optional</sup> <a name="ObsEncryptedIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedIdInput"></a>

```csharp
public string ObsEncryptedIdInput { get; }
```

- *Type:* string

---

##### `ObsEpsIdInput`<sup>Optional</sup> <a name="ObsEpsIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsIdInput"></a>

```csharp
public string ObsEpsIdInput { get; }
```

- *Type:* string

---

##### `ObsPeriodInput`<sup>Optional</sup> <a name="ObsPeriodInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodInput"></a>

```csharp
public double ObsPeriodInput { get; }
```

- *Type:* double

---

##### `ObsPeriodUnitInput`<sup>Optional</sup> <a name="ObsPeriodUnitInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnitInput"></a>

```csharp
public string ObsPeriodUnitInput { get; }
```

- *Type:* string

---

##### `ObsPrefixNameInput`<sup>Optional</sup> <a name="ObsPrefixNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixNameInput"></a>

```csharp
public string ObsPrefixNameInput { get; }
```

- *Type:* string

---

##### `ObsTimeZoneIdInput`<sup>Optional</sup> <a name="ObsTimeZoneIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneIdInput"></a>

```csharp
public string ObsTimeZoneIdInput { get; }
```

- *Type:* string

---

##### `ObsTimeZoneInput`<sup>Optional</sup> <a name="ObsTimeZoneInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneInput"></a>

```csharp
public string ObsTimeZoneInput { get; }
```

- *Type:* string

---

##### `ObsTransferPathInput`<sup>Optional</sup> <a name="ObsTransferPathInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPathInput"></a>

```csharp
public string ObsTransferPathInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ObsBucketName`<sup>Required</sup> <a name="ObsBucketName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketName"></a>

```csharp
public string ObsBucketName { get; }
```

- *Type:* string

---

##### `ObsDirPrefixName`<sup>Required</sup> <a name="ObsDirPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixName"></a>

```csharp
public string ObsDirPrefixName { get; }
```

- *Type:* string

---

##### `ObsEncryptedEnable`<sup>Required</sup> <a name="ObsEncryptedEnable" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnable"></a>

```csharp
public object ObsEncryptedEnable { get; }
```

- *Type:* object

---

##### `ObsEncryptedId`<sup>Required</sup> <a name="ObsEncryptedId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedId"></a>

```csharp
public string ObsEncryptedId { get; }
```

- *Type:* string

---

##### `ObsEpsId`<sup>Required</sup> <a name="ObsEpsId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsId"></a>

```csharp
public string ObsEpsId { get; }
```

- *Type:* string

---

##### `ObsPeriod`<sup>Required</sup> <a name="ObsPeriod" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriod"></a>

```csharp
public double ObsPeriod { get; }
```

- *Type:* double

---

##### `ObsPeriodUnit`<sup>Required</sup> <a name="ObsPeriodUnit" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnit"></a>

```csharp
public string ObsPeriodUnit { get; }
```

- *Type:* string

---

##### `ObsPrefixName`<sup>Required</sup> <a name="ObsPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixName"></a>

```csharp
public string ObsPrefixName { get; }
```

- *Type:* string

---

##### `ObsTimeZone`<sup>Required</sup> <a name="ObsTimeZone" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZone"></a>

```csharp
public string ObsTimeZone { get; }
```

- *Type:* string

---

##### `ObsTimeZoneId`<sup>Required</sup> <a name="ObsTimeZoneId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneId"></a>

```csharp
public string ObsTimeZoneId { get; }
```

- *Type:* string

---

##### `ObsTransferPath`<sup>Required</sup> <a name="ObsTransferPath" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPath"></a>

```csharp
public string ObsTransferPath { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.internalValue"></a>

```csharp
public LtsTransferV2LogTransferInfoLogTransferDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

---


### LtsTransferV2LogTransferInfoOutputReference <a name="LtsTransferV2LogTransferInfoOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsTransferV2LogTransferInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogAgencyTransfer">PutLogAgencyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogTransferDetail">PutLogTransferDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resetLogAgencyTransfer">ResetLogAgencyTransfer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogAgencyTransfer` <a name="PutLogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogAgencyTransfer"></a>

```csharp
private void PutLogAgencyTransfer(LtsTransferV2LogTransferInfoLogAgencyTransfer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogAgencyTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

---

##### `PutLogTransferDetail` <a name="PutLogTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogTransferDetail"></a>

```csharp
private void PutLogTransferDetail(LtsTransferV2LogTransferInfoLogTransferDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogTransferDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

---

##### `ResetLogAgencyTransfer` <a name="ResetLogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resetLogAgencyTransfer"></a>

```csharp
private void ResetLogAgencyTransfer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransfer">LogAgencyTransfer</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference">LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logCreatedAt">LogCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetail">LogTransferDetail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference">LtsTransferV2LogTransferInfoLogTransferDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransferInput">LogAgencyTransferInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormatInput">LogStorageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetailInput">LogTransferDetailInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferModeInput">LogTransferModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatusInput">LogTransferStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferTypeInput">LogTransferTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormat">LogStorageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferMode">LogTransferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatus">LogTransferStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferType">LogTransferType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAgencyTransfer`<sup>Required</sup> <a name="LogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransfer"></a>

```csharp
public LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference LogAgencyTransfer { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference">LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference</a>

---

##### `LogCreatedAt`<sup>Required</sup> <a name="LogCreatedAt" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logCreatedAt"></a>

```csharp
public string LogCreatedAt { get; }
```

- *Type:* string

---

##### `LogTransferDetail`<sup>Required</sup> <a name="LogTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetail"></a>

```csharp
public LtsTransferV2LogTransferInfoLogTransferDetailOutputReference LogTransferDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference">LtsTransferV2LogTransferInfoLogTransferDetailOutputReference</a>

---

##### `LogAgencyTransferInput`<sup>Optional</sup> <a name="LogAgencyTransferInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransferInput"></a>

```csharp
public LtsTransferV2LogTransferInfoLogAgencyTransfer LogAgencyTransferInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

---

##### `LogStorageFormatInput`<sup>Optional</sup> <a name="LogStorageFormatInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormatInput"></a>

```csharp
public string LogStorageFormatInput { get; }
```

- *Type:* string

---

##### `LogTransferDetailInput`<sup>Optional</sup> <a name="LogTransferDetailInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetailInput"></a>

```csharp
public LtsTransferV2LogTransferInfoLogTransferDetail LogTransferDetailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

---

##### `LogTransferModeInput`<sup>Optional</sup> <a name="LogTransferModeInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferModeInput"></a>

```csharp
public string LogTransferModeInput { get; }
```

- *Type:* string

---

##### `LogTransferStatusInput`<sup>Optional</sup> <a name="LogTransferStatusInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatusInput"></a>

```csharp
public string LogTransferStatusInput { get; }
```

- *Type:* string

---

##### `LogTransferTypeInput`<sup>Optional</sup> <a name="LogTransferTypeInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferTypeInput"></a>

```csharp
public string LogTransferTypeInput { get; }
```

- *Type:* string

---

##### `LogStorageFormat`<sup>Required</sup> <a name="LogStorageFormat" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormat"></a>

```csharp
public string LogStorageFormat { get; }
```

- *Type:* string

---

##### `LogTransferMode`<sup>Required</sup> <a name="LogTransferMode" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferMode"></a>

```csharp
public string LogTransferMode { get; }
```

- *Type:* string

---

##### `LogTransferStatus`<sup>Required</sup> <a name="LogTransferStatus" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatus"></a>

```csharp
public string LogTransferStatus { get; }
```

- *Type:* string

---

##### `LogTransferType`<sup>Required</sup> <a name="LogTransferType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferType"></a>

```csharp
public string LogTransferType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.internalValue"></a>

```csharp
public LtsTransferV2LogTransferInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

---



