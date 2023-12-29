# `dcVirtualGatewayV2` Submodule <a name="`dcVirtualGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualGatewayV2 <a name="DcVirtualGatewayV2" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2 opentelekomcloud_dc_virtual_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcVirtualGatewayV2(Construct Scope, string Id, DcVirtualGatewayV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config">DcVirtualGatewayV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config">DcVirtualGatewayV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId">ResetRedundantDeviceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn"></a>

```csharp
private void ResetAsn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId"></a>

```csharp
private void ResetDeviceId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRedundantDeviceId` <a name="ResetRedundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId"></a>

```csharp
private void ResetRedundantDeviceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualGatewayV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualGatewayV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualGatewayV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualGatewayV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualGatewayV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput">AsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIdInput">LocalEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput">RedundantDeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId">LocalEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId">RedundantDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput"></a>

```csharp
public double AsnInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalEpGroupIdInput`<sup>Optional</sup> <a name="LocalEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIdInput"></a>

```csharp
public string LocalEpGroupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RedundantDeviceIdInput`<sup>Optional</sup> <a name="RedundantDeviceIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput"></a>

```csharp
public string RedundantDeviceIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalEpGroupId`<sup>Required</sup> <a name="LocalEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId"></a>

```csharp
public string LocalEpGroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RedundantDeviceId`<sup>Required</sup> <a name="RedundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId"></a>

```csharp
public string RedundantDeviceId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualGatewayV2Config <a name="DcVirtualGatewayV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcVirtualGatewayV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LocalEpGroupId,
    string Name,
    string VpcId,
    double Asn = null,
    string Description = null,
    string DeviceId = null,
    string Id = null,
    string ProjectId = null,
    string RedundantDeviceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupId">LocalEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#local_ep_group_id DcVirtualGatewayV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn">Asn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId">DeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId">RedundantDeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LocalEpGroupId`<sup>Required</sup> <a name="LocalEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupId"></a>

```csharp
public string LocalEpGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#local_ep_group_id DcVirtualGatewayV2#local_ep_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}.

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn"></a>

```csharp
public double Asn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}.

---

##### `RedundantDeviceId`<sup>Optional</sup> <a name="RedundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId"></a>

```csharp
public string RedundantDeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}.

---



