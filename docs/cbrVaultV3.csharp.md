# `cbrVaultV3` Submodule <a name="`cbrVaultV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrVaultV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrVaultV3 <a name="CbrVaultV3" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3 opentelekomcloud_cbr_vault_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3(Construct Scope, string Id, CbrVaultV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config">CbrVaultV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config">CbrVaultV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling">PutBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules">PutBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind">ResetAutoBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand">ResetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId">ResetBackupPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules">ResetBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId">ResetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBilling` <a name="PutBilling" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling"></a>

```csharp
private void PutBilling(CbrVaultV3Billing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `PutBindRules` <a name="PutBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules"></a>

```csharp
private void PutBindRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules.parameter.value"></a>

- *Type:* object

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource"></a>

```csharp
private void PutResource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoBind` <a name="ResetAutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind"></a>

```csharp
private void ResetAutoBind()
```

##### `ResetAutoExpand` <a name="ResetAutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand"></a>

```csharp
private void ResetAutoExpand()
```

##### `ResetBackupPolicyId` <a name="ResetBackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId"></a>

```csharp
private void ResetBackupPolicyId()
```

##### `ResetBindRules` <a name="ResetBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules"></a>

```csharp
private void ResetBindRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnterpriseProjectId` <a name="ResetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId"></a>

```csharp
private void ResetEnterpriseProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource"></a>

```csharp
private void ResetResource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CbrVaultV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CbrVaultV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CbrVaultV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CbrVaultV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CbrVaultV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CbrVaultV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CbrVaultV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing">Billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules">BindRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput">AutoBindInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput">AutoExpandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput">BillingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput">BindRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput">ResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind">AutoBind</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand">AutoExpand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Billing`<sup>Required</sup> <a name="Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing"></a>

```csharp
public CbrVaultV3BillingOutputReference Billing { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a>

---

##### `BindRules`<sup>Required</sup> <a name="BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules"></a>

```csharp
public CbrVaultV3BindRulesList BindRules { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource"></a>

```csharp
public CbrVaultV3ResourceList Resource { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a>

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `AutoBindInput`<sup>Optional</sup> <a name="AutoBindInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput"></a>

```csharp
public object AutoBindInput { get; }
```

- *Type:* object

---

##### `AutoExpandInput`<sup>Optional</sup> <a name="AutoExpandInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput"></a>

```csharp
public object AutoExpandInput { get; }
```

- *Type:* object

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput"></a>

```csharp
public string BackupPolicyIdInput { get; }
```

- *Type:* string

---

##### `BillingInput`<sup>Optional</sup> <a name="BillingInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput"></a>

```csharp
public CbrVaultV3Billing BillingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `BindRulesInput`<sup>Optional</sup> <a name="BindRulesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput"></a>

```csharp
public object BindRulesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput"></a>

```csharp
public string EnterpriseProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput"></a>

```csharp
public object ResourceInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoBind`<sup>Required</sup> <a name="AutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind"></a>

```csharp
public object AutoBind { get; }
```

- *Type:* object

---

##### `AutoExpand`<sup>Required</sup> <a name="AutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand"></a>

```csharp
public object AutoExpand { get; }
```

- *Type:* object

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CbrVaultV3Billing <a name="CbrVaultV3Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3Billing {
    string ObjectType,
    string ProtectType,
    double Size,
    string ChargingMode = null,
    string CloudType = null,
    string ConsistentLevel = null,
    string ConsoleUrl = null,
    System.Collections.Generic.IDictionary<string, string> ExtraInfo = null,
    object IsAutoPay = null,
    object IsAutoRenew = null,
    double PeriodNum = null,
    string PeriodType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType">ProtectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode">ChargingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType">CloudType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel">ConsistentLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl">ConsoleUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo">ExtraInfo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay">IsAutoPay</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew">IsAutoRenew</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum">PeriodNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType">PeriodType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}. |

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}.

---

