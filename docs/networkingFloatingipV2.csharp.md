# `networkingFloatingipV2` Submodule <a name="`networkingFloatingipV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingFloatingipV2 <a name="NetworkingFloatingipV2" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2 opentelekomcloud_networking_floatingip_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingFloatingipV2(Construct Scope, string Id, NetworkingFloatingipV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config">NetworkingFloatingipV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config">NetworkingFloatingipV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetFixedIp">ResetFixedIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetPool">ResetPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetPortId">ResetPortId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetValueSpecs">ResetValueSpecs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkingFloatingipV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts">NetworkingFloatingipV2Timeouts</a>

---

##### `ResetFixedIp` <a name="ResetFixedIp" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetFixedIp"></a>

```csharp
private void ResetFixedIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPool` <a name="ResetPool" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetPool"></a>

```csharp
private void ResetPool()
```

##### `ResetPortId` <a name="ResetPortId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetPortId"></a>

```csharp
private void ResetPortId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueSpecs` <a name="ResetValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.resetValueSpecs"></a>

```csharp
private void ResetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingFloatingipV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingFloatingipV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingFloatingipV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingFloatingipV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingFloatingipV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkingFloatingipV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingFloatingipV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingFloatingipV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingFloatingipV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference">NetworkingFloatingipV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.fixedIpInput">FixedIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.poolInput">PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.portIdInput">PortIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.valueSpecsInput">ValueSpecsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.fixedIp">FixedIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.pool">Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.portId">PortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.timeouts"></a>

```csharp
public NetworkingFloatingipV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference">NetworkingFloatingipV2TimeoutsOutputReference</a>

---

##### `FixedIpInput`<sup>Optional</sup> <a name="FixedIpInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.fixedIpInput"></a>

```csharp
public string FixedIpInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.poolInput"></a>

```csharp
public string PoolInput { get; }
```

- *Type:* string

---

##### `PortIdInput`<sup>Optional</sup> <a name="PortIdInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.portIdInput"></a>

```csharp
public string PortIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueSpecsInput`<sup>Optional</sup> <a name="ValueSpecsInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.valueSpecsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedIp`<sup>Required</sup> <a name="FixedIp" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.fixedIp"></a>

```csharp
public string FixedIp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.pool"></a>

```csharp
public string Pool { get; }
```

- *Type:* string

---

##### `PortId`<sup>Required</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.portId"></a>

```csharp
public string PortId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValueSpecs`<sup>Required</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingFloatingipV2Config <a name="NetworkingFloatingipV2Config" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingFloatingipV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FixedIp = null,
    string Id = null,
    string Pool = null,
    string PortId = null,
    string Region = null,
    string TenantId = null,
    NetworkingFloatingipV2Timeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> ValueSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.fixedIp">FixedIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#fixed_ip NetworkingFloatingipV2#fixed_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#id NetworkingFloatingipV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.pool">Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#pool NetworkingFloatingipV2#pool}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.portId">PortId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#port_id NetworkingFloatingipV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#region NetworkingFloatingipV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#tenant_id NetworkingFloatingipV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts">NetworkingFloatingipV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#value_specs NetworkingFloatingipV2#value_specs}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FixedIp`<sup>Optional</sup> <a name="FixedIp" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.fixedIp"></a>

```csharp
public string FixedIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#fixed_ip NetworkingFloatingipV2#fixed_ip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#id NetworkingFloatingipV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pool`<sup>Optional</sup> <a name="Pool" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.pool"></a>

```csharp
public string Pool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#pool NetworkingFloatingipV2#pool}.

---

##### `PortId`<sup>Optional</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.portId"></a>

```csharp
public string PortId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#port_id NetworkingFloatingipV2#port_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#region NetworkingFloatingipV2#region}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#tenant_id NetworkingFloatingipV2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.timeouts"></a>

```csharp
public NetworkingFloatingipV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts">NetworkingFloatingipV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#timeouts NetworkingFloatingipV2#timeouts}

---

##### `ValueSpecs`<sup>Optional</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Config.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#value_specs NetworkingFloatingipV2#value_specs}.

---

### NetworkingFloatingipV2Timeouts <a name="NetworkingFloatingipV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingFloatingipV2Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#create NetworkingFloatingipV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#delete NetworkingFloatingipV2#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#create NetworkingFloatingipV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/networking_floatingip_v2#delete NetworkingFloatingipV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingFloatingipV2TimeoutsOutputReference <a name="NetworkingFloatingipV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingFloatingipV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.networkingFloatingipV2.NetworkingFloatingipV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



