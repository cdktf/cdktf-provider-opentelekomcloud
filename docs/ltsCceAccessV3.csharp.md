# `ltsCceAccessV3` Submodule <a name="`ltsCceAccessV3` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCceAccessV3 <a name="LtsCceAccessV3" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3 opentelekomcloud_lts_cce_access_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3(Construct Scope, string Id, LtsCceAccessV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config">LtsCceAccessV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config">LtsCceAccessV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetBinaryCollect">ResetBinaryCollect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetHostGroupIds">ResetHostGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetLogSplit">ResetLogSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig"></a>

```csharp
private void PutAccessConfig(LtsCceAccessV3AccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---

##### `ResetBinaryCollect` <a name="ResetBinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetBinaryCollect"></a>

```csharp
private void ResetBinaryCollect()
```

##### `ResetHostGroupIds` <a name="ResetHostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetHostGroupIds"></a>

```csharp
private void ResetHostGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogSplit` <a name="ResetLogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetLogSplit"></a>

```csharp
private void ResetLogSplit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCceAccessV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCceAccessV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCceAccessV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCceAccessV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LtsCceAccessV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LtsCceAccessV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LtsCceAccessV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference">LtsCceAccessV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamName">LogStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollectInput">BinaryCollectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIdsInput">HostGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplitInput">LogSplitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollect">BinaryCollect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIds">HostGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplit">LogSplit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfig"></a>

```csharp
public LtsCceAccessV3AccessConfigOutputReference AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference">LtsCceAccessV3AccessConfigOutputReference</a>

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamName"></a>

```csharp
public string LogStreamName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfigInput"></a>

```csharp
public LtsCceAccessV3AccessConfig AccessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---

##### `BinaryCollectInput`<sup>Optional</sup> <a name="BinaryCollectInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollectInput"></a>

```csharp
public object BinaryCollectInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `HostGroupIdsInput`<sup>Optional</sup> <a name="HostGroupIdsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIdsInput"></a>

```csharp
public string[] HostGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogSplitInput`<sup>Optional</sup> <a name="LogSplitInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplitInput"></a>

```csharp
public object LogSplitInput { get; }
```

- *Type:* object

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamIdInput"></a>

```csharp
public string LogStreamIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BinaryCollect`<sup>Required</sup> <a name="BinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollect"></a>

```csharp
public object BinaryCollect { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `HostGroupIds`<sup>Required</sup> <a name="HostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIds"></a>

```csharp
public string[] HostGroupIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogSplit`<sup>Required</sup> <a name="LogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplit"></a>

```csharp
public object LogSplit { get; }
```

- *Type:* object

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCceAccessV3AccessConfig <a name="LtsCceAccessV3AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3AccessConfig {
    string PathType,
    string[] BlackPaths = null,
    string ContainerNameRegex = null,
    System.Collections.Generic.IDictionary<string, string> ExcludeEnvs = null,
    System.Collections.Generic.IDictionary<string, string> ExcludeK8SLabels = null,
    System.Collections.Generic.IDictionary<string, string> ExcludeLabels = null,
    System.Collections.Generic.IDictionary<string, string> IncludeEnvs = null,
    System.Collections.Generic.IDictionary<string, string> IncludeK8SLabels = null,
    System.Collections.Generic.IDictionary<string, string> IncludeLabels = null,
    System.Collections.Generic.IDictionary<string, string> LogEnvs = null,
    System.Collections.Generic.IDictionary<string, string> LogK8S = null,
    System.Collections.Generic.IDictionary<string, string> LogLabels = null,
    LtsCceAccessV3AccessConfigMultiLogFormat MultiLogFormat = null,
    string NameSpaceRegex = null,
    string[] Paths = null,
    string PodNameRegex = null,
    LtsCceAccessV3AccessConfigSingleLogFormat SingleLogFormat = null,
    object Stderr = null,
    object Stdout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.pathType">PathType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.blackPaths">BlackPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.containerNameRegex">ContainerNameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeEnvs">ExcludeEnvs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeK8SLabels">ExcludeK8SLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeLabels">ExcludeLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeEnvs">IncludeEnvs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeK8SLabels">IncludeK8SLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeLabels">IncludeLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logEnvs">LogEnvs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logK8S">LogK8S</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logLabels">LogLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.multiLogFormat">MultiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | multi_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.nameSpaceRegex">NameSpaceRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.paths">Paths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.podNameRegex">PodNameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.singleLogFormat">SingleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | single_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stderr">Stderr</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stdout">Stdout</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}. |

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.pathType"></a>

```csharp
public string PathType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}.

---

