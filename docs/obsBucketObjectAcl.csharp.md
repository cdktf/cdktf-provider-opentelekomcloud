# `obsBucketObjectAcl` Submodule <a name="`obsBucketObjectAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketObjectAcl <a name="ObsBucketObjectAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl opentelekomcloud_obs_bucket_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAcl(Construct Scope, string Id, ObsBucketObjectAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig">ObsBucketObjectAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig">ObsBucketObjectAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission">PutAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission">PutPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission">ResetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission">ResetPublicPermission</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountPermission` <a name="PutAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission"></a>

```csharp
private void PutAccountPermission(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission.parameter.value"></a>

- *Type:* object

---

##### `PutPublicPermission` <a name="PutPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission"></a>

```csharp
private void PutPublicPermission(ObsBucketObjectAclPublicPermission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `ResetAccountPermission` <a name="ResetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission"></a>

```csharp
private void ResetAccountPermission()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublicPermission` <a name="ResetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission"></a>

```csharp
private void ResetPublicPermission()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObjectAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObjectAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObjectAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketObjectAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucketObjectAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucketObjectAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketObjectAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission">AccountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission">OwnerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput">AccountPermissionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput">PublicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key">Key</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountPermission`<sup>Required</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission"></a>

```csharp
public ObsBucketObjectAclAccountPermissionList AccountPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a>

---

##### `OwnerPermission`<sup>Required</sup> <a name="OwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission"></a>

```csharp
public ObsBucketObjectAclOwnerPermissionList OwnerPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a>

---

##### `PublicPermission`<sup>Required</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission"></a>

```csharp
public ObsBucketObjectAclPublicPermissionOutputReference PublicPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `AccountPermissionInput`<sup>Optional</sup> <a name="AccountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput"></a>

```csharp
public object AccountPermissionInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PublicPermissionInput`<sup>Optional</sup> <a name="PublicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput"></a>

```csharp
public ObsBucketObjectAclPublicPermission PublicPermissionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketObjectAclAccountPermission <a name="ObsBucketObjectAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclAccountPermission {
    string AccountId,
    string[] AccessToAcl = null,
    string[] AccessToObject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject">AccessToObject</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}.

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `AccessToObject`<sup>Optional</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject"></a>

```csharp
public string[] AccessToObject { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

### ObsBucketObjectAclConfig <a name="ObsBucketObjectAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Key,
    object AccountPermission = null,
    string Id = null,
    ObsBucketObjectAclPublicPermission PublicPermission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission">AccountPermission</a></code> | <code>object</code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | public_permission block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}.

---

##### `AccountPermission`<sup>Optional</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission"></a>

```csharp
public object AccountPermission { get; set; }
```

- *Type:* object

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#account_permission ObsBucketObjectAcl#account_permission}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicPermission`<sup>Optional</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission"></a>

```csharp
public ObsBucketObjectAclPublicPermission PublicPermission { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#public_permission ObsBucketObjectAcl#public_permission}

---

### ObsBucketObjectAclOwnerPermission <a name="ObsBucketObjectAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclOwnerPermission {

};
```


### ObsBucketObjectAclPublicPermission <a name="ObsBucketObjectAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclPublicPermission {
    string[] AccessToAcl = null,
    string[] AccessToObject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject">AccessToObject</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `AccessToObject`<sup>Optional</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject"></a>

```csharp
public string[] AccessToObject { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketObjectAclAccountPermissionList <a name="ObsBucketObjectAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclAccountPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get"></a>

```csharp
private ObsBucketObjectAclAccountPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketObjectAclAccountPermissionOutputReference <a name="ObsBucketObjectAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclAccountPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject">ResetAccessToObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```csharp
private void ResetAccessToAcl()
```

##### `ResetAccessToObject` <a name="ResetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject"></a>

```csharp
private void ResetAccessToObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput">AccessToObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject">AccessToObject</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```csharp
public string[] AccessToAclInput { get; }
```

- *Type:* string[]

---

##### `AccessToObjectInput`<sup>Optional</sup> <a name="AccessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput"></a>

```csharp
public string[] AccessToObjectInput { get; }
```

- *Type:* string[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToObject`<sup>Required</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject"></a>

```csharp
public string[] AccessToObject { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObsBucketObjectAclOwnerPermissionList <a name="ObsBucketObjectAclOwnerPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclOwnerPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get"></a>

```csharp
private ObsBucketObjectAclOwnerPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ObsBucketObjectAclOwnerPermissionOutputReference <a name="ObsBucketObjectAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclOwnerPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject">AccessToObject</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToObject`<sup>Required</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject"></a>

```csharp
public string[] AccessToObject { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue"></a>

```csharp
public ObsBucketObjectAclOwnerPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a>

---


### ObsBucketObjectAclPublicPermissionOutputReference <a name="ObsBucketObjectAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketObjectAclPublicPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject">ResetAccessToObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```csharp
private void ResetAccessToAcl()
```

##### `ResetAccessToObject` <a name="ResetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject"></a>

```csharp
private void ResetAccessToObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput">AccessToObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject">AccessToObject</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```csharp
public string[] AccessToAclInput { get; }
```

- *Type:* string[]

---

##### `AccessToObjectInput`<sup>Optional</sup> <a name="AccessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput"></a>

```csharp
public string[] AccessToObjectInput { get; }
```

- *Type:* string[]

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToObject`<sup>Required</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject"></a>

```csharp
public string[] AccessToObject { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue"></a>

```csharp
public ObsBucketObjectAclPublicPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---



