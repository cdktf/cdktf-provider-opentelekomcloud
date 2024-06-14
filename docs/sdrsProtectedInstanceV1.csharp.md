# `sdrsProtectedInstanceV1` Submodule <a name="`sdrsProtectedInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SdrsProtectedInstanceV1 <a name="SdrsProtectedInstanceV1" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1 opentelekomcloud_sdrs_protected_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new SdrsProtectedInstanceV1(Construct Scope, string Id, SdrsProtectedInstanceV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config">SdrsProtectedInstanceV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config">SdrsProtectedInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetEip">ResetDeleteTargetEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetServer">ResetDeleteTargetServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.putTimeouts"></a>

```csharp
private void PutTimeouts(SdrsProtectedInstanceV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a>

---

##### `ResetDeleteTargetEip` <a name="ResetDeleteTargetEip" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetEip"></a>

```csharp
private void ResetDeleteTargetEip()
```

##### `ResetDeleteTargetServer` <a name="ResetDeleteTargetServer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetServer"></a>

```csharp
private void ResetDeleteTargetServer()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SdrsProtectedInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SdrsProtectedInstanceV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SdrsProtectedInstanceV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SdrsProtectedInstanceV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SdrsProtectedInstanceV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SdrsProtectedInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SdrsProtectedInstanceV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SdrsProtectedInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SdrsProtectedInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.priorityStation">PriorityStation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference">SdrsProtectedInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEipInput">DeleteTargetEipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServerInput">DeleteTargetServerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEip">DeleteTargetEip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServer">DeleteTargetServer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `PriorityStation`<sup>Required</sup> <a name="PriorityStation" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.priorityStation"></a>

```csharp
public string PriorityStation { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeouts"></a>

```csharp
public SdrsProtectedInstanceV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference">SdrsProtectedInstanceV1TimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DeleteTargetEipInput`<sup>Optional</sup> <a name="DeleteTargetEipInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEipInput"></a>

```csharp
public object DeleteTargetEipInput { get; }
```

- *Type:* object

---

##### `DeleteTargetServerInput`<sup>Optional</sup> <a name="DeleteTargetServerInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServerInput"></a>

```csharp
public object DeleteTargetServerInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeleteTargetEip`<sup>Required</sup> <a name="DeleteTargetEip" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEip"></a>

```csharp
public object DeleteTargetEip { get; }
```

- *Type:* object

---

##### `DeleteTargetServer`<sup>Required</sup> <a name="DeleteTargetServer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServer"></a>

```csharp
public object DeleteTargetServer { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SdrsProtectedInstanceV1Config <a name="SdrsProtectedInstanceV1Config" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new SdrsProtectedInstanceV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupId,
    string Name,
    string ServerId,
    object DeleteTargetEip = null,
    object DeleteTargetServer = null,
    string Description = null,
    string Id = null,
    string IpAddress = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SdrsProtectedInstanceV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#group_id SdrsProtectedInstanceV1#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#name SdrsProtectedInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#server_id SdrsProtectedInstanceV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetEip">DeleteTargetEip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#delete_target_eip SdrsProtectedInstanceV1#delete_target_eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetServer">DeleteTargetServer</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#delete_target_server SdrsProtectedInstanceV1#delete_target_server}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#description SdrsProtectedInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#id SdrsProtectedInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#ip_address SdrsProtectedInstanceV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#subnet_id SdrsProtectedInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#tags SdrsProtectedInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#group_id SdrsProtectedInstanceV1#group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#name SdrsProtectedInstanceV1#name}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#server_id SdrsProtectedInstanceV1#server_id}.

---

##### `DeleteTargetEip`<sup>Optional</sup> <a name="DeleteTargetEip" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetEip"></a>

```csharp
public object DeleteTargetEip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#delete_target_eip SdrsProtectedInstanceV1#delete_target_eip}.

---

##### `DeleteTargetServer`<sup>Optional</sup> <a name="DeleteTargetServer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetServer"></a>

```csharp
public object DeleteTargetServer { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#delete_target_server SdrsProtectedInstanceV1#delete_target_server}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#description SdrsProtectedInstanceV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#id SdrsProtectedInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#ip_address SdrsProtectedInstanceV1#ip_address}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#subnet_id SdrsProtectedInstanceV1#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#tags SdrsProtectedInstanceV1#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.timeouts"></a>

```csharp
public SdrsProtectedInstanceV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#timeouts SdrsProtectedInstanceV1#timeouts}

---

### SdrsProtectedInstanceV1Timeouts <a name="SdrsProtectedInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new SdrsProtectedInstanceV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#create SdrsProtectedInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#delete SdrsProtectedInstanceV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#create SdrsProtectedInstanceV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/sdrs_protected_instance_v1#delete SdrsProtectedInstanceV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SdrsProtectedInstanceV1TimeoutsOutputReference <a name="SdrsProtectedInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new SdrsProtectedInstanceV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



