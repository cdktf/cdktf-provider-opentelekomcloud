# `asPolicyV2` Submodule <a name="`asPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.asPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsPolicyV2 <a name="AsPolicyV2" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2 opentelekomcloud_as_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2(Construct Scope, string Id, AsPolicyV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config">AsPolicyV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config">AsPolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction">PutScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy">PutScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetAlarmId">ResetAlarmId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetCoolDownTime">ResetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScalingPolicyAction">ResetScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScheduledPolicy">ResetScheduledPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScalingPolicyAction` <a name="PutScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction"></a>

```csharp
private void PutScalingPolicyAction(IResolvable|AsPolicyV2ScalingPolicyAction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScalingPolicyAction.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]

---

##### `PutScheduledPolicy` <a name="PutScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy"></a>

```csharp
private void PutScheduledPolicy(IResolvable|AsPolicyV2ScheduledPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.putScheduledPolicy.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]

---

##### `ResetAlarmId` <a name="ResetAlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetAlarmId"></a>

```csharp
private void ResetAlarmId()
```

##### `ResetCoolDownTime` <a name="ResetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetCoolDownTime"></a>

```csharp
private void ResetCoolDownTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScalingPolicyAction` <a name="ResetScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScalingPolicyAction"></a>

```csharp
private void ResetScalingPolicyAction()
```

##### `ResetScheduledPolicy` <a name="ResetScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.resetScheduledPolicy"></a>

```csharp
private void ResetScheduledPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsPolicyV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AsPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsPolicyV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AsPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList">AsPolicyV2MetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyAction">ScalingPolicyAction</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList">AsPolicyV2ScalingPolicyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicy">ScheduledPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList">AsPolicyV2ScheduledPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmIdInput">AlarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTimeInput">CoolDownTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyActionInput">ScalingPolicyActionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyNameInput">ScalingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyTypeInput">ScalingPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceIdInput">ScalingResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceTypeInput">ScalingResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicyInput">ScheduledPolicyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmId">AlarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTime">CoolDownTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyName">ScalingPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyType">ScalingPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceId">ScalingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceType">ScalingResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.metadata"></a>

```csharp
public AsPolicyV2MetadataList Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList">AsPolicyV2MetadataList</a>

---

##### `ScalingPolicyAction`<sup>Required</sup> <a name="ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyAction"></a>

```csharp
public AsPolicyV2ScalingPolicyActionList ScalingPolicyAction { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList">AsPolicyV2ScalingPolicyActionList</a>

---

##### `ScheduledPolicy`<sup>Required</sup> <a name="ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicy"></a>

```csharp
public AsPolicyV2ScheduledPolicyList ScheduledPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList">AsPolicyV2ScheduledPolicyList</a>

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmIdInput"></a>

```csharp
public string AlarmIdInput { get; }
```

- *Type:* string

---

##### `CoolDownTimeInput`<sup>Optional</sup> <a name="CoolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTimeInput"></a>

```csharp
public double CoolDownTimeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScalingPolicyActionInput`<sup>Optional</sup> <a name="ScalingPolicyActionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyActionInput"></a>

```csharp
public IResolvable|AsPolicyV2ScalingPolicyAction[] ScalingPolicyActionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]

---

##### `ScalingPolicyNameInput`<sup>Optional</sup> <a name="ScalingPolicyNameInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyNameInput"></a>

```csharp
public string ScalingPolicyNameInput { get; }
```

- *Type:* string

---

##### `ScalingPolicyTypeInput`<sup>Optional</sup> <a name="ScalingPolicyTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyTypeInput"></a>

```csharp
public string ScalingPolicyTypeInput { get; }
```

- *Type:* string

---

##### `ScalingResourceIdInput`<sup>Optional</sup> <a name="ScalingResourceIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceIdInput"></a>

```csharp
public string ScalingResourceIdInput { get; }
```

- *Type:* string

---

##### `ScalingResourceTypeInput`<sup>Optional</sup> <a name="ScalingResourceTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceTypeInput"></a>

```csharp
public string ScalingResourceTypeInput { get; }
```

- *Type:* string

---

##### `ScheduledPolicyInput`<sup>Optional</sup> <a name="ScheduledPolicyInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scheduledPolicyInput"></a>

```csharp
public IResolvable|AsPolicyV2ScheduledPolicy[] ScheduledPolicyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.alarmId"></a>

```csharp
public string AlarmId { get; }
```