##### `BlackPaths`<sup>Optional</sup> <a name="BlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.blackPaths"></a>

```csharp
public string[] BlackPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}.

---

##### `ContainerNameRegex`<sup>Optional</sup> <a name="ContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.containerNameRegex"></a>

```csharp
public string ContainerNameRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}.

---

##### `ExcludeEnvs`<sup>Optional</sup> <a name="ExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeEnvs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeEnvs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}.

---

##### `ExcludeK8SLabels`<sup>Optional</sup> <a name="ExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeK8SLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeK8SLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}.

---

##### `ExcludeLabels`<sup>Optional</sup> <a name="ExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}.

---

##### `IncludeEnvs`<sup>Optional</sup> <a name="IncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeEnvs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeEnvs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}.

---

##### `IncludeK8SLabels`<sup>Optional</sup> <a name="IncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeK8SLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeK8SLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}.

---

##### `IncludeLabels`<sup>Optional</sup> <a name="IncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}.

---

##### `LogEnvs`<sup>Optional</sup> <a name="LogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logEnvs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogEnvs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}.

---

##### `LogK8S`<sup>Optional</sup> <a name="LogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logK8S"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogK8S { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}.

---

##### `LogLabels`<sup>Optional</sup> <a name="LogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}.

---

##### `MultiLogFormat`<sup>Optional</sup> <a name="MultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.multiLogFormat"></a>

```csharp
public LtsCceAccessV3AccessConfigMultiLogFormat MultiLogFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#multi_log_format LtsCceAccessV3#multi_log_format}

---

##### `NameSpaceRegex`<sup>Optional</sup> <a name="NameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.nameSpaceRegex"></a>

```csharp
public string NameSpaceRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}.

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}.

---

##### `PodNameRegex`<sup>Optional</sup> <a name="PodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.podNameRegex"></a>

```csharp
public string PodNameRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}.

---

##### `SingleLogFormat`<sup>Optional</sup> <a name="SingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.singleLogFormat"></a>

```csharp
public LtsCceAccessV3AccessConfigSingleLogFormat SingleLogFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#single_log_format LtsCceAccessV3#single_log_format}

---

##### `Stderr`<sup>Optional</sup> <a name="Stderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stderr"></a>

```csharp
public object Stderr { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}.

---

##### `Stdout`<sup>Optional</sup> <a name="Stdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stdout"></a>

```csharp
public object Stdout { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}.

---

### LtsCceAccessV3AccessConfigMultiLogFormat <a name="LtsCceAccessV3AccessConfigMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3AccessConfigMultiLogFormat {
    string Mode,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}.

---

### LtsCceAccessV3AccessConfigSingleLogFormat <a name="LtsCceAccessV3AccessConfigSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3AccessConfigSingleLogFormat {
    string Mode,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}.

---

### LtsCceAccessV3Config <a name="LtsCceAccessV3Config" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    LtsCceAccessV3AccessConfig AccessConfig,
    string ClusterId,
    string LogGroupId,
    string LogStreamId,
    string Name,
    object BinaryCollect = null,
    string[] HostGroupIds = null,
    string Id = null,
    object LogSplit = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logStreamId">LogStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.binaryCollect">BinaryCollect</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.hostGroupIds">HostGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logSplit">LogSplit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.accessConfig"></a>

```csharp
public LtsCceAccessV3AccessConfig AccessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#access_config LtsCceAccessV3#access_config}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}.

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}.

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logStreamId"></a>

```csharp
public string LogStreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}.

---

##### `BinaryCollect`<sup>Optional</sup> <a name="BinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.binaryCollect"></a>

```csharp
public object BinaryCollect { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}.

---

##### `HostGroupIds`<sup>Optional</sup> <a name="HostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.hostGroupIds"></a>

```csharp
public string[] HostGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogSplit`<sup>Optional</sup> <a name="LogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logSplit"></a>

```csharp
public object LogSplit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsCceAccessV3AccessConfigMultiLogFormatOutputReference <a name="LtsCceAccessV3AccessConfigMultiLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3AccessConfigMultiLogFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue"></a>

```csharp
public LtsCceAccessV3AccessConfigMultiLogFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---


### LtsCceAccessV3AccessConfigOutputReference <a name="LtsCceAccessV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3AccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat">PutMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat">PutSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetBlackPaths">ResetBlackPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetContainerNameRegex">ResetContainerNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeEnvs">ResetExcludeEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeK8SLabels">ResetExcludeK8SLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeLabels">ResetExcludeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeEnvs">ResetIncludeEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeK8SLabels">ResetIncludeK8SLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeLabels">ResetIncludeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogEnvs">ResetLogEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogK8S">ResetLogK8S</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogLabels">ResetLogLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetMultiLogFormat">ResetMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetNameSpaceRegex">ResetNameSpaceRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPodNameRegex">ResetPodNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetSingleLogFormat">ResetSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStderr">ResetStderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStdout">ResetStdout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiLogFormat` <a name="PutMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat"></a>

