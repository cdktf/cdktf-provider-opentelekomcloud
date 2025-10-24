# `taurusdbMysqlQuotaV3` Submodule <a name="`taurusdbMysqlQuotaV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlQuotaV3 <a name="TaurusdbMysqlQuotaV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3 opentelekomcloud_taurusdb_mysql_quota_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlQuotaV3(Construct Scope, string Id, TaurusdbMysqlQuotaV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config">TaurusdbMysqlQuotaV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config">TaurusdbMysqlQuotaV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetInstanceQuota">ResetInstanceQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetRamQuota">ResetRamQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetVcpusQuota">ResetVcpusQuota</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceQuota` <a name="ResetInstanceQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetInstanceQuota"></a>

```csharp
private void ResetInstanceQuota()
```

##### `ResetRamQuota` <a name="ResetRamQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetRamQuota"></a>

```csharp
private void ResetRamQuota()
```

##### `ResetVcpusQuota` <a name="ResetVcpusQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.resetVcpusQuota"></a>

```csharp
private void ResetVcpusQuota()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlQuotaV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlQuotaV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlQuotaV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlQuotaV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlQuotaV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TaurusdbMysqlQuotaV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TaurusdbMysqlQuotaV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TaurusdbMysqlQuotaV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlQuotaV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.availabilityInstanceQuota">AvailabilityInstanceQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.availabilityRamQuota">AvailabilityRamQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.availabilityVcpusQuota">AvailabilityVcpusQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectNameInput">EnterpriseProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.instanceQuotaInput">InstanceQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.ramQuotaInput">RamQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.vcpusQuotaInput">VcpusQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectName">EnterpriseProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.instanceQuota">InstanceQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.ramQuota">RamQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.vcpusQuota">VcpusQuota</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AvailabilityInstanceQuota`<sup>Required</sup> <a name="AvailabilityInstanceQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.availabilityInstanceQuota"></a>

```csharp
public double AvailabilityInstanceQuota { get; }
```

- *Type:* double

---

##### `AvailabilityRamQuota`<sup>Required</sup> <a name="AvailabilityRamQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.availabilityRamQuota"></a>

```csharp
public double AvailabilityRamQuota { get; }
```

- *Type:* double

---

##### `AvailabilityVcpusQuota`<sup>Required</sup> <a name="AvailabilityVcpusQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.availabilityVcpusQuota"></a>

```csharp
public double AvailabilityVcpusQuota { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectIdInput"></a>

```csharp
public string EnterpriseProjectIdInput { get; }
```

- *Type:* string

---

##### `EnterpriseProjectNameInput`<sup>Optional</sup> <a name="EnterpriseProjectNameInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectNameInput"></a>

```csharp
public string EnterpriseProjectNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceQuotaInput`<sup>Optional</sup> <a name="InstanceQuotaInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.instanceQuotaInput"></a>

```csharp
public double InstanceQuotaInput { get; }
```

- *Type:* double

---

##### `RamQuotaInput`<sup>Optional</sup> <a name="RamQuotaInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.ramQuotaInput"></a>

```csharp
public double RamQuotaInput { get; }
```

- *Type:* double

---

##### `VcpusQuotaInput`<sup>Optional</sup> <a name="VcpusQuotaInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.vcpusQuotaInput"></a>

```csharp
public double VcpusQuotaInput { get; }
```

- *Type:* double

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `EnterpriseProjectName`<sup>Required</sup> <a name="EnterpriseProjectName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.enterpriseProjectName"></a>

```csharp
public string EnterpriseProjectName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceQuota`<sup>Required</sup> <a name="InstanceQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.instanceQuota"></a>

```csharp
public double InstanceQuota { get; }
```

- *Type:* double

---

##### `RamQuota`<sup>Required</sup> <a name="RamQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.ramQuota"></a>

```csharp
public double RamQuota { get; }
```

- *Type:* double

---

##### `VcpusQuota`<sup>Required</sup> <a name="VcpusQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.vcpusQuota"></a>

```csharp
public double VcpusQuota { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlQuotaV3Config <a name="TaurusdbMysqlQuotaV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlQuotaV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnterpriseProjectId,
    string EnterpriseProjectName,
    string Id = null,
    double InstanceQuota = null,
    double RamQuota = null,
    double VcpusQuota = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#enterprise_project_id TaurusdbMysqlQuotaV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.enterpriseProjectName">EnterpriseProjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#enterprise_project_name TaurusdbMysqlQuotaV3#enterprise_project_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#id TaurusdbMysqlQuotaV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.instanceQuota">InstanceQuota</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#instance_quota TaurusdbMysqlQuotaV3#instance_quota}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.ramQuota">RamQuota</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#ram_quota TaurusdbMysqlQuotaV3#ram_quota}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.vcpusQuota">VcpusQuota</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#vcpus_quota TaurusdbMysqlQuotaV3#vcpus_quota}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#enterprise_project_id TaurusdbMysqlQuotaV3#enterprise_project_id}.

---

##### `EnterpriseProjectName`<sup>Required</sup> <a name="EnterpriseProjectName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.enterpriseProjectName"></a>

```csharp
public string EnterpriseProjectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#enterprise_project_name TaurusdbMysqlQuotaV3#enterprise_project_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#id TaurusdbMysqlQuotaV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceQuota`<sup>Optional</sup> <a name="InstanceQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.instanceQuota"></a>

```csharp
public double InstanceQuota { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#instance_quota TaurusdbMysqlQuotaV3#instance_quota}.

---

##### `RamQuota`<sup>Optional</sup> <a name="RamQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.ramQuota"></a>

```csharp
public double RamQuota { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#ram_quota TaurusdbMysqlQuotaV3#ram_quota}.

---

##### `VcpusQuota`<sup>Optional</sup> <a name="VcpusQuota" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlQuotaV3.TaurusdbMysqlQuotaV3Config.property.vcpusQuota"></a>

```csharp
public double VcpusQuota { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_quota_v3#vcpus_quota TaurusdbMysqlQuotaV3#vcpus_quota}.

---



