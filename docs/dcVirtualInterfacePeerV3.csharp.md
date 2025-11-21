# `dcVirtualInterfacePeerV3` Submodule <a name="`dcVirtualInterfacePeerV3` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfacePeerV3 <a name="DcVirtualInterfacePeerV3" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3 opentelekomcloud_dc_virtual_interface_peer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcVirtualInterfacePeerV3(Construct Scope, string Id, DcVirtualInterfacePeerV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config">DcVirtualInterfacePeerV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config">DcVirtualInterfacePeerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpAsn">ResetBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpMd5">ResetBgpMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetRouteMode">ResetRouteMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBgpAsn` <a name="ResetBgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpAsn"></a>

```csharp
private void ResetBgpAsn()
```

##### `ResetBgpMd5` <a name="ResetBgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetBgpMd5"></a>

```csharp
private void ResetBgpMd5()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRouteMode` <a name="ResetRouteMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.resetRouteMode"></a>

```csharp
private void ResetRouteMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualInterfacePeerV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualInterfacePeerV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualInterfacePeerV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcVirtualInterfacePeerV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DcVirtualInterfacePeerV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualInterfacePeerV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualInterfacePeerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfacePeerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpRouteLimit">BgpRouteLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpStatus">BgpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableBfd">EnableBfd</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableNqa">EnableNqa</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.receiveRouteNum">ReceiveRouteNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.serviceEpGroup">ServiceEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsnInput">BgpAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5Input">BgpMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIpInput">LocalGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroupInput">RemoteEpGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIpInput">RemoteGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeModeInput">RouteModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifIdInput">VifIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsn">BgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5">BgpMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIp">LocalGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroup">RemoteEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIp">RemoteGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeMode">RouteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifId">VifId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BgpRouteLimit`<sup>Required</sup> <a name="BgpRouteLimit" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpRouteLimit"></a>

```csharp
public double BgpRouteLimit { get; }
```

- *Type:* double

---

##### `BgpStatus`<sup>Required</sup> <a name="BgpStatus" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpStatus"></a>

```csharp
public string BgpStatus { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `EnableBfd`<sup>Required</sup> <a name="EnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableBfd"></a>

```csharp
public IResolvable EnableBfd { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableNqa`<sup>Required</sup> <a name="EnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.enableNqa"></a>

```csharp
public IResolvable EnableNqa { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReceiveRouteNum`<sup>Required</sup> <a name="ReceiveRouteNum" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.receiveRouteNum"></a>

```csharp
public double ReceiveRouteNum { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceEpGroup`<sup>Required</sup> <a name="ServiceEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.serviceEpGroup"></a>

```csharp
public string[] ServiceEpGroup { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `BgpAsnInput`<sup>Optional</sup> <a name="BgpAsnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsnInput"></a>

```csharp
public double BgpAsnInput { get; }
```

- *Type:* double

---

##### `BgpMd5Input`<sup>Optional</sup> <a name="BgpMd5Input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5Input"></a>

```csharp
public string BgpMd5Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalGatewayIpInput`<sup>Optional</sup> <a name="LocalGatewayIpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIpInput"></a>

```csharp
public string LocalGatewayIpInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoteEpGroupInput`<sup>Optional</sup> <a name="RemoteEpGroupInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroupInput"></a>

```csharp
public string[] RemoteEpGroupInput { get; }
```

- *Type:* string[]

---

##### `RemoteGatewayIpInput`<sup>Optional</sup> <a name="RemoteGatewayIpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIpInput"></a>

```csharp
public string RemoteGatewayIpInput { get; }
```

- *Type:* string

---

##### `RouteModeInput`<sup>Optional</sup> <a name="RouteModeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeModeInput"></a>

```csharp
public string RouteModeInput { get; }
```

- *Type:* string

---

##### `VifIdInput`<sup>Optional</sup> <a name="VifIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifIdInput"></a>

```csharp
public string VifIdInput { get; }
```

- *Type:* string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpAsn"></a>

```csharp
public double BgpAsn { get; }
```

- *Type:* double

---

##### `BgpMd5`<sup>Required</sup> <a name="BgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.bgpMd5"></a>

```csharp
public string BgpMd5 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalGatewayIp`<sup>Required</sup> <a name="LocalGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.localGatewayIp"></a>

```csharp
public string LocalGatewayIp { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteEpGroup`<sup>Required</sup> <a name="RemoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteEpGroup"></a>

```csharp
public string[] RemoteEpGroup { get; }
```

- *Type:* string[]

---

##### `RemoteGatewayIp`<sup>Required</sup> <a name="RemoteGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.remoteGatewayIp"></a>

```csharp
public string RemoteGatewayIp { get; }
```

- *Type:* string

---

##### `RouteMode`<sup>Required</sup> <a name="RouteMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.routeMode"></a>

```csharp
public string RouteMode { get; }
```

- *Type:* string

---

##### `VifId`<sup>Required</sup> <a name="VifId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.vifId"></a>

```csharp
public string VifId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfacePeerV3Config <a name="DcVirtualInterfacePeerV3Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcVirtualInterfacePeerV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AddressFamily,
    string LocalGatewayIp,
    string Name,
    string[] RemoteEpGroup,
    string RemoteGatewayIp,
    string VifId,
    double BgpAsn = null,
    string BgpMd5 = null,
    string Description = null,
    string Id = null,
    string RouteMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.addressFamily">AddressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.localGatewayIp">LocalGatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteEpGroup">RemoteEpGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteGatewayIp">RemoteGatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.vifId">VifId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpAsn">BgpAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpMd5">BgpMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.routeMode">RouteMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#address_family DcVirtualInterfacePeerV3#address_family}.

---

##### `LocalGatewayIp`<sup>Required</sup> <a name="LocalGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.localGatewayIp"></a>

```csharp
public string LocalGatewayIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#local_gateway_ip DcVirtualInterfacePeerV3#local_gateway_ip}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#name DcVirtualInterfacePeerV3#name}.

---

##### `RemoteEpGroup`<sup>Required</sup> <a name="RemoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteEpGroup"></a>

```csharp
public string[] RemoteEpGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#remote_ep_group DcVirtualInterfacePeerV3#remote_ep_group}.

---

##### `RemoteGatewayIp`<sup>Required</sup> <a name="RemoteGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.remoteGatewayIp"></a>

```csharp
public string RemoteGatewayIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#remote_gateway_ip DcVirtualInterfacePeerV3#remote_gateway_ip}.

---

##### `VifId`<sup>Required</sup> <a name="VifId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.vifId"></a>

```csharp
public string VifId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#vif_id DcVirtualInterfacePeerV3#vif_id}.

---

##### `BgpAsn`<sup>Optional</sup> <a name="BgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpAsn"></a>

```csharp
public double BgpAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#bgp_asn DcVirtualInterfacePeerV3#bgp_asn}.

---

##### `BgpMd5`<sup>Optional</sup> <a name="BgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.bgpMd5"></a>

```csharp
public string BgpMd5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#bgp_md5 DcVirtualInterfacePeerV3#bgp_md5}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#description DcVirtualInterfacePeerV3#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#id DcVirtualInterfacePeerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RouteMode`<sup>Optional</sup> <a name="RouteMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfacePeerV3.DcVirtualInterfacePeerV3Config.property.routeMode"></a>

```csharp
public string RouteMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dc_virtual_interface_peer_v3#route_mode DcVirtualInterfacePeerV3#route_mode}.

---



