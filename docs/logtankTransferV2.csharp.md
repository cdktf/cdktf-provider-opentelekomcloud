# `logtankTransferV2` Submodule <a name="`logtankTransferV2` Submodule" id="@cdktf/provider-opentelekomcloud.logtankTransferV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogtankTransferV2 <a name="LogtankTransferV2" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2 opentelekomcloud_logtank_transfer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LogtankTransferV2(Construct Scope, string Id, LogtankTransferV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config">LogtankTransferV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config">LogtankTransferV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName">ResetDirPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName">ResetPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn">ResetSwitchOn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDirPrefixName` <a name="ResetDirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName"></a>

```csharp
private void ResetDirPrefixName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrefixName` <a name="ResetPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName"></a>

```csharp
private void ResetPrefixName()
```

##### `ResetSwitchOn` <a name="ResetSwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn"></a>

```csharp
private void ResetSwitchOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogtankTransferV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LogtankTransferV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LogtankTransferV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LogtankTransferV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LogtankTransferV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogtankTransferV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogtankTransferV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogtankTransferV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogtankTransferV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime">CreateTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode">LogTransferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType">LogTransferType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable">ObsEncryptionEnable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId">ObsEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput">DirPrefixNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput">LogStreamIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput">ObsBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput">PeriodUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput">PrefixNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput">StorageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput">SwitchOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName">DirPrefixName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds">LogStreamIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName">ObsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit">PeriodUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName">PrefixName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat">StorageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn">SwitchOn</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime"></a>

```csharp
public double CreateTime { get; }
```

- *Type:* double

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogTransferMode`<sup>Required</sup> <a name="LogTransferMode" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode"></a>

```csharp
public string LogTransferMode { get; }
```

- *Type:* string

---

##### `LogTransferType`<sup>Required</sup> <a name="LogTransferType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType"></a>

```csharp
public string LogTransferType { get; }
```

- *Type:* string

---

##### `ObsEncryptionEnable`<sup>Required</sup> <a name="ObsEncryptionEnable" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable"></a>

```csharp
public IResolvable ObsEncryptionEnable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ObsEncryptionId`<sup>Required</sup> <a name="ObsEncryptionId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId"></a>

```csharp
public string ObsEncryptionId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DirPrefixNameInput`<sup>Optional</sup> <a name="DirPrefixNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput"></a>

```csharp
public string DirPrefixNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogStreamIdsInput`<sup>Optional</sup> <a name="LogStreamIdsInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput"></a>

```csharp
public string[] LogStreamIdsInput { get; }
```

- *Type:* string[]

---

##### `ObsBucketNameInput`<sup>Optional</sup> <a name="ObsBucketNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput"></a>

```csharp
public string ObsBucketNameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `PeriodUnitInput`<sup>Optional</sup> <a name="PeriodUnitInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput"></a>

```csharp
public string PeriodUnitInput { get; }
```

- *Type:* string

---

##### `PrefixNameInput`<sup>Optional</sup> <a name="PrefixNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput"></a>

```csharp
public string PrefixNameInput { get; }
```

- *Type:* string

---

##### `StorageFormatInput`<sup>Optional</sup> <a name="StorageFormatInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput"></a>

```csharp
public string StorageFormatInput { get; }
```

- *Type:* string

---

##### `SwitchOnInput`<sup>Optional</sup> <a name="SwitchOnInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput"></a>

```csharp
public object SwitchOnInput { get; }
```

- *Type:* object

---

##### `DirPrefixName`<sup>Required</sup> <a name="DirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName"></a>

```csharp
public string DirPrefixName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogStreamIds`<sup>Required</sup> <a name="LogStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds"></a>

```csharp
public string[] LogStreamIds { get; }
```

- *Type:* string[]

---

##### `ObsBucketName`<sup>Required</sup> <a name="ObsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName"></a>

```csharp
public string ObsBucketName { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `PeriodUnit`<sup>Required</sup> <a name="PeriodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit"></a>

```csharp
public string PeriodUnit { get; }
```

- *Type:* string

---

##### `PrefixName`<sup>Required</sup> <a name="PrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName"></a>

```csharp
public string PrefixName { get; }
```

- *Type:* string

---

##### `StorageFormat`<sup>Required</sup> <a name="StorageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat"></a>

```csharp
public string StorageFormat { get; }
```

- *Type:* string

---

##### `SwitchOn`<sup>Required</sup> <a name="SwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn"></a>

```csharp
public object SwitchOn { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogtankTransferV2Config <a name="LogtankTransferV2Config" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LogtankTransferV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogGroupId,
    string[] LogStreamIds,
    string ObsBucketName,
    double Period,
    string PeriodUnit,
    string StorageFormat,
    string DirPrefixName = null,
    string Id = null,
    string PrefixName = null,
    object SwitchOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds">LogStreamIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName">ObsBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit">PeriodUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat">StorageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName">DirPrefixName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName">PrefixName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn">SwitchOn</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}.

---

##### `LogStreamIds`<sup>Required</sup> <a name="LogStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds"></a>

```csharp
public string[] LogStreamIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}.

---

##### `ObsBucketName`<sup>Required</sup> <a name="ObsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName"></a>

```csharp
public string ObsBucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}.

---

##### `PeriodUnit`<sup>Required</sup> <a name="PeriodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit"></a>

```csharp
public string PeriodUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}.

---

##### `StorageFormat`<sup>Required</sup> <a name="StorageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat"></a>

```csharp
public string StorageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}.

---

##### `DirPrefixName`<sup>Optional</sup> <a name="DirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName"></a>

```csharp
public string DirPrefixName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrefixName`<sup>Optional</sup> <a name="PrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName"></a>

```csharp
public string PrefixName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}.

---

##### `SwitchOn`<sup>Optional</sup> <a name="SwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn"></a>

```csharp
public object SwitchOn { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}.

---



