# `rdsReadReplicaV3` Submodule <a name="`rdsReadReplicaV3` Submodule" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsReadReplicaV3 <a name="RdsReadReplicaV3" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3 opentelekomcloud_rds_read_replica_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3(Construct Scope, string Id, RdsReadReplicaV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config">RdsReadReplicaV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config">RdsReadReplicaV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetPublicIps">ResetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetSslEnable">ResetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts"></a>

```csharp
private void PutTimeouts(RdsReadReplicaV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume"></a>

```csharp
private void PutVolume(RdsReadReplicaV3Volume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetPublicIps"></a>

```csharp
private void ResetPublicIps()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSslEnable` <a name="ResetSslEnable" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetSslEnable"></a>

```csharp
private void ResetSslEnable()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsReadReplicaV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsReadReplicaV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsReadReplicaV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsReadReplicaV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RdsReadReplicaV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RdsReadReplicaV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsReadReplicaV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsReadReplicaV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RdsReadReplicaV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.db">Db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList">RdsReadReplicaV3DbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.privateIps">PrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference">RdsReadReplicaV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference">RdsReadReplicaV3VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRefInput">FlavorRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIpsInput">PublicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfIdInput">ReplicaOfIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.sslEnableInput">SslEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRef">FlavorRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIps">PublicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfId">ReplicaOfId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.sslEnable">SslEnable</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.db"></a>

```csharp
public RdsReadReplicaV3DbList Db { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList">RdsReadReplicaV3DbList</a>

---

##### `PrivateIps`<sup>Required</sup> <a name="PrivateIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.privateIps"></a>

```csharp
public string[] PrivateIps { get; }
```

- *Type:* string[]

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeouts"></a>

```csharp
public RdsReadReplicaV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference">RdsReadReplicaV3TimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volume"></a>

```csharp
public RdsReadReplicaV3VolumeOutputReference Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference">RdsReadReplicaV3VolumeOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `FlavorRefInput`<sup>Optional</sup> <a name="FlavorRefInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRefInput"></a>

```csharp
public string FlavorRefInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIpsInput"></a>

```csharp
public string[] PublicIpsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicaOfIdInput`<sup>Optional</sup> <a name="ReplicaOfIdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfIdInput"></a>

```csharp
public string ReplicaOfIdInput { get; }
```

- *Type:* string

---

##### `SslEnableInput`<sup>Optional</sup> <a name="SslEnableInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.sslEnableInput"></a>

```csharp
public object SslEnableInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volumeInput"></a>

```csharp
public RdsReadReplicaV3Volume VolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `FlavorRef`<sup>Required</sup> <a name="FlavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRef"></a>

```csharp
public string FlavorRef { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIps"></a>

```csharp
public string[] PublicIps { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicaOfId`<sup>Required</sup> <a name="ReplicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfId"></a>

```csharp
public string ReplicaOfId { get; }
```

- *Type:* string

---

##### `SslEnable`<sup>Required</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.sslEnable"></a>

```csharp
public object SslEnable { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsReadReplicaV3Config <a name="RdsReadReplicaV3Config" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FlavorRef,
    string Name,
    string ReplicaOfId,
    RdsReadReplicaV3Volume Volume,
    string AvailabilityZone = null,
    string Id = null,
    string[] PublicIps = null,
    string Region = null,
    object SslEnable = null,
    RdsReadReplicaV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.flavorRef">FlavorRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.replicaOfId">ReplicaOfId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.publicIps">PublicIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.sslEnable">SslEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#ssl_enable RdsReadReplicaV3#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FlavorRef`<sup>Required</sup> <a name="FlavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.flavorRef"></a>

```csharp
public string FlavorRef { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}.

---

##### `ReplicaOfId`<sup>Required</sup> <a name="ReplicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.replicaOfId"></a>

```csharp
public string ReplicaOfId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.volume"></a>

```csharp
public RdsReadReplicaV3Volume Volume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#volume RdsReadReplicaV3#volume}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.publicIps"></a>

```csharp
public string[] PublicIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}.

---

##### `SslEnable`<sup>Optional</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.sslEnable"></a>

```csharp
public object SslEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#ssl_enable RdsReadReplicaV3#ssl_enable}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.timeouts"></a>

```csharp
public RdsReadReplicaV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#timeouts RdsReadReplicaV3#timeouts}

---

### RdsReadReplicaV3Db <a name="RdsReadReplicaV3Db" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3Db {

};
```


### RdsReadReplicaV3Timeouts <a name="RdsReadReplicaV3Timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3Timeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#create RdsReadReplicaV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#update RdsReadReplicaV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#create RdsReadReplicaV3#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#update RdsReadReplicaV3#update}.

---

### RdsReadReplicaV3Volume <a name="RdsReadReplicaV3Volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3Volume {
    string Type,
    string DiskEncryptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#type RdsReadReplicaV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.diskEncryptionId">DiskEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#type RdsReadReplicaV3#type}.

---

##### `DiskEncryptionId`<sup>Optional</sup> <a name="DiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.diskEncryptionId"></a>

```csharp
public string DiskEncryptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/rds_read_replica_v3#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsReadReplicaV3DbList <a name="RdsReadReplicaV3DbList" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3DbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get"></a>

```csharp
private RdsReadReplicaV3DbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RdsReadReplicaV3DbOutputReference <a name="RdsReadReplicaV3DbOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3DbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db">RdsReadReplicaV3Db</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.internalValue"></a>

```csharp
public RdsReadReplicaV3Db InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db">RdsReadReplicaV3Db</a>

---


### RdsReadReplicaV3TimeoutsOutputReference <a name="RdsReadReplicaV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RdsReadReplicaV3VolumeOutputReference <a name="RdsReadReplicaV3VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RdsReadReplicaV3VolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resetDiskEncryptionId">ResetDiskEncryptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionId` <a name="ResetDiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resetDiskEncryptionId"></a>

```csharp
private void ResetDiskEncryptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionIdInput">DiskEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionId">DiskEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `DiskEncryptionIdInput`<sup>Optional</sup> <a name="DiskEncryptionIdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionIdInput"></a>

```csharp
public string DiskEncryptionIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionId`<sup>Required</sup> <a name="DiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionId"></a>

```csharp
public string DiskEncryptionId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.internalValue"></a>

```csharp
public RdsReadReplicaV3Volume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---



