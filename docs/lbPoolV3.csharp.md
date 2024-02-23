# `lbPoolV3` Submodule <a name="`lbPoolV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbPoolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbPoolV3 <a name="LbPoolV3" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3 opentelekomcloud_lb_pool_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbPoolV3(Construct Scope, string Id, LbPoolV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config">LbPoolV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config">LbPoolV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence">PutSessionPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetLoadbalancerId">ResetLoadbalancerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetMemberDeletionProtection">ResetMemberDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetSessionPersistence">ResetSessionPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSessionPersistence` <a name="PutSessionPersistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence"></a>

```csharp
private void PutSessionPersistence(LbPoolV3SessionPersistence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetListenerId"></a>

```csharp
private void ResetListenerId()
```

##### `ResetLoadbalancerId` <a name="ResetLoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetLoadbalancerId"></a>

```csharp
private void ResetLoadbalancerId()
```

##### `ResetMemberDeletionProtection` <a name="ResetMemberDeletionProtection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetMemberDeletionProtection"></a>

```csharp
private void ResetMemberDeletionProtection()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetSessionPersistence` <a name="ResetSessionPersistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetSessionPersistence"></a>

```csharp
private void ResetSessionPersistence()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbPoolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbPoolV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbPoolV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbPoolV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbPoolV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LbPoolV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbPoolV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbPoolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LbPoolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistence">SessionPersistence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference">LbPoolV3SessionPersistenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithmInput">LbAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerIdInput">ListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerIdInput">LoadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtectionInput">MemberDeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistenceInput">SessionPersistenceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithm">LbAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerId">LoadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtection">MemberDeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `SessionPersistence`<sup>Required</sup> <a name="SessionPersistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistence"></a>

```csharp
public LbPoolV3SessionPersistenceOutputReference SessionPersistence { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference">LbPoolV3SessionPersistenceOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbAlgorithmInput`<sup>Optional</sup> <a name="LbAlgorithmInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithmInput"></a>

```csharp
public string LbAlgorithmInput { get; }
```

- *Type:* string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerIdInput"></a>

```csharp
public string ListenerIdInput { get; }
```

- *Type:* string

---

##### `LoadbalancerIdInput`<sup>Optional</sup> <a name="LoadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerIdInput"></a>

```csharp
public string LoadbalancerIdInput { get; }
```

- *Type:* string

---

##### `MemberDeletionProtectionInput`<sup>Optional</sup> <a name="MemberDeletionProtectionInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtectionInput"></a>

```csharp
public object MemberDeletionProtectionInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SessionPersistenceInput`<sup>Optional</sup> <a name="SessionPersistenceInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistenceInput"></a>

```csharp
public LbPoolV3SessionPersistence SessionPersistenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LbAlgorithm`<sup>Required</sup> <a name="LbAlgorithm" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithm"></a>

```csharp
public string LbAlgorithm { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerId"></a>

```csharp
public string LoadbalancerId { get; }
```

- *Type:* string

---

##### `MemberDeletionProtection`<sup>Required</sup> <a name="MemberDeletionProtection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtection"></a>

```csharp
public object MemberDeletionProtection { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbPoolV3Config <a name="LbPoolV3Config" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbPoolV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LbAlgorithm,
    string Protocol,
    string Description = null,
    string Id = null,
    string ListenerId = null,
    string LoadbalancerId = null,
    object MemberDeletionProtection = null,
    string Name = null,
    string ProjectId = null,
    LbPoolV3SessionPersistence SessionPersistence = null,
    string Type = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lbAlgorithm">LbAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#lb_algorithm LbPoolV3#lb_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#protocol LbPoolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#description LbPoolV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#id LbPoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.listenerId">ListenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#listener_id LbPoolV3#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.loadbalancerId">LoadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#loadbalancer_id LbPoolV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.memberDeletionProtection">MemberDeletionProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#member_deletion_protection LbPoolV3#member_deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#name LbPoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#project_id LbPoolV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.sessionPersistence">SessionPersistence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | session_persistence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#type LbPoolV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#vpc_id LbPoolV3#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LbAlgorithm`<sup>Required</sup> <a name="LbAlgorithm" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lbAlgorithm"></a>

```csharp
public string LbAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#lb_algorithm LbPoolV3#lb_algorithm}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#protocol LbPoolV3#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#description LbPoolV3#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#id LbPoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.listenerId"></a>

```csharp
public string ListenerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#listener_id LbPoolV3#listener_id}.

---

##### `LoadbalancerId`<sup>Optional</sup> <a name="LoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.loadbalancerId"></a>

```csharp
public string LoadbalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#loadbalancer_id LbPoolV3#loadbalancer_id}.

---

##### `MemberDeletionProtection`<sup>Optional</sup> <a name="MemberDeletionProtection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.memberDeletionProtection"></a>

```csharp
public object MemberDeletionProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#member_deletion_protection LbPoolV3#member_deletion_protection}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#name LbPoolV3#name}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#project_id LbPoolV3#project_id}.

---

##### `SessionPersistence`<sup>Optional</sup> <a name="SessionPersistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.sessionPersistence"></a>

```csharp
public LbPoolV3SessionPersistence SessionPersistence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

session_persistence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#session_persistence LbPoolV3#session_persistence}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#type LbPoolV3#type}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#vpc_id LbPoolV3#vpc_id}.

---

### LbPoolV3SessionPersistence <a name="LbPoolV3SessionPersistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbPoolV3SessionPersistence {
    string Type,
    string CookieName = null,
    double PersistenceTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#type LbPoolV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#cookie_name LbPoolV3#cookie_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.persistenceTimeout">PersistenceTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#persistence_timeout LbPoolV3#persistence_timeout}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#type LbPoolV3#type}.

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#cookie_name LbPoolV3#cookie_name}.

---

##### `PersistenceTimeout`<sup>Optional</sup> <a name="PersistenceTimeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.persistenceTimeout"></a>

```csharp
public double PersistenceTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/lb_pool_v3#persistence_timeout LbPoolV3#persistence_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbPoolV3SessionPersistenceOutputReference <a name="LbPoolV3SessionPersistenceOutputReference" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbPoolV3SessionPersistenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetPersistenceTimeout">ResetPersistenceTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetCookieName"></a>

```csharp
private void ResetCookieName()
```

##### `ResetPersistenceTimeout` <a name="ResetPersistenceTimeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetPersistenceTimeout"></a>

```csharp
private void ResetPersistenceTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeoutInput">PersistenceTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeout">PersistenceTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `PersistenceTimeoutInput`<sup>Optional</sup> <a name="PersistenceTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeoutInput"></a>

```csharp
public double PersistenceTimeoutInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `PersistenceTimeout`<sup>Required</sup> <a name="PersistenceTimeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeout"></a>

```csharp
public double PersistenceTimeout { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.internalValue"></a>

```csharp
public LbPoolV3SessionPersistence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

---



