# `identityAclV3` Submodule <a name="`identityAclV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityAclV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityAclV3 <a name="IdentityAclV3" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3 opentelekomcloud_identity_acl_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3(Construct Scope, string Id, IdentityAclV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config">IdentityAclV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config">IdentityAclV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.putIpCidrs">PutIpCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.putIpRanges">PutIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetIpCidrs">ResetIpCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetIpRanges">ResetIpRanges</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpCidrs` <a name="PutIpCidrs" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.putIpCidrs"></a>

```csharp
private void PutIpCidrs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.putIpCidrs.parameter.value"></a>

- *Type:* object

---

##### `PutIpRanges` <a name="PutIpRanges" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.putIpRanges"></a>

```csharp
private void PutIpRanges(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.putIpRanges.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpCidrs` <a name="ResetIpCidrs" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetIpCidrs"></a>

```csharp
private void ResetIpCidrs()
```

##### `ResetIpRanges` <a name="ResetIpRanges" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.resetIpRanges"></a>

```csharp
private void ResetIpRanges()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityAclV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityAclV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityAclV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityAclV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityAclV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityAclV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityAclV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityAclV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityAclV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipCidrs">IpCidrs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList">IdentityAclV3IpCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipRanges">IpRanges</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList">IdentityAclV3IpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipCidrsInput">IpCidrsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipRangesInput">IpRangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpCidrs`<sup>Required</sup> <a name="IpCidrs" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipCidrs"></a>

```csharp
public IdentityAclV3IpCidrsList IpCidrs { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList">IdentityAclV3IpCidrsList</a>

---

##### `IpRanges`<sup>Required</sup> <a name="IpRanges" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipRanges"></a>

```csharp
public IdentityAclV3IpRangesList IpRanges { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList">IdentityAclV3IpRangesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrsInput`<sup>Optional</sup> <a name="IpCidrsInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipCidrsInput"></a>

```csharp
public object IpCidrsInput { get; }
```

- *Type:* object

---

##### `IpRangesInput`<sup>Optional</sup> <a name="IpRangesInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.ipRangesInput"></a>

```csharp
public object IpRangesInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityAclV3Config <a name="IdentityAclV3Config" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Type,
    string Id = null,
    object IpCidrs = null,
    object IpRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#type IdentityAclV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#id IdentityAclV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.ipCidrs">IpCidrs</a></code> | <code>object</code> | ip_cidrs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.ipRanges">IpRanges</a></code> | <code>object</code> | ip_ranges block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#type IdentityAclV3#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#id IdentityAclV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCidrs`<sup>Optional</sup> <a name="IpCidrs" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.ipCidrs"></a>

```csharp
public object IpCidrs { get; set; }
```

- *Type:* object

ip_cidrs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#ip_cidrs IdentityAclV3#ip_cidrs}

---

##### `IpRanges`<sup>Optional</sup> <a name="IpRanges" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3Config.property.ipRanges"></a>

```csharp
public object IpRanges { get; set; }
```

- *Type:* object

ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#ip_ranges IdentityAclV3#ip_ranges}

---

### IdentityAclV3IpCidrs <a name="IdentityAclV3IpCidrs" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3IpCidrs {
    string Cidr,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrs.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#cidr IdentityAclV3#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#description IdentityAclV3#description}. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrs.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#cidr IdentityAclV3#cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#description IdentityAclV3#description}.

---

### IdentityAclV3IpRanges <a name="IdentityAclV3IpRanges" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3IpRanges {
    string Range,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRanges.property.range">Range</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#range IdentityAclV3#range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRanges.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#description IdentityAclV3#description}. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRanges.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#range IdentityAclV3#range}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRanges.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/identity_acl_v3#description IdentityAclV3#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityAclV3IpCidrsList <a name="IdentityAclV3IpCidrsList" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3IpCidrsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.get"></a>

```csharp
private IdentityAclV3IpCidrsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityAclV3IpCidrsOutputReference <a name="IdentityAclV3IpCidrsOutputReference" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3IpCidrsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpCidrsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityAclV3IpRangesList <a name="IdentityAclV3IpRangesList" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3IpRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.get"></a>

```csharp
private IdentityAclV3IpRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityAclV3IpRangesOutputReference <a name="IdentityAclV3IpRangesOutputReference" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityAclV3IpRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityAclV3.IdentityAclV3IpRangesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



