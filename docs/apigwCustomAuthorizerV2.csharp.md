# `apigwCustomAuthorizerV2` Submodule <a name="`apigwCustomAuthorizerV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwCustomAuthorizerV2 <a name="ApigwCustomAuthorizerV2" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2 opentelekomcloud_apigw_custom_authorizer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwCustomAuthorizerV2(Construct Scope, string Id, ApigwCustomAuthorizerV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config">ApigwCustomAuthorizerV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config">ApigwCustomAuthorizerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend">ResetIsBodySend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity"></a>

```csharp
private void PutIdentity(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetIsBodySend` <a name="ResetIsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend"></a>

```csharp
private void ResetIsBodySend()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData"></a>

```csharp
private void ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwCustomAuthorizerV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwCustomAuthorizerV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwCustomAuthorizerV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwCustomAuthorizerV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwCustomAuthorizerV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwCustomAuthorizerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigwCustomAuthorizerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput">FunctionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput">IdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput">IsBodySendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn">FunctionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend">IsBodySend</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData">UserData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity"></a>

```csharp
public ApigwCustomAuthorizerV2IdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput"></a>

```csharp
public string FunctionUrnInput { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput"></a>

```csharp
public object IdentityInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsBodySendInput`<sup>Optional</sup> <a name="IsBodySendInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput"></a>

```csharp
public object IsBodySendInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn"></a>

```csharp
public string FunctionUrn { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBodySend`<sup>Required</sup> <a name="IsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend"></a>

```csharp
public object IsBodySend { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwCustomAuthorizerV2Config <a name="ApigwCustomAuthorizerV2Config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwCustomAuthorizerV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FunctionUrn,
    string GatewayId,
    string Name,
    string Id = null,
    object Identity = null,
    object IsBodySend = null,
    double Ttl = null,
    string Type = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn">FunctionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity">Identity</a></code> | <code>object</code> | identity block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend">IsBodySend</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn"></a>

```csharp
public string FunctionUrn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}.

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity"></a>

```csharp
public object Identity { get; set; }
```

- *Type:* object

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#identity ApigwCustomAuthorizerV2#identity}

---

##### `IsBodySend`<sup>Optional</sup> <a name="IsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend"></a>

```csharp
public object IsBodySend { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}.

---

### ApigwCustomAuthorizerV2Identity <a name="ApigwCustomAuthorizerV2Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwCustomAuthorizerV2Identity {
    string Location,
    string Name,
    string Validation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation">Validation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation"></a>

```csharp
public string Validation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwCustomAuthorizerV2IdentityList <a name="ApigwCustomAuthorizerV2IdentityList" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwCustomAuthorizerV2IdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get"></a>

```csharp
private ApigwCustomAuthorizerV2IdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwCustomAuthorizerV2IdentityOutputReference <a name="ApigwCustomAuthorizerV2IdentityOutputReference" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwCustomAuthorizerV2IdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidation` <a name="ResetValidation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation"></a>

```csharp
private void ResetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput">ValidationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation">Validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput"></a>

```csharp
public string ValidationInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation"></a>

```csharp
public string Validation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



