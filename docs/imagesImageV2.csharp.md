# `imagesImageV2` Submodule <a name="`imagesImageV2` Submodule" id="@cdktf/provider-opentelekomcloud.imagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagesImageV2 <a name="ImagesImageV2" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2 opentelekomcloud_images_image_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ImagesImageV2(Construct Scope, string Id, ImagesImageV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config">ImagesImageV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config">ImagesImageV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageCachePath">ResetImageCachePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageSourceUrl">ResetImageSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetLocalFilePath">ResetLocalFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinDiskGb">ResetMinDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinRamMb">ResetMinRamMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetProtected">ResetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.putTimeouts"></a>

```csharp
private void PutTimeouts(ImagesImageV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageCachePath` <a name="ResetImageCachePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageCachePath"></a>

```csharp
private void ResetImageCachePath()
```

##### `ResetImageSourceUrl` <a name="ResetImageSourceUrl" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageSourceUrl"></a>

```csharp
private void ResetImageSourceUrl()
```

##### `ResetLocalFilePath` <a name="ResetLocalFilePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetLocalFilePath"></a>

```csharp
private void ResetLocalFilePath()
```

##### `ResetMinDiskGb` <a name="ResetMinDiskGb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinDiskGb"></a>

```csharp
private void ResetMinDiskGb()
```

##### `ResetMinRamMb` <a name="ResetMinRamMb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinRamMb"></a>

```csharp
private void ResetMinRamMb()
```

##### `ResetProtected` <a name="ResetProtected" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetProtected"></a>

```csharp
private void ResetProtected()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ImagesImageV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ImagesImageV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ImagesImageV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ImagesImageV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagesImageV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagesImageV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ImagesImageV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.sizeBytes">SizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.updateAt">UpdateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormatInput">ContainerFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormatInput">DiskFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePathInput">ImageCachePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput">ImageSourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePathInput">LocalFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGbInput">MinDiskGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMbInput">MinRamMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protectedInput">ProtectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormat">ContainerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormat">DiskFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePath">ImageCachePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrl">ImageSourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePath">LocalFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGb">MinDiskGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMb">MinRamMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protected">Protected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.sizeBytes"></a>

```csharp
public double SizeBytes { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeouts"></a>

```csharp
public ImagesImageV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a>

---

##### `UpdateAt`<sup>Required</sup> <a name="UpdateAt" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.updateAt"></a>

```csharp
public string UpdateAt { get; }
```

- *Type:* string

---

##### `ContainerFormatInput`<sup>Optional</sup> <a name="ContainerFormatInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormatInput"></a>

```csharp
public string ContainerFormatInput { get; }
```

- *Type:* string

---

##### `DiskFormatInput`<sup>Optional</sup> <a name="DiskFormatInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormatInput"></a>

```csharp
public string DiskFormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageCachePathInput`<sup>Optional</sup> <a name="ImageCachePathInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePathInput"></a>

```csharp
public string ImageCachePathInput { get; }
```

- *Type:* string

---

##### `ImageSourceUrlInput`<sup>Optional</sup> <a name="ImageSourceUrlInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput"></a>

```csharp
public string ImageSourceUrlInput { get; }
```

- *Type:* string

---

##### `LocalFilePathInput`<sup>Optional</sup> <a name="LocalFilePathInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePathInput"></a>

```csharp
public string LocalFilePathInput { get; }
```

- *Type:* string

---

##### `MinDiskGbInput`<sup>Optional</sup> <a name="MinDiskGbInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGbInput"></a>

```csharp
public double MinDiskGbInput { get; }
```

- *Type:* double

---

##### `MinRamMbInput`<sup>Optional</sup> <a name="MinRamMbInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMbInput"></a>

```csharp
public double MinRamMbInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedInput`<sup>Optional</sup> <a name="ProtectedInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protectedInput"></a>

```csharp
public object ProtectedInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `ContainerFormat`<sup>Required</sup> <a name="ContainerFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormat"></a>

```csharp
public string ContainerFormat { get; }
```

- *Type:* string

---

##### `DiskFormat`<sup>Required</sup> <a name="DiskFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormat"></a>

```csharp
public string DiskFormat { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageCachePath`<sup>Required</sup> <a name="ImageCachePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePath"></a>

```csharp
public string ImageCachePath { get; }
```

- *Type:* string

---

##### `ImageSourceUrl`<sup>Required</sup> <a name="ImageSourceUrl" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrl"></a>

```csharp
public string ImageSourceUrl { get; }
```

- *Type:* string

---

##### `LocalFilePath`<sup>Required</sup> <a name="LocalFilePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePath"></a>

```csharp
public string LocalFilePath { get; }
```

- *Type:* string

---

##### `MinDiskGb`<sup>Required</sup> <a name="MinDiskGb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGb"></a>

```csharp
public double MinDiskGb { get; }
```

- *Type:* double

---

##### `MinRamMb`<sup>Required</sup> <a name="MinRamMb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMb"></a>

```csharp
public double MinRamMb { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protected"></a>

```csharp
public object Protected { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagesImageV2Config <a name="ImagesImageV2Config" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ImagesImageV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerFormat,
    string DiskFormat,
    string Name,
    string Id = null,
    string ImageCachePath = null,
    string ImageSourceUrl = null,
    string LocalFilePath = null,
    double MinDiskGb = null,
    double MinRamMb = null,
    object Protected = null,
    string Region = null,
    string[] Tags = null,
    ImagesImageV2Timeouts Timeouts = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.containerFormat">ContainerFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.diskFormat">DiskFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#name ImagesImageV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#id ImagesImageV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageCachePath">ImageCachePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl">ImageSourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.localFilePath">LocalFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minDiskGb">MinDiskGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minRamMb">MinRamMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.protected">Protected</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#protected ImagesImageV2#protected}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#region ImagesImageV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#tags ImagesImageV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.visibility">Visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerFormat`<sup>Required</sup> <a name="ContainerFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.containerFormat"></a>

```csharp
public string ContainerFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}.

---

##### `DiskFormat`<sup>Required</sup> <a name="DiskFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.diskFormat"></a>

```csharp
public string DiskFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#name ImagesImageV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#id ImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageCachePath`<sup>Optional</sup> <a name="ImageCachePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageCachePath"></a>

```csharp
public string ImageCachePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}.

---

##### `ImageSourceUrl`<sup>Optional</sup> <a name="ImageSourceUrl" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl"></a>

```csharp
public string ImageSourceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}.

---

##### `LocalFilePath`<sup>Optional</sup> <a name="LocalFilePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.localFilePath"></a>

```csharp
public string LocalFilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}.

---

##### `MinDiskGb`<sup>Optional</sup> <a name="MinDiskGb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minDiskGb"></a>

```csharp
public double MinDiskGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}.

---

##### `MinRamMb`<sup>Optional</sup> <a name="MinRamMb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minRamMb"></a>

```csharp
public double MinRamMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}.

---

##### `Protected`<sup>Optional</sup> <a name="Protected" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.protected"></a>

```csharp
public object Protected { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#protected ImagesImageV2#protected}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#region ImagesImageV2#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#tags ImagesImageV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.timeouts"></a>

```csharp
public ImagesImageV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#timeouts ImagesImageV2#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}.

---

### ImagesImageV2Timeouts <a name="ImagesImageV2Timeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ImagesImageV2Timeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#create ImagesImageV2#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/images_image_v2#create ImagesImageV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagesImageV2TimeoutsOutputReference <a name="ImagesImageV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ImagesImageV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