##### `ProtectType`<sup>Required</sup> <a name="ProtectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType"></a>

```csharp
public string ProtectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `ChargingMode`<sup>Optional</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode"></a>

```csharp
public string ChargingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}.

---

##### `CloudType`<sup>Optional</sup> <a name="CloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType"></a>

```csharp
public string CloudType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}.

---

##### `ConsistentLevel`<sup>Optional</sup> <a name="ConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel"></a>

```csharp
public string ConsistentLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}.

---

##### `ConsoleUrl`<sup>Optional</sup> <a name="ConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl"></a>

```csharp
public string ConsoleUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}.

---

##### `ExtraInfo`<sup>Optional</sup> <a name="ExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraInfo { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}.

---

##### `IsAutoPay`<sup>Optional</sup> <a name="IsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay"></a>

```csharp
public object IsAutoPay { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}.

---

##### `IsAutoRenew`<sup>Optional</sup> <a name="IsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew"></a>

```csharp
public object IsAutoRenew { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}.

---

##### `PeriodNum`<sup>Optional</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum"></a>

```csharp
public double PeriodNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}.

---

##### `PeriodType`<sup>Optional</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType"></a>

```csharp
public string PeriodType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}.

---

### CbrVaultV3BindRules <a name="CbrVaultV3BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3BindRules {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#key CbrVaultV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#value CbrVaultV3#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#key CbrVaultV3#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#value CbrVaultV3#value}.

---

### CbrVaultV3Config <a name="CbrVaultV3Config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CbrVaultV3Billing Billing,
    string Name,
    object AutoBind = null,
    object AutoExpand = null,
    string BackupPolicyId = null,
    object BindRules = null,
    string Description = null,
    string EnterpriseProjectId = null,
    string Id = null,
    object Resource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing">Billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind">AutoBind</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand">AutoExpand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules">BindRules</a></code> | <code>object</code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource">Resource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Billing`<sup>Required</sup> <a name="Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing"></a>

```csharp
public CbrVaultV3Billing Billing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `AutoBind`<sup>Optional</sup> <a name="AutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind"></a>

```csharp
public object AutoBind { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `AutoExpand`<sup>Optional</sup> <a name="AutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand"></a>

```csharp
public object AutoExpand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `BackupPolicyId`<sup>Optional</sup> <a name="BackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `BindRules`<sup>Optional</sup> <a name="BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules"></a>

```csharp
public object BindRules { get; set; }
```

- *Type:* object

bind_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `EnterpriseProjectId`<sup>Optional</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource"></a>

```csharp
public object Resource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}.

---

### CbrVaultV3Resource <a name="CbrVaultV3Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3Resource {
    double BackupCount = null,
    double BackupSize = null,
    string[] ExcludeVolumes = null,
    string Id = null,
    string[] IncludeVolumes = null,
    string Name = null,
    string ProtectStatus = null,
    double Size = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount">BackupCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize">BackupSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes">ExcludeVolumes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes">IncludeVolumes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#type CbrVaultV3#type}. |

---

##### `BackupCount`<sup>Optional</sup> <a name="BackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount"></a>

```csharp
public double BackupCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}.

---

##### `BackupSize`<sup>Optional</sup> <a name="BackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize"></a>

```csharp
public double BackupSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}.

---

##### `ExcludeVolumes`<sup>Optional</sup> <a name="ExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes"></a>

```csharp
public string[] ExcludeVolumes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeVolumes`<sup>Optional</sup> <a name="IncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes"></a>

```csharp
public string[] IncludeVolumes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/cbr_vault_v3#type CbrVaultV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrVaultV3BillingOutputReference <a name="CbrVaultV3BillingOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3BillingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode">ResetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType">ResetCloudType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel">ResetConsistentLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl">ResetConsoleUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo">ResetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay">ResetIsAutoPay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew">ResetIsAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum">ResetPeriodNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType">ResetPeriodType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChargingMode` <a name="ResetChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode"></a>

