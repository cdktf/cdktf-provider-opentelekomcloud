# `obsBucketObject` Submodule <a name="`obsBucketObject` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketObject <a name="ObsBucketObject" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object opentelekomcloud_obs_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObject(Construct Scope, string Id, ObsBucketObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig">ObsBucketObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig">ObsBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObsBucketObject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucketObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryptionInput">EncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryption">Encryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryptionInput"></a>

```csharp
public object EncryptionInput { get; }
```

- *Type:* object

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryption"></a>

```csharp
public object Encryption { get; }
```

- *Type:* object

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketObjectConfig <a name="ObsBucketObjectConfig" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Key,
    string Acl = null,
    string Content = null,
    string ContentType = null,
    object Encryption = null,
    string Etag = null,
    string Id = null,
    string KmsKeyId = null,
    string Source = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#bucket ObsBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#key ObsBucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#acl ObsBucketObject#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#content ObsBucketObject#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#content_type ObsBucketObject#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.encryption">Encryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#encryption ObsBucketObject#encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#etag ObsBucketObject#etag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#id ObsBucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#kms_key_id ObsBucketObject#kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#source ObsBucketObject#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#storage_class ObsBucketObject#storage_class}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#bucket ObsBucketObject#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#key ObsBucketObject#key}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#acl ObsBucketObject#acl}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#content ObsBucketObject#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#content_type ObsBucketObject#content_type}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.encryption"></a>

```csharp
public object Encryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#encryption ObsBucketObject#encryption}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#etag ObsBucketObject#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#id ObsBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#kms_key_id ObsBucketObject#kms_key_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#source ObsBucketObject#source}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket_object#storage_class ObsBucketObject#storage_class}.

---