```csharp
private void PutMultiLogFormat(LtsCceAccessV3AccessConfigMultiLogFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---

##### `PutSingleLogFormat` <a name="PutSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat"></a>

```csharp
private void PutSingleLogFormat(LtsCceAccessV3AccessConfigSingleLogFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---

##### `ResetBlackPaths` <a name="ResetBlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetBlackPaths"></a>

```csharp
private void ResetBlackPaths()
```

##### `ResetContainerNameRegex` <a name="ResetContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetContainerNameRegex"></a>

```csharp
private void ResetContainerNameRegex()
```

##### `ResetExcludeEnvs` <a name="ResetExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeEnvs"></a>

```csharp
private void ResetExcludeEnvs()
```

##### `ResetExcludeK8SLabels` <a name="ResetExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeK8SLabels"></a>

```csharp
private void ResetExcludeK8SLabels()
```

##### `ResetExcludeLabels` <a name="ResetExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeLabels"></a>

```csharp
private void ResetExcludeLabels()
```

##### `ResetIncludeEnvs` <a name="ResetIncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeEnvs"></a>

```csharp
private void ResetIncludeEnvs()
```

##### `ResetIncludeK8SLabels` <a name="ResetIncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeK8SLabels"></a>

```csharp
private void ResetIncludeK8SLabels()
```

##### `ResetIncludeLabels` <a name="ResetIncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeLabels"></a>

```csharp
private void ResetIncludeLabels()
```

##### `ResetLogEnvs` <a name="ResetLogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogEnvs"></a>

```csharp
private void ResetLogEnvs()
```

##### `ResetLogK8S` <a name="ResetLogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogK8S"></a>

```csharp
private void ResetLogK8S()
```

##### `ResetLogLabels` <a name="ResetLogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogLabels"></a>

```csharp
private void ResetLogLabels()
```

##### `ResetMultiLogFormat` <a name="ResetMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetMultiLogFormat"></a>

```csharp
private void ResetMultiLogFormat()
```

##### `ResetNameSpaceRegex` <a name="ResetNameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetNameSpaceRegex"></a>

```csharp
private void ResetNameSpaceRegex()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```

##### `ResetPodNameRegex` <a name="ResetPodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPodNameRegex"></a>

```csharp
private void ResetPodNameRegex()
```

##### `ResetSingleLogFormat` <a name="ResetSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetSingleLogFormat"></a>

```csharp
private void ResetSingleLogFormat()
```

##### `ResetStderr` <a name="ResetStderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStderr"></a>

```csharp
private void ResetStderr()
```

##### `ResetStdout` <a name="ResetStdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStdout"></a>

```csharp
private void ResetStdout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormat">MultiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference">LtsCceAccessV3AccessConfigMultiLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormat">SingleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference">LtsCceAccessV3AccessConfigSingleLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPathsInput">BlackPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegexInput">ContainerNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvsInput">ExcludeEnvsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabelsInput">ExcludeK8SLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabelsInput">ExcludeLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvsInput">IncludeEnvsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabelsInput">IncludeK8SLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabelsInput">IncludeLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvsInput">LogEnvsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8SInput">LogK8SInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabelsInput">LogLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormatInput">MultiLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegexInput">NameSpaceRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathTypeInput">PathTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegexInput">PodNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormatInput">SingleLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderrInput">StderrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdoutInput">StdoutInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPaths">BlackPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegex">ContainerNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvs">ExcludeEnvs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabels">ExcludeK8SLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabels">ExcludeLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvs">IncludeEnvs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabels">IncludeK8SLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabels">IncludeLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvs">LogEnvs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8S">LogK8S</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabels">LogLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegex">NameSpaceRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathType">PathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegex">PodNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderr">Stderr</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdout">Stdout</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiLogFormat`<sup>Required</sup> <a name="MultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormat"></a>

```csharp
public LtsCceAccessV3AccessConfigMultiLogFormatOutputReference MultiLogFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference">LtsCceAccessV3AccessConfigMultiLogFormatOutputReference</a>

---

##### `SingleLogFormat`<sup>Required</sup> <a name="SingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormat"></a>

```csharp
public LtsCceAccessV3AccessConfigSingleLogFormatOutputReference SingleLogFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference">LtsCceAccessV3AccessConfigSingleLogFormatOutputReference</a>

---

##### `BlackPathsInput`<sup>Optional</sup> <a name="BlackPathsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPathsInput"></a>

```csharp
public string[] BlackPathsInput { get; }
```

- *Type:* string[]

---

##### `ContainerNameRegexInput`<sup>Optional</sup> <a name="ContainerNameRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegexInput"></a>

```csharp
public string ContainerNameRegexInput { get; }
```

- *Type:* string

---

##### `ExcludeEnvsInput`<sup>Optional</sup> <a name="ExcludeEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeEnvsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExcludeK8SLabelsInput`<sup>Optional</sup> <a name="ExcludeK8SLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeK8SLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExcludeLabelsInput`<sup>Optional</sup> <a name="ExcludeLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeEnvsInput`<sup>Optional</sup> <a name="IncludeEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeEnvsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeK8SLabelsInput`<sup>Optional</sup> <a name="IncludeK8SLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeK8SLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeLabelsInput`<sup>Optional</sup> <a name="IncludeLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LogEnvsInput`<sup>Optional</sup> <a name="LogEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogEnvsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LogK8SInput`<sup>Optional</sup> <a name="LogK8SInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8SInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogK8SInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LogLabelsInput`<sup>Optional</sup> <a name="LogLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MultiLogFormatInput`<sup>Optional</sup> <a name="MultiLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormatInput"></a>

```csharp
public LtsCceAccessV3AccessConfigMultiLogFormat MultiLogFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---

##### `NameSpaceRegexInput`<sup>Optional</sup> <a name="NameSpaceRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegexInput"></a>

```csharp
public string NameSpaceRegexInput { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `PathTypeInput`<sup>Optional</sup> <a name="PathTypeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathTypeInput"></a>

```csharp
public string PathTypeInput { get; }
```

- *Type:* string

---

##### `PodNameRegexInput`<sup>Optional</sup> <a name="PodNameRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegexInput"></a>

```csharp
public string PodNameRegexInput { get; }
```

- *Type:* string

---

##### `SingleLogFormatInput`<sup>Optional</sup> <a name="SingleLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormatInput"></a>

```csharp
public LtsCceAccessV3AccessConfigSingleLogFormat SingleLogFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---

##### `StderrInput`<sup>Optional</sup> <a name="StderrInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderrInput"></a>

```csharp
public object StderrInput { get; }
```

- *Type:* object

---

##### `StdoutInput`<sup>Optional</sup> <a name="StdoutInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdoutInput"></a>

```csharp
public object StdoutInput { get; }
```

- *Type:* object

---

##### `BlackPaths`<sup>Required</sup> <a name="BlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPaths"></a>

```csharp
public string[] BlackPaths { get; }
```

- *Type:* string[]

---

##### `ContainerNameRegex`<sup>Required</sup> <a name="ContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegex"></a>

```csharp
public string ContainerNameRegex { get; }
```

- *Type:* string

---

##### `ExcludeEnvs`<sup>Required</sup> <a name="ExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeEnvs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExcludeK8SLabels`<sup>Required</sup> <a name="ExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeK8SLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExcludeLabels`<sup>Required</sup> <a name="ExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExcludeLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeEnvs`<sup>Required</sup> <a name="IncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeEnvs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeK8SLabels`<sup>Required</sup> <a name="IncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeK8SLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeLabels`<sup>Required</sup> <a name="IncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LogEnvs`<sup>Required</sup> <a name="LogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogEnvs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LogK8S`<sup>Required</sup> <a name="LogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8S"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogK8S { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LogLabels`<sup>Required</sup> <a name="LogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LogLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameSpaceRegex`<sup>Required</sup> <a name="NameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegex"></a>

```csharp
public string NameSpaceRegex { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathType"></a>

```csharp
public string PathType { get; }
```

- *Type:* string

---

##### `PodNameRegex`<sup>Required</sup> <a name="PodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegex"></a>

```csharp
public string PodNameRegex { get; }
```

- *Type:* string

---

##### `Stderr`<sup>Required</sup> <a name="Stderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderr"></a>

```csharp
public object Stderr { get; }
```

- *Type:* object

---

##### `Stdout`<sup>Required</sup> <a name="Stdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdout"></a>

```csharp
public object Stdout { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.internalValue"></a>

```csharp
public LtsCceAccessV3AccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---


### LtsCceAccessV3AccessConfigSingleLogFormatOutputReference <a name="LtsCceAccessV3AccessConfigSingleLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCceAccessV3AccessConfigSingleLogFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue"></a>

```csharp
public LtsCceAccessV3AccessConfigSingleLogFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---



