# `identityLoginPolicyV3` Submodule <a name="`identityLoginPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityLoginPolicyV3 <a name="IdentityLoginPolicyV3" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3 opentelekomcloud_identity_login_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityLoginPolicyV3(Construct Scope, string Id, IdentityLoginPolicyV3Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config">IdentityLoginPolicyV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config">IdentityLoginPolicyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetAccountValidityPeriod">ResetAccountValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetCustomInfoForLogin">ResetCustomInfoForLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLockoutDuration">ResetLockoutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLoginFailedTimes">ResetLoginFailedTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetPeriodWithLoginFailures">ResetPeriodWithLoginFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetShowRecentLoginInfo">ResetShowRecentLoginInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountValidityPeriod` <a name="ResetAccountValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetAccountValidityPeriod"></a>

```csharp
private void ResetAccountValidityPeriod()
```

##### `ResetCustomInfoForLogin` <a name="ResetCustomInfoForLogin" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetCustomInfoForLogin"></a>

```csharp
private void ResetCustomInfoForLogin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLockoutDuration` <a name="ResetLockoutDuration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLockoutDuration"></a>

```csharp
private void ResetLockoutDuration()
```

##### `ResetLoginFailedTimes` <a name="ResetLoginFailedTimes" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetLoginFailedTimes"></a>

```csharp
private void ResetLoginFailedTimes()
```

##### `ResetPeriodWithLoginFailures` <a name="ResetPeriodWithLoginFailures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetPeriodWithLoginFailures"></a>

```csharp
private void ResetPeriodWithLoginFailures()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetSessionTimeout"></a>

```csharp
private void ResetSessionTimeout()
```

##### `ResetShowRecentLoginInfo` <a name="ResetShowRecentLoginInfo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.resetShowRecentLoginInfo"></a>

```csharp
private void ResetShowRecentLoginInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityLoginPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityLoginPolicyV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityLoginPolicyV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityLoginPolicyV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityLoginPolicyV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityLoginPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityLoginPolicyV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityLoginPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityLoginPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriodInput">AccountValidityPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLoginInput">CustomInfoForLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDurationInput">LockoutDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimesInput">LoginFailedTimesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailuresInput">PeriodWithLoginFailuresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfoInput">ShowRecentLoginInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriod">AccountValidityPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLogin">CustomInfoForLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDuration">LockoutDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimes">LoginFailedTimes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailures">PeriodWithLoginFailures</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfo">ShowRecentLoginInfo</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountValidityPeriodInput`<sup>Optional</sup> <a name="AccountValidityPeriodInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriodInput"></a>

```csharp
public double AccountValidityPeriodInput { get; }
```

- *Type:* double

---

##### `CustomInfoForLoginInput`<sup>Optional</sup> <a name="CustomInfoForLoginInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLoginInput"></a>

```csharp
public string CustomInfoForLoginInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LockoutDurationInput`<sup>Optional</sup> <a name="LockoutDurationInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDurationInput"></a>

```csharp
public double LockoutDurationInput { get; }
```

- *Type:* double

---

##### `LoginFailedTimesInput`<sup>Optional</sup> <a name="LoginFailedTimesInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimesInput"></a>

```csharp
public double LoginFailedTimesInput { get; }
```

- *Type:* double

---

##### `PeriodWithLoginFailuresInput`<sup>Optional</sup> <a name="PeriodWithLoginFailuresInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailuresInput"></a>

```csharp
public double PeriodWithLoginFailuresInput { get; }
```

- *Type:* double

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeoutInput"></a>

```csharp
public double SessionTimeoutInput { get; }
```

- *Type:* double

---

##### `ShowRecentLoginInfoInput`<sup>Optional</sup> <a name="ShowRecentLoginInfoInput" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfoInput"></a>

```csharp
public object ShowRecentLoginInfoInput { get; }
```

- *Type:* object

---

##### `AccountValidityPeriod`<sup>Required</sup> <a name="AccountValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.accountValidityPeriod"></a>

```csharp
public double AccountValidityPeriod { get; }
```

- *Type:* double

---

##### `CustomInfoForLogin`<sup>Required</sup> <a name="CustomInfoForLogin" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.customInfoForLogin"></a>

```csharp
public string CustomInfoForLogin { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.lockoutDuration"></a>

```csharp
public double LockoutDuration { get; }
```

- *Type:* double

---

##### `LoginFailedTimes`<sup>Required</sup> <a name="LoginFailedTimes" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.loginFailedTimes"></a>

```csharp
public double LoginFailedTimes { get; }
```

- *Type:* double

---

##### `PeriodWithLoginFailures`<sup>Required</sup> <a name="PeriodWithLoginFailures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.periodWithLoginFailures"></a>

```csharp
public double PeriodWithLoginFailures { get; }
```

- *Type:* double

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `ShowRecentLoginInfo`<sup>Required</sup> <a name="ShowRecentLoginInfo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.showRecentLoginInfo"></a>

```csharp
public object ShowRecentLoginInfo { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityLoginPolicyV3Config <a name="IdentityLoginPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityLoginPolicyV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double AccountValidityPeriod = null,
    string CustomInfoForLogin = null,
    string Id = null,
    double LockoutDuration = null,
    double LoginFailedTimes = null,
    double PeriodWithLoginFailures = null,
    double SessionTimeout = null,
    object ShowRecentLoginInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.accountValidityPeriod">AccountValidityPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.customInfoForLogin">CustomInfoForLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lockoutDuration">LockoutDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.loginFailedTimes">LoginFailedTimes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.periodWithLoginFailures">PeriodWithLoginFailures</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.showRecentLoginInfo">ShowRecentLoginInfo</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountValidityPeriod`<sup>Optional</sup> <a name="AccountValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.accountValidityPeriod"></a>

```csharp
public double AccountValidityPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#account_validity_period IdentityLoginPolicyV3#account_validity_period}.

---

##### `CustomInfoForLogin`<sup>Optional</sup> <a name="CustomInfoForLogin" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.customInfoForLogin"></a>

```csharp
public string CustomInfoForLogin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#custom_info_for_login IdentityLoginPolicyV3#custom_info_for_login}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#id IdentityLoginPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockoutDuration`<sup>Optional</sup> <a name="LockoutDuration" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.lockoutDuration"></a>

```csharp
public double LockoutDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#lockout_duration IdentityLoginPolicyV3#lockout_duration}.

---

##### `LoginFailedTimes`<sup>Optional</sup> <a name="LoginFailedTimes" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.loginFailedTimes"></a>

```csharp
public double LoginFailedTimes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#login_failed_times IdentityLoginPolicyV3#login_failed_times}.

---

##### `PeriodWithLoginFailures`<sup>Optional</sup> <a name="PeriodWithLoginFailures" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.periodWithLoginFailures"></a>

```csharp
public double PeriodWithLoginFailures { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#period_with_login_failures IdentityLoginPolicyV3#period_with_login_failures}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#session_timeout IdentityLoginPolicyV3#session_timeout}.

---

##### `ShowRecentLoginInfo`<sup>Optional</sup> <a name="ShowRecentLoginInfo" id="@cdktf/provider-opentelekomcloud.identityLoginPolicyV3.IdentityLoginPolicyV3Config.property.showRecentLoginInfo"></a>

```csharp
public object ShowRecentLoginInfo { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/identity_login_policy_v3#show_recent_login_info IdentityLoginPolicyV3#show_recent_login_info}.

---