- *Type:* string

---

##### `CoolDownTime`<sup>Required</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.coolDownTime"></a>

```csharp
public double CoolDownTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScalingPolicyName`<sup>Required</sup> <a name="ScalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyName"></a>

```csharp
public string ScalingPolicyName { get; }
```

- *Type:* string

---

##### `ScalingPolicyType`<sup>Required</sup> <a name="ScalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingPolicyType"></a>

```csharp
public string ScalingPolicyType { get; }
```

- *Type:* string

---

##### `ScalingResourceId`<sup>Required</sup> <a name="ScalingResourceId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceId"></a>

```csharp
public string ScalingResourceId { get; }
```

- *Type:* string

---

##### `ScalingResourceType`<sup>Required</sup> <a name="ScalingResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.scalingResourceType"></a>

```csharp
public string ScalingResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsPolicyV2Config <a name="AsPolicyV2Config" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ScalingPolicyName,
    string ScalingPolicyType,
    string ScalingResourceId,
    string ScalingResourceType,
    string AlarmId = null,
    double CoolDownTime = null,
    string Id = null,
    string Region = null,
    IResolvable|AsPolicyV2ScalingPolicyAction[] ScalingPolicyAction = null,
    IResolvable|AsPolicyV2ScheduledPolicy[] ScheduledPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyName">ScalingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyType">ScalingPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceId">ScalingResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceType">ScalingResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.alarmId">AlarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.coolDownTime">CoolDownTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#id AsPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#region AsPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyAction">ScalingPolicyAction</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]</code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scheduledPolicy">ScheduledPolicy</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]</code> | scheduled_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ScalingPolicyName`<sup>Required</sup> <a name="ScalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyName"></a>

```csharp
public string ScalingPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_policy_name AsPolicyV2#scaling_policy_name}.

---

##### `ScalingPolicyType`<sup>Required</sup> <a name="ScalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyType"></a>

```csharp
public string ScalingPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_policy_type AsPolicyV2#scaling_policy_type}.

---

##### `ScalingResourceId`<sup>Required</sup> <a name="ScalingResourceId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceId"></a>

```csharp
public string ScalingResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_resource_id AsPolicyV2#scaling_resource_id}.

---

##### `ScalingResourceType`<sup>Required</sup> <a name="ScalingResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingResourceType"></a>

```csharp
public string ScalingResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_resource_type AsPolicyV2#scaling_resource_type}.

---

##### `AlarmId`<sup>Optional</sup> <a name="AlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.alarmId"></a>

```csharp
public string AlarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#alarm_id AsPolicyV2#alarm_id}.

---

##### `CoolDownTime`<sup>Optional</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.coolDownTime"></a>

```csharp
public double CoolDownTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#cool_down_time AsPolicyV2#cool_down_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#id AsPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#region AsPolicyV2#region}.

---

##### `ScalingPolicyAction`<sup>Optional</sup> <a name="ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scalingPolicyAction"></a>

```csharp
public IResolvable|AsPolicyV2ScalingPolicyAction[] ScalingPolicyAction { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]

scaling_policy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scaling_policy_action AsPolicyV2#scaling_policy_action}

---

##### `ScheduledPolicy`<sup>Optional</sup> <a name="ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Config.property.scheduledPolicy"></a>

```csharp
public IResolvable|AsPolicyV2ScheduledPolicy[] ScheduledPolicy { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]

scheduled_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#scheduled_policy AsPolicyV2#scheduled_policy}

---

### AsPolicyV2Metadata <a name="AsPolicyV2Metadata" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2Metadata {

};
```


### AsPolicyV2ScalingPolicyAction <a name="AsPolicyV2ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2ScalingPolicyAction {
    double Limits = null,
    string Operation = null,
    double Percentage = null,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.limits">Limits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#limits AsPolicyV2#limits}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#operation AsPolicyV2#operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.percentage">Percentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#percentage AsPolicyV2#percentage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#size AsPolicyV2#size}. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.limits"></a>

```csharp
public double Limits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#limits AsPolicyV2#limits}.

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#operation AsPolicyV2#operation}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#percentage AsPolicyV2#percentage}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#size AsPolicyV2#size}.

---

### AsPolicyV2ScheduledPolicy <a name="AsPolicyV2ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2ScheduledPolicy {
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
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.launchTime">LaunchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#launch_time AsPolicyV2#launch_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#end_time AsPolicyV2#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceValue">RecurrenceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#start_time AsPolicyV2#start_time}. |

