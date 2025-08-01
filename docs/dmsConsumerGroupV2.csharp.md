# `dmsConsumerGroupV2` Submodule <a name="`dmsConsumerGroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsConsumerGroupV2 <a name="DmsConsumerGroupV2" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2 opentelekomcloud_dms_consumer_group_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2(Construct Scope, string Id, DmsConsumerGroupV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config">DmsConsumerGroupV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config">DmsConsumerGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsConsumerGroupV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsConsumerGroupV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsConsumerGroupV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsConsumerGroupV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsConsumerGroupV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsConsumerGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DmsConsumerGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy">AssignmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId">CoordinatorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets">GroupMessageOffsets</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members">Members</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssignmentStrategy`<sup>Required</sup> <a name="AssignmentStrategy" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy"></a>

```csharp
public string AssignmentStrategy { get; }
```

- *Type:* string

---

##### `CoordinatorId`<sup>Required</sup> <a name="CoordinatorId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId"></a>

```csharp
public double CoordinatorId { get; }
```

- *Type:* double

---

##### `GroupMessageOffsets`<sup>Required</sup> <a name="GroupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets"></a>

```csharp
public DmsConsumerGroupV2GroupMessageOffsetsList GroupMessageOffsets { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a>

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members"></a>

```csharp
public DmsConsumerGroupV2MembersList Members { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsConsumerGroupV2Config <a name="DmsConsumerGroupV2Config" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupName,
    string InstanceId,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DmsConsumerGroupV2GroupMessageOffsets <a name="DmsConsumerGroupV2GroupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2GroupMessageOffsets {

};
```


### DmsConsumerGroupV2Members <a name="DmsConsumerGroupV2Members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2Members {

};
```


### DmsConsumerGroupV2MembersAssignments <a name="DmsConsumerGroupV2MembersAssignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2MembersAssignments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DmsConsumerGroupV2GroupMessageOffsetsList <a name="DmsConsumerGroupV2GroupMessageOffsetsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2GroupMessageOffsetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get"></a>

```csharp
private DmsConsumerGroupV2GroupMessageOffsetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DmsConsumerGroupV2GroupMessageOffsetsOutputReference <a name="DmsConsumerGroupV2GroupMessageOffsetsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2GroupMessageOffsetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag">Lag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset">MessageCurrentOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset">MessageLogEndOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lag`<sup>Required</sup> <a name="Lag" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag"></a>

```csharp
public double Lag { get; }
```

- *Type:* double

---

##### `MessageCurrentOffset`<sup>Required</sup> <a name="MessageCurrentOffset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset"></a>

```csharp
public double MessageCurrentOffset { get; }
```

- *Type:* double

---

##### `MessageLogEndOffset`<sup>Required</sup> <a name="MessageLogEndOffset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset"></a>

```csharp
public double MessageLogEndOffset { get; }
```

- *Type:* double

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue"></a>

```csharp
public DmsConsumerGroupV2GroupMessageOffsets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a>

---


### DmsConsumerGroupV2MembersAssignmentsList <a name="DmsConsumerGroupV2MembersAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2MembersAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get"></a>

```csharp
private DmsConsumerGroupV2MembersAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DmsConsumerGroupV2MembersAssignmentsOutputReference <a name="DmsConsumerGroupV2MembersAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2MembersAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions">Partitions</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions"></a>

```csharp
public double[] Partitions { get; }
```

- *Type:* double[]

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DmsConsumerGroupV2MembersAssignments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a>

---


### DmsConsumerGroupV2MembersList <a name="DmsConsumerGroupV2MembersList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2MembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get"></a>

```csharp
private DmsConsumerGroupV2MembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DmsConsumerGroupV2MembersOutputReference <a name="DmsConsumerGroupV2MembersOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsConsumerGroupV2MembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments">Assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId">MemberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Assignments`<sup>Required</sup> <a name="Assignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments"></a>

```csharp
public DmsConsumerGroupV2MembersAssignmentsList Assignments { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId"></a>

```csharp
public string MemberId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue"></a>

```csharp
public DmsConsumerGroupV2Members InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a>

---