```csharp
private void ResetChargingMode()
```

##### `ResetCloudType` <a name="ResetCloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType"></a>

```csharp
private void ResetCloudType()
```

##### `ResetConsistentLevel` <a name="ResetConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel"></a>

```csharp
private void ResetConsistentLevel()
```

##### `ResetConsoleUrl` <a name="ResetConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl"></a>

```csharp
private void ResetConsoleUrl()
```

##### `ResetExtraInfo` <a name="ResetExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo"></a>

```csharp
private void ResetExtraInfo()
```

##### `ResetIsAutoPay` <a name="ResetIsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay"></a>

```csharp
private void ResetIsAutoPay()
```

##### `ResetIsAutoRenew` <a name="ResetIsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew"></a>

```csharp
private void ResetIsAutoRenew()
```

##### `ResetPeriodNum` <a name="ResetPeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum"></a>

```csharp
private void ResetPeriodNum()
```

##### `ResetPeriodType` <a name="ResetPeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType"></a>

```csharp
private void ResetPeriodType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated">Allocated</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene">FrozenScene</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode">SpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit">StorageUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used">Used</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput">ChargingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput">CloudTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput">ConsistentLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput">ConsoleUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput">ExtraInfoInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput">IsAutoPayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput">IsAutoRenewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput">PeriodNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput">PeriodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput">ProtectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode">ChargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType">CloudType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel">ConsistentLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo">ExtraInfo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay">IsAutoPay</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew">IsAutoRenew</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum">PeriodNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType">PeriodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType">ProtectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allocated`<sup>Required</sup> <a name="Allocated" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated"></a>

```csharp
public double Allocated { get; }
```

- *Type:* double

---

##### `FrozenScene`<sup>Required</sup> <a name="FrozenScene" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene"></a>