---

##### `LaunchTime`<sup>Required</sup> <a name="LaunchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.launchTime"></a>

```csharp
public string LaunchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#launch_time AsPolicyV2#launch_time}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#end_time AsPolicyV2#end_time}.

---

##### `RecurrenceType`<sup>Optional</sup> <a name="RecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#recurrence_type AsPolicyV2#recurrence_type}.

---

##### `RecurrenceValue`<sup>Optional</sup> <a name="RecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.recurrenceValue"></a>

```csharp
public string RecurrenceValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#recurrence_value AsPolicyV2#recurrence_value}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/as_policy_v2#start_time AsPolicyV2#start_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsPolicyV2MetadataList <a name="AsPolicyV2MetadataList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2MetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get"></a>

```csharp
private AsPolicyV2MetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AsPolicyV2MetadataOutputReference <a name="AsPolicyV2MetadataOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.bandwidthShareType">BandwidthShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipAddress">EipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipId">EipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata">AsPolicyV2Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthShareType`<sup>Required</sup> <a name="BandwidthShareType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.bandwidthShareType"></a>

```csharp
public string BandwidthShareType { get; }
```

- *Type:* string

---

##### `EipAddress`<sup>Required</sup> <a name="EipAddress" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipAddress"></a>

```csharp
public string EipAddress { get; }
```

- *Type:* string

---

##### `EipId`<sup>Required</sup> <a name="EipId" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.eipId"></a>

```csharp
public string EipId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2MetadataOutputReference.property.internalValue"></a>

```csharp
public AsPolicyV2Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2Metadata">AsPolicyV2Metadata</a>

---


### AsPolicyV2ScalingPolicyActionList <a name="AsPolicyV2ScalingPolicyActionList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2ScalingPolicyActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get"></a>

```csharp
private AsPolicyV2ScalingPolicyActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionList.property.internalValue"></a>

```csharp
public IResolvable|AsPolicyV2ScalingPolicyAction[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>[]

---


### AsPolicyV2ScalingPolicyActionOutputReference <a name="AsPolicyV2ScalingPolicyActionOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2ScalingPolicyActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetOperation"></a>

```csharp
private void ResetOperation()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limitsInput">LimitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limits">Limits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limitsInput"></a>

```csharp
public double LimitsInput { get; }
```

- *Type:* double

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.limits"></a>

```csharp
public double Limits { get; }
```

- *Type:* double

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AsPolicyV2ScalingPolicyAction InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScalingPolicyAction">AsPolicyV2ScalingPolicyAction</a>

---


### AsPolicyV2ScheduledPolicyList <a name="AsPolicyV2ScheduledPolicyList" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2ScheduledPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get"></a>

```csharp
private AsPolicyV2ScheduledPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyList.property.internalValue"></a>

```csharp
public IResolvable|AsPolicyV2ScheduledPolicy[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>[]

---


### AsPolicyV2ScheduledPolicyOutputReference <a name="AsPolicyV2ScheduledPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsPolicyV2ScheduledPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceType">ResetRecurrenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceValue">ResetRecurrenceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetRecurrenceType` <a name="ResetRecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceType"></a>

```csharp
private void ResetRecurrenceType()
```

##### `ResetRecurrenceValue` <a name="ResetRecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetRecurrenceValue"></a>

```csharp
private void ResetRecurrenceValue()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTimeInput">LaunchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValueInput">RecurrenceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTime">LaunchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValue">RecurrenceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `LaunchTimeInput`<sup>Optional</sup> <a name="LaunchTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTimeInput"></a>

```csharp
public string LaunchTimeInput { get; }
```

- *Type:* string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceTypeInput"></a>

```csharp
public string RecurrenceTypeInput { get; }
```

- *Type:* string

---

##### `RecurrenceValueInput`<sup>Optional</sup> <a name="RecurrenceValueInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValueInput"></a>

```csharp
public string RecurrenceValueInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `LaunchTime`<sup>Required</sup> <a name="LaunchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.launchTime"></a>

```csharp
public string LaunchTime { get; }
```

- *Type:* string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; }
```

- *Type:* string

---

##### `RecurrenceValue`<sup>Required</sup> <a name="RecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.recurrenceValue"></a>

```csharp
public string RecurrenceValue { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AsPolicyV2ScheduledPolicy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asPolicyV2.AsPolicyV2ScheduledPolicy">AsPolicyV2ScheduledPolicy</a>

---



