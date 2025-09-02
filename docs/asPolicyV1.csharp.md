# `asPolicyV1` Submodule <a name="`asPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.asPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsPolicyV1 <a name="AsPolicyV1" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1 opentelekomcloud_as_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV1(Construct Scope, string Id, AsPolicyV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config">AsPolicyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config">AsPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction">PutScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy">PutScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetAlarmId">ResetAlarmId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetCoolDownTime">ResetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScalingPolicyAction">ResetScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScheduledPolicy">ResetScheduledPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScalingPolicyAction` <a name="PutScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction"></a>

```csharp
private void PutScalingPolicyAction(AsPolicyV1ScalingPolicyAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---

##### `PutScheduledPolicy` <a name="PutScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy"></a>

```csharp
private void PutScheduledPolicy(AsPolicyV1ScheduledPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---

##### `ResetAlarmId` <a name="ResetAlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetAlarmId"></a>

```csharp
private void ResetAlarmId()
```

##### `ResetCoolDownTime` <a name="ResetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetCoolDownTime"></a>

```csharp
private void ResetCoolDownTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScalingPolicyAction` <a name="ResetScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScalingPolicyAction"></a>

```csharp
private void ResetScalingPolicyAction()
```

##### `ResetScheduledPolicy` <a name="ResetScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScheduledPolicy"></a>

```csharp
private void ResetScheduledPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AsPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsPolicyV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AsPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyAction">ScalingPolicyAction</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference">AsPolicyV1ScalingPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicy">ScheduledPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference">AsPolicyV1ScheduledPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmIdInput">AlarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTimeInput">CoolDownTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupIdInput">ScalingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyActionInput">ScalingPolicyActionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyNameInput">ScalingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyTypeInput">ScalingPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicyInput">ScheduledPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmId">AlarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTime">CoolDownTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupId">ScalingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyName">ScalingPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyType">ScalingPolicyType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ScalingPolicyAction`<sup>Required</sup> <a name="ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyAction"></a>

```csharp
public AsPolicyV1ScalingPolicyActionOutputReference ScalingPolicyAction { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference">AsPolicyV1ScalingPolicyActionOutputReference</a>

---

##### `ScheduledPolicy`<sup>Required</sup> <a name="ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicy"></a>

```csharp
public AsPolicyV1ScheduledPolicyOutputReference ScheduledPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference">AsPolicyV1ScheduledPolicyOutputReference</a>

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmIdInput"></a>

```csharp
public string AlarmIdInput { get; }
```

- *Type:* string

---

##### `CoolDownTimeInput`<sup>Optional</sup> <a name="CoolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTimeInput"></a>

```csharp
public double CoolDownTimeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScalingGroupIdInput`<sup>Optional</sup> <a name="ScalingGroupIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupIdInput"></a>

```csharp
public string ScalingGroupIdInput { get; }
```

- *Type:* string

---

##### `ScalingPolicyActionInput`<sup>Optional</sup> <a name="ScalingPolicyActionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyActionInput"></a>

```csharp
public AsPolicyV1ScalingPolicyAction ScalingPolicyActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---

##### `ScalingPolicyNameInput`<sup>Optional</sup> <a name="ScalingPolicyNameInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyNameInput"></a>

```csharp
public string ScalingPolicyNameInput { get; }
```

- *Type:* string

---

##### `ScalingPolicyTypeInput`<sup>Optional</sup> <a name="ScalingPolicyTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyTypeInput"></a>

```csharp
public string ScalingPolicyTypeInput { get; }
```

- *Type:* string

---

##### `ScheduledPolicyInput`<sup>Optional</sup> <a name="ScheduledPolicyInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicyInput"></a>

```csharp
public AsPolicyV1ScheduledPolicy ScheduledPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmId"></a>

```csharp
public string AlarmId { get; }
```

- *Type:* string

---

##### `CoolDownTime`<sup>Required</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTime"></a>

```csharp
public double CoolDownTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupId"></a>

```csharp
public string ScalingGroupId { get; }
```

- *Type:* string

---

##### `ScalingPolicyName`<sup>Required</sup> <a name="ScalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyName"></a>

```csharp
public string ScalingPolicyName { get; }
```

- *Type:* string

---

##### `ScalingPolicyType`<sup>Required</sup> <a name="ScalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyType"></a>

```csharp
public string ScalingPolicyType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsPolicyV1Config <a name="AsPolicyV1Config" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScalingGroupId,
    string ScalingPolicyName,
    string ScalingPolicyType,
    string AlarmId = null,
    double CoolDownTime = null,
    string Id = null,
    string Region = null,
    AsPolicyV1ScalingPolicyAction ScalingPolicyAction = null,
    AsPolicyV1ScheduledPolicy ScheduledPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingGroupId">ScalingGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyName">ScalingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyType">ScalingPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.alarmId">AlarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#alarm_id AsPolicyV1#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.coolDownTime">CoolDownTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#id AsPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#region AsPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyAction">ScalingPolicyAction</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scheduledPolicy">ScheduledPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | scheduled_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingGroupId"></a>

```csharp
public string ScalingGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}.

---

##### `ScalingPolicyName`<sup>Required</sup> <a name="ScalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyName"></a>

```csharp
public string ScalingPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}.