```csharp
public string FrozenScene { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `SpecCode`<sup>Required</sup> <a name="SpecCode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode"></a>

```csharp
public string SpecCode { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageUnit`<sup>Required</sup> <a name="StorageUnit" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit"></a>

```csharp
public string StorageUnit { get; }
```

- *Type:* string

---

##### `Used`<sup>Required</sup> <a name="Used" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used"></a>

```csharp
public double Used { get; }
```

- *Type:* double

---

##### `ChargingModeInput`<sup>Optional</sup> <a name="ChargingModeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput"></a>

```csharp
public string ChargingModeInput { get; }
```

- *Type:* string

---

##### `CloudTypeInput`<sup>Optional</sup> <a name="CloudTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput"></a>

```csharp
public string CloudTypeInput { get; }
```

- *Type:* string

---

##### `ConsistentLevelInput`<sup>Optional</sup> <a name="ConsistentLevelInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput"></a>

```csharp
public string ConsistentLevelInput { get; }
```

- *Type:* string

---

##### `ConsoleUrlInput`<sup>Optional</sup> <a name="ConsoleUrlInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput"></a>

```csharp
public string ConsoleUrlInput { get; }
```

- *Type:* string

---

##### `ExtraInfoInput`<sup>Optional</sup> <a name="ExtraInfoInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraInfoInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsAutoPayInput`<sup>Optional</sup> <a name="IsAutoPayInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput"></a>

```csharp
public object IsAutoPayInput { get; }
```

- *Type:* object

---

##### `IsAutoRenewInput`<sup>Optional</sup> <a name="IsAutoRenewInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput"></a>

```csharp
public object IsAutoRenewInput { get; }
```

- *Type:* object

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `PeriodNumInput`<sup>Optional</sup> <a name="PeriodNumInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput"></a>

```csharp
public double PeriodNumInput { get; }
```

- *Type:* double

---

##### `PeriodTypeInput`<sup>Optional</sup> <a name="PeriodTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput"></a>

```csharp
public string PeriodTypeInput { get; }
```

- *Type:* string

---

##### `ProtectTypeInput`<sup>Optional</sup> <a name="ProtectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput"></a>

```csharp
public string ProtectTypeInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode"></a>

```csharp
public string ChargingMode { get; }
```

- *Type:* string

---

##### `CloudType`<sup>Required</sup> <a name="CloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType"></a>

```csharp
public string CloudType { get; }
```

- *Type:* string

---

##### `ConsistentLevel`<sup>Required</sup> <a name="ConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel"></a>

```csharp
public string ConsistentLevel { get; }
```

- *Type:* string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl"></a>

```csharp
public string ConsoleUrl { get; }
```

- *Type:* string

---

##### `ExtraInfo`<sup>Required</sup> <a name="ExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraInfo { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsAutoPay`<sup>Required</sup> <a name="IsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay"></a>

```csharp
public object IsAutoPay { get; }
```

- *Type:* object

---

##### `IsAutoRenew`<sup>Required</sup> <a name="IsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew"></a>

```csharp
public object IsAutoRenew { get; }
```

- *Type:* object

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `PeriodNum`<sup>Required</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum"></a>

```csharp
public double PeriodNum { get; }
```

- *Type:* double

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType"></a>

```csharp
public string PeriodType { get; }
```

- *Type:* string

---

##### `ProtectType`<sup>Required</sup> <a name="ProtectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType"></a>

```csharp
public string ProtectType { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue"></a>

```csharp
public CbrVaultV3Billing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---


### CbrVaultV3BindRulesList <a name="CbrVaultV3BindRulesList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3BindRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get"></a>

```csharp
private CbrVaultV3BindRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CbrVaultV3BindRulesOutputReference <a name="CbrVaultV3BindRulesOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3BindRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CbrVaultV3ResourceList <a name="CbrVaultV3ResourceList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3ResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get"></a>

```csharp
private CbrVaultV3ResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CbrVaultV3ResourceOutputReference <a name="CbrVaultV3ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CbrVaultV3ResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount">ResetBackupCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize">ResetBackupSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes">ResetExcludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes">ResetIncludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupCount` <a name="ResetBackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount"></a>

```csharp
private void ResetBackupCount()
```

##### `ResetBackupSize` <a name="ResetBackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize"></a>

```csharp
private void ResetBackupSize()
```

##### `ResetExcludeVolumes` <a name="ResetExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes"></a>

```csharp
private void ResetExcludeVolumes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeVolumes` <a name="ResetIncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes"></a>

```csharp
private void ResetIncludeVolumes()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus"></a>

```csharp
private void ResetProtectStatus()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput">BackupCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput">BackupSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput">ExcludeVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput">IncludeVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount">BackupCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize">BackupSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes">ExcludeVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes">IncludeVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupCountInput`<sup>Optional</sup> <a name="BackupCountInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput"></a>

```csharp
public double BackupCountInput { get; }
```

- *Type:* double

---

##### `BackupSizeInput`<sup>Optional</sup> <a name="BackupSizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput"></a>

```csharp
public double BackupSizeInput { get; }
```

- *Type:* double

---

##### `ExcludeVolumesInput`<sup>Optional</sup> <a name="ExcludeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput"></a>

```csharp
public string[] ExcludeVolumesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeVolumesInput`<sup>Optional</sup> <a name="IncludeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput"></a>

```csharp
public string[] IncludeVolumesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput"></a>

```csharp
public string ProtectStatusInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount"></a>

```csharp
public double BackupCount { get; }
```

- *Type:* double

---

##### `BackupSize`<sup>Required</sup> <a name="BackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize"></a>

```csharp
public double BackupSize { get; }
```

- *Type:* double

---

##### `ExcludeVolumes`<sup>Required</sup> <a name="ExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes"></a>

```csharp
public string[] ExcludeVolumes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeVolumes`<sup>Required</sup> <a name="IncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes"></a>

```csharp
public string[] IncludeVolumes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus"></a>

```csharp
public string ProtectStatus { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



