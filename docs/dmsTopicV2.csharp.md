# `dmsTopicV2` Submodule <a name="`dmsTopicV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsTopicV2 <a name="DmsTopicV2" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2 opentelekomcloud_dms_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsTopicV2(Construct Scope, string Id, DmsTopicV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config">DmsTopicV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config">DmsTopicV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetMaxPartitions">ResetMaxPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRemainPartitions">ResetRemainPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetReplication">ResetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRetentionTime">ResetRetentionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncMessageFlush">ResetSyncMessageFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncReplication">ResetSyncReplication</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxPartitions` <a name="ResetMaxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetMaxPartitions"></a>

```csharp
private void ResetMaxPartitions()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetRemainPartitions` <a name="ResetRemainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRemainPartitions"></a>

```csharp
private void ResetRemainPartitions()
```

##### `ResetReplication` <a name="ResetReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetReplication"></a>

```csharp
private void ResetReplication()
```

##### `ResetRetentionTime` <a name="ResetRetentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRetentionTime"></a>

```csharp
private void ResetRetentionTime()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetSyncMessageFlush` <a name="ResetSyncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncMessageFlush"></a>

```csharp
private void ResetSyncMessageFlush()
```

##### `ResetSyncReplication` <a name="ResetSyncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncReplication"></a>

```csharp
private void ResetSyncReplication()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsTopicV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsTopicV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsTopicV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsTopicV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DmsTopicV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DmsTopicV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsTopicV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DmsTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitionsInput">MaxPartitionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partitionInput">PartitionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitionsInput">RemainPartitionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replicationInput">ReplicationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTimeInput">RetentionTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlushInput">SyncMessageFlushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplicationInput">SyncReplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitions">MaxPartitions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitions">RemainPartitions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replication">Replication</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTime">RetentionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlush">SyncMessageFlush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplication">SyncReplication</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `MaxPartitionsInput`<sup>Optional</sup> <a name="MaxPartitionsInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitionsInput"></a>

```csharp
public double MaxPartitionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partitionInput"></a>

```csharp
public double PartitionInput { get; }
```

- *Type:* double

---

##### `RemainPartitionsInput`<sup>Optional</sup> <a name="RemainPartitionsInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitionsInput"></a>

```csharp
public double RemainPartitionsInput { get; }
```

- *Type:* double

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replicationInput"></a>

```csharp
public double ReplicationInput { get; }
```

- *Type:* double

---

##### `RetentionTimeInput`<sup>Optional</sup> <a name="RetentionTimeInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTimeInput"></a>

```csharp
public double RetentionTimeInput { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `SyncMessageFlushInput`<sup>Optional</sup> <a name="SyncMessageFlushInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlushInput"></a>

```csharp
public object SyncMessageFlushInput { get; }
```

- *Type:* object

---

##### `SyncReplicationInput`<sup>Optional</sup> <a name="SyncReplicationInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplicationInput"></a>

```csharp
public object SyncReplicationInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `MaxPartitions`<sup>Required</sup> <a name="MaxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitions"></a>

```csharp
public double MaxPartitions { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `RemainPartitions`<sup>Required</sup> <a name="RemainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitions"></a>

```csharp
public double RemainPartitions { get; }
```

- *Type:* double

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replication"></a>

```csharp
public double Replication { get; }
```

- *Type:* double

---

##### `RetentionTime`<sup>Required</sup> <a name="RetentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTime"></a>

```csharp
public double RetentionTime { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `SyncMessageFlush`<sup>Required</sup> <a name="SyncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlush"></a>

```csharp
public object SyncMessageFlush { get; }
```

- *Type:* object

---

##### `SyncReplication`<sup>Required</sup> <a name="SyncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplication"></a>

```csharp
public object SyncReplication { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsTopicV2Config <a name="DmsTopicV2Config" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DmsTopicV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Name,
    string Id = null,
    double MaxPartitions = null,
    double Partition = null,
    double RemainPartitions = null,
    double Replication = null,
    double RetentionTime = null,
    double Size = null,
    object SyncMessageFlush = null,
    object SyncReplication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#instance_id DmsTopicV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#name DmsTopicV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#id DmsTopicV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.maxPartitions">MaxPartitions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#max_partitions DmsTopicV2#max_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.partition">Partition</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#partition DmsTopicV2#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.remainPartitions">RemainPartitions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#remain_partitions DmsTopicV2#remain_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.replication">Replication</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#replication DmsTopicV2#replication}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.retentionTime">RetentionTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#retention_time DmsTopicV2#retention_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#size DmsTopicV2#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncMessageFlush">SyncMessageFlush</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_message_flush DmsTopicV2#sync_message_flush}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncReplication">SyncReplication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_replication DmsTopicV2#sync_replication}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#instance_id DmsTopicV2#instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#name DmsTopicV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#id DmsTopicV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxPartitions`<sup>Optional</sup> <a name="MaxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.maxPartitions"></a>

```csharp
public double MaxPartitions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#max_partitions DmsTopicV2#max_partitions}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.partition"></a>

```csharp
public double Partition { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#partition DmsTopicV2#partition}.

---

##### `RemainPartitions`<sup>Optional</sup> <a name="RemainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.remainPartitions"></a>

```csharp
public double RemainPartitions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#remain_partitions DmsTopicV2#remain_partitions}.

---

##### `Replication`<sup>Optional</sup> <a name="Replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.replication"></a>

```csharp
public double Replication { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#replication DmsTopicV2#replication}.

---

##### `RetentionTime`<sup>Optional</sup> <a name="RetentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.retentionTime"></a>

```csharp
public double RetentionTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#retention_time DmsTopicV2#retention_time}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#size DmsTopicV2#size}.

---

##### `SyncMessageFlush`<sup>Optional</sup> <a name="SyncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncMessageFlush"></a>

```csharp
public object SyncMessageFlush { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_message_flush DmsTopicV2#sync_message_flush}.

---

##### `SyncReplication`<sup>Optional</sup> <a name="SyncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncReplication"></a>

```csharp
public object SyncReplication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_replication DmsTopicV2#sync_replication}.

---