---

##### `ScalingPolicyType`<sup>Required</sup> <a name="ScalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyType"></a>

```csharp
public string ScalingPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}.

---

##### `AlarmId`<sup>Optional</sup> <a name="AlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.alarmId"></a>

```csharp
public string AlarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#alarm_id AsPolicyV1#alarm_id}.

---

##### `CoolDownTime`<sup>Optional</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.coolDownTime"></a>

```csharp
public double CoolDownTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#id AsPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#region AsPolicyV1#region}.

---

##### `ScalingPolicyAction`<sup>Optional</sup> <a name="ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyAction"></a>

```csharp
public AsPolicyV1ScalingPolicyAction ScalingPolicyAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

scaling_policy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scaling_policy_action AsPolicyV1#scaling_policy_action}

---

##### `ScheduledPolicy`<sup>Optional</sup> <a name="ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scheduledPolicy"></a>

```csharp
public AsPolicyV1ScheduledPolicy ScheduledPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

scheduled_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#scheduled_policy AsPolicyV1#scheduled_policy}

---

### AsPolicyV1ScalingPolicyAction <a name="AsPolicyV1ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV1ScalingPolicyAction {
    double InstanceNumber = null,
    string Operation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.instanceNumber">InstanceNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#instance_number AsPolicyV1#instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#operation AsPolicyV1#operation}. |

---

##### `InstanceNumber`<sup>Optional</sup> <a name="InstanceNumber" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.instanceNumber"></a>

```csharp
public double InstanceNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#instance_number AsPolicyV1#instance_number}.

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#operation AsPolicyV1#operation}.

---

### AsPolicyV1ScheduledPolicy <a name="AsPolicyV1ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV1ScheduledPolicy {
    string LaunchTime,
    string EndTime = null,
    string RecurrenceType = null,
    string RecurrenceValue = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.launchTime">LaunchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#launch_time AsPolicyV1#launch_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#end_time AsPolicyV1#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceValue">RecurrenceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#start_time AsPolicyV1#start_time}. |

---

##### `LaunchTime`<sup>Required</sup> <a name="LaunchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.launchTime"></a>

```csharp
public string LaunchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#launch_time AsPolicyV1#launch_time}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#end_time AsPolicyV1#end_time}.

---

##### `RecurrenceType`<sup>Optional</sup> <a name="RecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}.

---

##### `RecurrenceValue`<sup>Optional</sup> <a name="RecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceValue"></a>

```csharp
public string RecurrenceValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/as_policy_v1#start_time AsPolicyV1#start_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsPolicyV1ScalingPolicyActionOutputReference <a name="AsPolicyV1ScalingPolicyActionOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV1ScalingPolicyActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetInstanceNumber">ResetInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceNumber` <a name="ResetInstanceNumber" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetInstanceNumber"></a>

```csharp
private void ResetInstanceNumber()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetOperation"></a>

```csharp
private void ResetOperation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumberInput">InstanceNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumber">InstanceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceNumberInput`<sup>Optional</sup> <a name="InstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumberInput"></a>

```csharp
public double InstanceNumberInput { get; }
```

- *Type:* double

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `InstanceNumber`<sup>Required</sup> <a name="InstanceNumber" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumber"></a>

```csharp
public double InstanceNumber { get; }
```

- *Type:* double

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.internalValue"></a>

```csharp
public AsPolicyV1ScalingPolicyAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---


### AsPolicyV1ScheduledPolicyOutputReference <a name="AsPolicyV1ScheduledPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV1ScheduledPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceType">ResetRecurrenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceValue">ResetRecurrenceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetRecurrenceType` <a name="ResetRecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceType"></a>

```csharp
private void ResetRecurrenceType()
```

##### `ResetRecurrenceValue` <a name="ResetRecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceValue"></a>

```csharp
private void ResetRecurrenceValue()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTimeInput">LaunchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValueInput">RecurrenceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTime">LaunchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValue">RecurrenceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `LaunchTimeInput`<sup>Optional</sup> <a name="LaunchTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTimeInput"></a>

```csharp
public string LaunchTimeInput { get; }
```

- *Type:* string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceTypeInput"></a>

```csharp
public string RecurrenceTypeInput { get; }
```

- *Type:* string

---

##### `RecurrenceValueInput`<sup>Optional</sup> <a name="RecurrenceValueInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValueInput"></a>

```csharp
public string RecurrenceValueInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `LaunchTime`<sup>Required</sup> <a name="LaunchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTime"></a>

```csharp
public string LaunchTime { get; }
```

- *Type:* string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; }
```

- *Type:* string

---

##### `RecurrenceValue`<sup>Required</sup> <a name="RecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValue"></a>

```csharp
public string RecurrenceValue { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.internalValue"></a>

```csharp
public AsPolicyV1ScheduledPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---



