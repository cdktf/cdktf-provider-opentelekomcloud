# `ltsCrossAccountAccessV2` Submodule <a name="`ltsCrossAccountAccessV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCrossAccountAccessV2 <a name="LtsCrossAccountAccessV2" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2 opentelekomcloud_lts_cross_account_access_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCrossAccountAccessV2(Construct Scope, string Id, LtsCrossAccountAccessV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config">LtsCrossAccountAccessV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config">LtsCrossAccountAccessV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCrossAccountAccessV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCrossAccountAccessV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCrossAccountAccessV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LtsCrossAccountAccessV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LtsCrossAccountAccessV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LtsCrossAccountAccessV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LtsCrossAccountAccessV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType">AccessConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput">AgencyDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput">AgencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput">AgencyProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput">LogAgencyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput">LogAgencyGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput">LogAgencyStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput">LogAgencyStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput">LogStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName">AgencyDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName">AgencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId">AgencyProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId">LogAgencyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName">LogAgencyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId">LogAgencyStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName">LogAgencyStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName">LogStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccessConfigType`<sup>Required</sup> <a name="AccessConfigType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType"></a>

```csharp
public string AccessConfigType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `AgencyDomainNameInput`<sup>Optional</sup> <a name="AgencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput"></a>

```csharp
public string AgencyDomainNameInput { get; }
```

- *Type:* string

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput"></a>

```csharp
public string AgencyNameInput { get; }
```

- *Type:* string

---

##### `AgencyProjectIdInput`<sup>Optional</sup> <a name="AgencyProjectIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput"></a>

```csharp
public string AgencyProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAgencyGroupIdInput`<sup>Optional</sup> <a name="LogAgencyGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput"></a>

```csharp
public string LogAgencyGroupIdInput { get; }
```

- *Type:* string

---

##### `LogAgencyGroupNameInput`<sup>Optional</sup> <a name="LogAgencyGroupNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput"></a>

```csharp
public string LogAgencyGroupNameInput { get; }
```

- *Type:* string

---

##### `LogAgencyStreamIdInput`<sup>Optional</sup> <a name="LogAgencyStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput"></a>

```csharp
public string LogAgencyStreamIdInput { get; }
```

- *Type:* string

---

##### `LogAgencyStreamNameInput`<sup>Optional</sup> <a name="LogAgencyStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput"></a>

```csharp
public string LogAgencyStreamNameInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput"></a>

```csharp
public string LogStreamIdInput { get; }
```

- *Type:* string

---

##### `LogStreamNameInput`<sup>Optional</sup> <a name="LogStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput"></a>

```csharp
public string LogStreamNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgencyDomainName`<sup>Required</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName"></a>

```csharp
public string AgencyDomainName { get; }
```

- *Type:* string

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName"></a>

```csharp
public string AgencyName { get; }
```

- *Type:* string

---

##### `AgencyProjectId`<sup>Required</sup> <a name="AgencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId"></a>

```csharp
public string AgencyProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAgencyGroupId`<sup>Required</sup> <a name="LogAgencyGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId"></a>

```csharp
public string LogAgencyGroupId { get; }
```

- *Type:* string

---

##### `LogAgencyGroupName`<sup>Required</sup> <a name="LogAgencyGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName"></a>

```csharp
public string LogAgencyGroupName { get; }
```

- *Type:* string

---

##### `LogAgencyStreamId`<sup>Required</sup> <a name="LogAgencyStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId"></a>

```csharp
public string LogAgencyStreamId { get; }
```

- *Type:* string

---

##### `LogAgencyStreamName`<sup>Required</sup> <a name="LogAgencyStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName"></a>

```csharp
public string LogAgencyStreamName { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName"></a>

```csharp
public string LogStreamName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCrossAccountAccessV2Config <a name="LtsCrossAccountAccessV2Config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LtsCrossAccountAccessV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgencyDomainName,
    string AgencyName,
    string AgencyProjectId,
    string LogAgencyGroupId,
    string LogAgencyGroupName,
    string LogAgencyStreamId,
    string LogAgencyStreamName,
    string LogGroupId,
    string LogGroupName,
    string LogStreamId,
    string LogStreamName,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName">AgencyDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName">AgencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId">AgencyProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId">LogAgencyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName">LogAgencyGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId">LogAgencyStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName">LogAgencyStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId">LogStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName">LogStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgencyDomainName`<sup>Required</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName"></a>

```csharp
public string AgencyDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}.

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName"></a>

```csharp
public string AgencyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}.

---

##### `AgencyProjectId`<sup>Required</sup> <a name="AgencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId"></a>

```csharp
public string AgencyProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}.

---

##### `LogAgencyGroupId`<sup>Required</sup> <a name="LogAgencyGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId"></a>

```csharp
public string LogAgencyGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}.

---

##### `LogAgencyGroupName`<sup>Required</sup> <a name="LogAgencyGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName"></a>

```csharp
public string LogAgencyGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}.

---

##### `LogAgencyStreamId`<sup>Required</sup> <a name="LogAgencyStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId"></a>

```csharp
public string LogAgencyStreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}.

---

##### `LogAgencyStreamName`<sup>Required</sup> <a name="LogAgencyStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName"></a>

```csharp
public string LogAgencyStreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}.

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}.

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId"></a>

```csharp
public string LogStreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}.

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName"></a>

```csharp
public string LogStreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}.

---



